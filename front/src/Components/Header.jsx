import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Dashboard from "../pages/Dashboard";
import { useSelector } from "react-redux";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openPanel } from "../features/auth/sidePanelSlice";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Head() {
    let pageUrls = ["issue", "departmentlist", "purchase", "lab", "equipments", "review"];
    let dispatch = useDispatch();
    let user = useSelector((store) => {
        return store.user;
    });
    const location = useLocation();
    const nav = useNavigate();
    let headerDisplay;
    if (location.pathname == "/login") {
        headerDisplay = false;
    } else {
        headerDisplay = true;
    }

    if (user.status) {
    }

    // if (user.role === "admin") {
    //     pageUrls = pageUrls.filter((item) => {
    //         if (item != "issue" && item != "review") {
    //             return true;
    //         }
    //     });
    // } else if (user.role === "incharge") {
    //     pageUrls = pageUrls.filter((item) => {
    //         if (item == "issue" || item == "review") return true;
    //     });
    // } else {
    //     pageUrls = [];
    // }
    console.log(pageUrls);
    return (
        <>
            {headerDisplay && (
                <div className="sticky z-50 flex items-center justify-between w-full py-2 shadow-lg space-x-3 bg-slate-50">
                    {location.pathname != "/" ? (
                        <button type="button" className="fixed top-5 left-3" onClick={() => dispatch(openPanel())}>
                            <AiOutlineMenuUnfold />
                        </button>
                    ) : (
                        ""
                    )}
                    <div className="flex font-semibold gap-16 ">
                        <img onClick={() => nav("/")} src={require("../img/GAT-logo.png")} alt="college logo" className="w-12 cursor-pointer ml-9 " />
                        <button className="px-3 hover:shadow-md rounded-md hover:bg-blue-400 hover:text-white transition ease-in-out" onClick={() => nav("/demo")}>
                            Dashboard
                        </button>
                    </div>
                    <div className="flex items-center ">
                        <DropDown pageUrls={pageUrls} />
                        <div className="px-3">
                            {" "}
                            <CgProfile
                                onClick={() => {
                                    nav("/profile");
                                }}
                                className="text-3xl cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export function DropDown(prop) {
    const nav = useNavigate();
    const { pageUrls } = prop;
    return (
        <Menu as="div" className="relative inline-block text-left ">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  hover:bg-gray-50">
                    Details <BsChevronDown className="w-5 h-5 -mr-1 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 mt-5 bg-white shadow-lg w-36 origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 ">
                        {pageUrls.map((item, index) => (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <button onClick={() => nav(`${item}`)} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm w-full")}>
                                        {item}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default Head;
