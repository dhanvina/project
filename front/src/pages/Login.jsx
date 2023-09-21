import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { adminLogin } from "../features/userSlice";
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
        await fetch("http://127.0.0.1:8000/api/LabInchargeLogin/", {
            headers: {
                "Content-type": "application/json",
            },
            method: "POST",
            body: data,
        });
        const response = { type: "incharge", name: "John" };
        if (response.type == "admin" || "incharge") {
            dispatch(adminLogin(response.type));
            toast.success(`Logged in as ${response.name}`);
            navigate("/");
        } else {
            toast.dismiss();
            toast.error("Make an account");
            return;
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="flex justify-center absolute items-center -top-4 right-0 left-0 bottom-0 flex-col   ">
                    <p className="text-center my-9 text-3xl font-semibold">Login</p>
                    <div className="flex flex-col gap-8 max-w-md w-full ">
                        <input onChange={onChange} required id="email" type="email" value={email} placeholder="email" className="py-3 px-4 rounded-md" />
                        <input onChange={onChange} required id="password" type="password" value={password} placeholder="password" className="py-3 px-4 rounded-md" />
                        <button className="px-8 text-white hover:bg-blue-700 transition ease-in-out py-2 bg-blue-600 rounded-md ">Login </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;
