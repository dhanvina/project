import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Issue from "./Issues";
import Header from "./Components/Header";
import Recieved from "./Recieved";
import Home from "./Home";
import Purchase from "./PurchaseOrderForm";
import DepartmentList from "./DepartmentForm";
import EquipmentDetailsForm from "./EquipmentDetailsForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LabInformation from "./LabInformationForm";
import Profile from "./Profile";
function App() {
    return (
        <div className="App">
            <ToastContainer position="bottom-center" theme="dark" />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/issue" element={<Issue />} />
                    <Route path="/departmentlist" element={<DepartmentList />} />
                    <Route path="/equipments" element={<EquipmentDetailsForm />} />
                    <Route path="/purchase" element={<Purchase />} />
                    <Route path="/lab" element={<LabInformation />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
