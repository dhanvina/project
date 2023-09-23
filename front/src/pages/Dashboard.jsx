import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineIssuesClose, AiOutlineMenuUnfold } from "react-icons/ai";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { openPanel } from "../features/auth/sidePanelSlice";
import { MdSpaceDashboard } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { FcDepartment } from "react-icons/fc";
import { BiSearchAlt, BiSolidPurchaseTag } from "react-icons/bi";
import { RiComputerFill } from "react-icons/ri";
function Dashboard() {
    const dispatch = useDispatch();
    const panelState = useSelector((store) => {
        return store.sidePanel;
    });

    return (
        <div className="">
            <button type="button" className="fixed top-3 left-2" onClick={() => dispatch(openPanel())}>
                <AiOutlineMenuUnfold />
            </button>

            <aside className={`w-64 h-screen transition-transform ${panelState.isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    <ul className="flex flex-col pl-1 items-start justify-center font-medium space-y-2">
                        <li>
                            <span className="flex items-center justify-start text-lg font-semibold space-x-2">
                                <MdSpaceDashboard />
                                <p> Dashboard </p>
                            </span>
                        </li>
                        <li>
                            <Link to="/demo" className="flex items-center justify-center space-x-2">
                                <FcDepartment />
                                <span>Department List</span>{" "}
                            </Link>
                        </li>
                        <li>
                            <Link to="/lablist" className="flex items-center justify-center space-x-2">
                                <ImLab /> <span>Labs List</span>{" "}
                            </Link>
                        </li>
                        <li>
                            <Link to="/issueslist" className="flex justify-center items-center space-x-2">
                                <AiOutlineIssuesClose /> <span>Issues List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/purchaselist" className="flex justify-center items-center space-x-2">
                                <BiSolidPurchaseTag />
                                <span> Purchase order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/equipmentlist" className="flex justify-center items-center space-x-2">
                                <RiComputerFill />
                                <span>Equipment List</span>{" "}
                            </Link>
                        </li>
                        <li>
                            <Link to="/equipmentreviewlist" className="flex justify-center items-center space-x-2">
                                <BiSearchAlt />
                                <span> Equipment Review List</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Dashboard;
