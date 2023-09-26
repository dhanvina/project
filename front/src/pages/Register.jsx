import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../interceptors/axios";
function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        name: "",
        password: "",
        password2: "",
        role: "Staff",
    });
    const { email, password, name, password2, role } = data;
    function onChange(e) {
        setData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }
    console.log(data);
    async function onSubmit(e) {
        console.log(data);
        e.preventDefault();
        try {
            let response = await axios.post("api/user/register/", data, {
                headers: {
                    "Content-type": "application/json",
                },
            });

            console.log(response);
            if (response.status == 201) {
                toast.success("User Created");
                navigate("/login");
            } else if (response.response.status == 400) {
                toast.error("Something went wrong");
            }
        } catch (error) {
            toast.dismiss();
            toast.error(error);
            return;
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center top-4 ">
                    <p className="text-3xl font-semibold text-center my-9">Registration Form</p>
                    <div className=" flex flex-col w-full max-w-md gap-8 ">
                        <input onChange={onChange} required id="name" type="text" value={name} placeholder="name" className="px-4 py-3 rounded-md" />
                        <div className="flex items-center justify-between w-full ">
                            <input onChange={onChange} required id="email" type="email" value={email} placeholder="Email" className="px-4 py-3 rounded-md" />
                            Role:
                            <select required defaultValue={role} id="role" onChange={onChange}>
                                <option value="Admin">Admin</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </div>
                        <input onChange={onChange} required id="password" type="password" value={password} placeholder="password" className="px-4 py-3 rounded-md" />
                        <input onChange={onChange} required id="password2" type="password" value={password2} placeholder="Confirm Password" className="px-4 py-3 rounded-md" />
                        <button className="px-8 py-2 text-white bg-blue-600 hover:bg-blue-700 transition ease-in-out rounded-md ">Register</button>
                        <div className="w-full text-sm items-center justify-center ">
                            Already have an account?{" "}
                            <span className="text-red-600 cursor-pointer">
                                <Link to="/login">Log In</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;
