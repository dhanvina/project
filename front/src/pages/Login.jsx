import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { setCred, logOut } from "../features/auth/userSlice";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, password } = data;
    function onChange(e) {
        setData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }
    async function onSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.post("http://localhost:8000/api/user/login/", data, {
                headers: {
                    "Content-type": "application/json",
                },
            });
            let statusCode = response.status;
            if (statusCode == 200) {
                dispatch(setCred(response.data));
                toast.success(`Logged Successful`);

                navigate("/");
            } else if (statusCode == 404) {
                dispatch(logOut(response));
                toast.dismiss();
                toast.error("Email or Password is not Valid");
                return;
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center -top-4">
                    <p className="text-3xl font-semibold text-center my-9">Login</p>
                    <div className="flex flex-col w-full max-w-md gap-8 ">
                        <input onChange={onChange} required id="email" type="email" value={email} placeholder="email" className="px-4 py-3 rounded-md" />
                        <input onChange={onChange} required id="password" type="password" value={password} placeholder="password" className="px-4 py-3 rounded-md" />
                        <button className="px-8 py-2 text-white bg-blue-600 hover:bg-blue-700 transition ease-in-out rounded-md ">Login </button>
                    </div>
                    <div className="mt-3 text-sm">
                        Register An Account -{" "}
                        <span className="text-red-600 cursor-pointer">
                            <Link to="/register">Register</Link>
                        </span>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;
