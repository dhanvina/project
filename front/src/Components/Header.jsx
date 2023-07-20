import React, { useState } from "react";
import Issue from "../Issues";
import { useNavigate } from "react-router-dom";
import { CgProfile } from 'react-icons/cg'
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
            <div className="fixed z-30 w-full bg-white shadow-xl h-14 ">

<img src={require('../img/GAT-logo.png')} className="w-12 absolute ml-9 my-1 mr-4"/>


                <div className="absolute z-50 top-2 right-6">
                    <button className="absolute items-center right-16 w-48 px-4 py-2 font-semibold text-black bg-white rounded hover:text-gray-700 hover:border-b-2 border-blue-600 " onClick={toggleDropdown}>
                       Equipments 
                    </button>

                    {isOpen && (
                        <div className="relative  right-16 top-10 w-48 py-2 mt-3 bg-white shadow-lg rounded-lg ">
                            <button
                                onClick={() => {
                                    navi("/issue");
                                }}
                                className="text-center w-full block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Issues
                            </button>
                            <button
                                onClick={() => {
                                    navi("/recieve");
                                }}
                                className="text-center w-full block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                                Recieved
                            </button>
                        </div>
                    )}
                </div>

<CgProfile className="absolute right-0 w-10 pr-3 mr-10 h-full"/>
            </div>
        </>
    );
}
