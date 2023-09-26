import React, { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/auth/userSlice";
export default function Profile() {
    const navigate = useNavigate();
    const [editable, setEditable] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector((store) => {
        return store.user;
    });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const { name, email } = formData;
    function SignOut() {
        try {
            dispatch(logOut());
            toast.success("Signed Out", { position: "bottom-center", hideProgressBar: true, delay: 1200, theme: "dark" });
            navigate("/login");
        } catch (e) {
            toast.error("Something went wrong", { position: "bottom-center", hideProgressBar: true, delay: 1200, theme: "dark" });
        }
    }

    async function onSubmit() {}

    async function infoEdit(e) {}

    return (
        <div>
            <div className="flex flex-col flex-wrap items-center justify-center max-w-6xl mx-auto ">
                <div className="my-10 text-3xl font-bold text-center ">{state.role}'s Profile</div>
                <form className="w-[95%] m-auto  md:w-[50%] ">
                    <input type="text" disabled={!editable} placeholder="Name" id="name" value={name} className={` w-full p-3 my-4 text-xl rounded transition ease-in-out border border-gray-400 bg-white text-gray-700 ${editable && "bg-rose-300 text-black"} `} onChange={infoEdit} />
                    <input type="text" value={email} id="email" placeholder="Email" className={`w-full p-3 my-4 text-xl rounded transition ease-in-out border-gray-400 bg-white `} disabled />
                    <div className="flex items-center justify-end uppercase mt-1">
                        <p className="text-lg text-red-600 cursor-pointer hover:text-red-800 transition ease-in-out duration-100" onClick={() => SignOut()}>
                            Log out
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
// flex justify-between w-[95%] md:w-[50%]  m-auto
