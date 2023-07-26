import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
export default function Head() {
    const [isOpen, setIsOpen] = useState(false);
    const nav = useNavigate();
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    function navi(loc) {
        nav(loc);
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="pb-6 sticky z-30 w-full bg-slate-50 shadow-xl h-16 ">
                <img onClick={() => nav("/")} src={require("../img/GAT-logo.png")} alt="college logo" className="w-12 cursor-pointer absolute ml-9 my-1 mr-4" />

                <div className="absolute z-50 top-3 right-16 mr-2 flex flex-col w-[150px] justify-center items-center ">
                    <button className="top-0 right-0   w-[85%] px-4 py-2  font-semibold text-black bg-slate-50 hover:text-gray-700 hover:border-b-4 border-b-blue-500 transition ease-in-out duration-200" onClick={toggleDropdown}>
                        DropDown
                    </button>

                    {isOpen && (
                        <div className="duration-150 transition ease-in-out relative w-full top-3    py-2 mt-3 bg-white shadow-lg rounded-lg ">
                            <button
                                onClick={() => {
                                    navi("/issue");
                                }}
                                className="transition ease-in-out text-center w-full block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Issues
                            </button>
                            {/* <button */}
                            {/*     onClick={() => { */}
                            {/*         navi("/recieve"); */}
                            {/*     }} */}
                            {/*     className="transition ease-in-out text-center w-full block px-4 py-2 text-gray-800 hover:bg-gray-200" */}
                            {/* > */}
                            {/*     Recieved */}
                            {/* </button> */}
                            <button
                                onClick={() => {
                                    navi("/departmentlist");
                                }}
                                className="transition ease-in-out text-center w-full block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Department List
                            </button>
                            <button
                                onClick={() => {
                                    navi("/equipments");
                                }}
                                className="transition ease-in-out text-center w-full block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Equipment Details
                            </button>
                            <button
                                onClick={() => {
                                    navi("/purchase");
                                }}
                                className="transition ease-in-out text-center w-full block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Purchase Order
                            </button>
                            <button
                                onClick={() => {
                                    navi("/lab");
                                }}
                                className="transition ease-in-out text-center w-full block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Lab Info
                            </button>
                        </div>
                    )}
                </div>

                <CgProfile
                    onClick={() => {
                        nav("/profile");
                    }}
                    className="absolute right-0 w-10 pr-3 mr-8 h-full cursor-pointer"
                />
            </div>
        </>
    );
}
