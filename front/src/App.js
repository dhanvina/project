import MultiForm from "./MultiForm";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DepartmentForm from "./DepartmentForm";
// import EquipmentDetailsForm from "./EquipmentDetailsForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Issue from "./Issues";
import Header from "./Components/Header";
import Recieved from "./Recieved";
import Home from "./Home";
import Purchase from "./PurchaseOrderForm";
import Ok from "./DepartmentForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <ToastContainer position="bottom-center" theme="dark" />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/issue" element={<Issue />} />
                    {/* <Route path="/pur" element={<Purchase />} /> */}
                    <Route path="/ok" element={<Ok />} />
                    <Route path="/recieve" element={<Recieved />} />
                    <Route path="/recieve" element={<Recieved />} />

                    <Route path="/recieve" element={<Recieved />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
