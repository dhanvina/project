import { useSelector } from "react-redux";
import Dashboard from "../pages/Dashboard";

function Panel({ children }) {
    const { isOpen } = useSelector((store) => {
        return store.sidePanel;
    });
    return (
        <>
            <div className="flex">
                <Dashboard />
                <div className={` w-full pr-4 -z-10 ${!isOpen ? " -translate-x-28  transition-transform ease-in-out " : "-translate-x-28  ease-in-out"} `}>{children}</div>
            </div>
        </>
    );
}

export default Panel;
