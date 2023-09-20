import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import "../index.css";
function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div>
            <button type="button" onClick={toggleSidebar} className="">
                <AiOutlineMenuUnfold />
            </button>

            <aside className={` w-64 h-screen sm:translate-x-0  transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="h-full sm:translate-x-0 px-3 py-4 overflow-y-auto bg-gray-50 ">
                    <ul className="flex flex-col items-center justify-center font-medium space-y-2">
                        <li>
                            <span className="text-lg font-semibold underline">
                                <p> Dashboard</p>
                            </span>
                        </li>
                        <li>
                            <Link to="/demo">Department List</Link>
                        </li>
                        <li>
                            <Link to="/lablist">Labs List</Link>
                        </li>
                        <li>
                            <Link to="/issueslist">Issues List</Link>
                        </li>
                        <li>
                            <Link to="/purchaselist">Purchase order List</Link>
                        </li>
                        <li>
                            <Link to="/equipmentlist">Equipment List</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Dashboard;
