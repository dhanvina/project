import MultiForm from "./MultiForm";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DepartmentForm from "./DepartmentForm";
// import EquipmentDetailsForm from "./EquipmentDetailsForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    return (
        <div className="App">
            <ToastContainer />
            <MultiForm />
        </div>
    );
}

export default App;
