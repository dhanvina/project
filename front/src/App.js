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
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <ToastContainer />
            <BrowserRouter>
                <Header />
<Home/>
                <Routes>
                    <Route path="/issue" element={<Issue />} />
                    <Route path="/recieve" element={<Recieved />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
