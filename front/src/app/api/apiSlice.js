import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCred, logOut } from "../../features/auth/userSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, someOptions) => {
    let result = await baseQuery(args, api, someOptions);
    if (result?.error?.originalStatus === 403) {
        console.log("sending refresh token");
        const refreshResult = await baseQuery("/refresh", api, someOptions);
        console.log(refreshResult);
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            api.dispatch(setCred({ ...refreshResult.data, user }));
            result = await baseQuery(args, api, someOptions);
        } else {
            api.dispatch(logOut());
        }
    }
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({}),
});
