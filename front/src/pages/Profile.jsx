import React, { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export default function Profile() {
    const navigate = useNavigate();
    const [editable, setEditable] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const { name, email } = formData;
    function SignOut() {
        try {
            toast.success("Signed Out", { position: "bottom-center", hideProgressBar: true, delay: 1200, theme: "dark" });
            navigate("/");
        } catch (e) {
            toast.error("Something went wrong", { position: "bottom-center", hideProgressBar: true, delay: 1200, theme: "dark" });
        }
    }

    async function onSubmit() {}

    async function infoEdit(e) {}

    return (
        <div>
            <div className="flex flex-col flex-wrap items-center justify-center max-w-6xl mx-auto ">
                <div className="my-6 text-3xl font-bold text-center ">User Profile</div>
                <form className="w-[95%] m-auto  md:w-[50%] ">
                    <input type="text" disabled={!editable} placeholder="Name" id="name" value={name} className={` w-full p-3 my-4 text-xl rounded transition ease-in-out border border-gray-400 bg-white text-gray-700 ${editable && "bg-rose-300 text-black"} `} onChange={infoEdit} />
                    <input type="text" value={email} id="email" placeholder="Email" className={`w-full p-3 my-4 text-xl rounded transition ease-in-out border-gray-400 bg-white `} disabled />
                    <div className="flex justify-between mt-1">
                        <p className="text-lg ">
                            Want to change your name?{" "}
                            <span
                                className="text-blue-600 cursor-pointer transition ease-in-out duration-100 hover:text-blue-800"
                                onClick={() => {
                                    //as the user clicks on apply changes
                                    setEditable(!editable);
                                }}
                            >
                                {editable ? "Apply changes" : "Edit"}
                            </span>{" "}
                        </p>
                        <p className="text-lg text-red-600 cursor-pointer hover:text-red-800 transition ease-in-out duration-100 onClick={SignOut}">Sign out</p>
                    </div>
                    <Link to="">
                        {" "}
                        <button className="flex flex-row-reverse items-center justify-center w-full p-4 mt-5 text-sm font-semibold text-white uppercase bg-blue-600 shadow-md cursor-pointer  rounded-md transition duration-100 ease-in-out hover:shadow-xl active:bg-blue-800">
                            Add Details <TbListDetails className="mr-2 text-lg rounded-full" />
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
// flex justify-between w-[95%] md:w-[50%]  m-auto
