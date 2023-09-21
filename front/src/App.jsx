import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Issue from "./pages/Issues";
import Header from "./Components/Header";
import Recieved from "./pages/Recieved";
import Home from "./pages/Home";
import Purchase from "./pages/PurchaseOrderForm";
import DepartmentList from "./pages/DepartmentForm";
import EquipmentDetailsForm from "./pages/EquipmentDetailsForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LabInformation from "./pages/LabInformationForm";
import Profile from "./pages/Profile";
import Demo from "./Components/DashboardPages/DpList";
import Lablist from "./Components/DashboardPages/Lablist";
import IssuesList from "./Components/DashboardPages/IssuesList";
import PurchaseList from "./Components/DashboardPages/PurchaseList";
import EquipmentList from "./Components/DashboardPages/EquipmentList";
import Login from "./pages/Login";
import EquipmentsReviewList from "./Components/DashboardPages/EquipmentReviewList";
import EquipmentsReview from "./pages/EquipmentsReview";
import Register from "./pages/Register";
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
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/lablist" element={<Lablist />} />
                    <Route path="/issueslist" element={<IssuesList />} />
                    <Route path="/purchaselist" element={<PurchaseList />} />
                    <Route path="/equipmentlist" element={<EquipmentList />} />
                    <Route path="/equipmentreviewlist" element={<EquipmentsReviewList />} />
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/review" element={<EquipmentsReview />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
