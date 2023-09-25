import axios from "axios";
import { setCred } from "../features/auth/userSlice";
import store from "../pages/store";
let refresh = false;

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
});

const state = store.getState().user;

axiosInstance.interceptors.response.use(
    (resp) => resp,
    async (error) => {
        console.log("sending the request");
        if (error.response.status === 401 && !refresh) {
            refresh = true;

            console.log(localStorage.getItem("persist:root"));
            const response = await axiosInstance.post(
                "http://127.0.0.1:8000/api/user/token/refresh/",
                {
                    refresh: state?.token?.refresh,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
                { withCredentials: true }
            );

            if (response.status === 200) {
                axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${response.data["access"]}`;
                store.dispatch(setCred(response));
                return axiosInstance(error.config);
            }
        }
        refresh = false;
        return error;
    }
);

export default axiosInstance;
