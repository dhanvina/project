import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Dashboard from "../pages/Dashboard";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Head() {
    const nav = useNavigate();
    return (
        <>
            <div className="space-x-3 py-2 sticky z-30 flex justify-between items-center w-full bg-slate-50 shadow-lg  ">
                <div className="flex gap-16 font-semibold ">
                    <img onClick={() => nav("/")} src={require("../img/GAT-logo.png")} alt="college logo" className="w-12 cursor-pointer ml-9 " />
                    <button className="hover:shadow-md px-3 rounded-md hover:bg-blue-400 hover:text-white transition ease-in-out" onClick={() => nav("/dashboard")}>
                        Dashboard
                    </button>
                </div>
                <div className="flex items-center gap-5">
                    <DropDown />
                    <CgProfile
                        onClick={() => {
                            nav("/profile");
                        }}
                        className="text-3xl mr-5 cursor-pointer"
                    />
                </div>
            </div>
        </>
    );
}

export function DropDown() {
    const nav = useNavigate();
    return (
        <Menu as="div" className=" relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  hover:bg-gray-50">
                    Details <BsChevronDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 mt-5 w-36  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button onClick={() => nav("/issue")} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm w-full")}>
                                    Issues
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button onClick={() => nav("/departmentlist")} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm w-full")}>
                                    {" "}
                                    Department List
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button onClick={() => nav("/purchase")} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm w-full")}>
                                    {" "}
                                    Purchase Order
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button onClick={() => nav("/lab")} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm w-full")}>
                                    {" "}
                                    Lab Info
                                </button>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <button onClick={() => nav("/equipments")} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm w-full")}>
                                    {" "}
                                    Equipments Details
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
