import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Logout } from "./components/Pages/Logout";
import { Profile } from "./components/Pages/Profile";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            
          </Routes>
        </div>
      </Router>
      
  <div>
    <Home/>
  </div>
  </>
  
  );
  
}

  export default App;
  
