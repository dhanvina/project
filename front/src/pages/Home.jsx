import React from "react";
import Slider from "../Components/Slider";
const Home = () => {
    return (
        <div>
            <Slider />
            <div className="px-2 py-2 mx-3 mt-3 bg-blue-300 rounded-lg shadow-lg hover:-translate-y-1 hover:-translate-x-1 hover:shadow-2xl transition ease-in-out">
                <h1 className="mt-3 text-4xl">WHO WE ARE</h1>
                <h1 className="mt-3 text-2xl text-blue-800">AUTONOMOUS INSTITUTION WITH NAAC-A ACCREDITATION</h1>
                <p className="mt-2 text-sm font-semibold">
                    Global Academy of Technology is an A-grade college that is counted one amongst the best engineering colleges in Bangalore. Along with being equipped with modern technology and the perfect infrastructure, the college has an ambience and culture to accelerate learning. The
                    Management, Principal and Staff of the institution believe in the overall development of the students and hence encourage them to participate in co-curricular, extra-curricular and sports events.
                </p>
            </div>
            <footer className='border-t-amber-300 mx-auto h-96 align-bottom pl-10 pr-10 mt-6 bg-[url("../src/img/bgRepeat.png")] '>
                <div className="pb-0 mb-0 h-80">
                    <img src={require("../../src/img/GAT-logo.png")} className="h-48 pt-5 pb-0 mx-auto mb-0"></img>
                    <div>
                        <h3 className="pt-3 mx-auto text-3xl text-center text-white">GLOBAL ACADEMY OF TECHNOLOGY</h3>
                        <h4 className="pt-3 mx-auto text-2xl text-center text-blue-600"> Growing Ahead of Time</h4>
                        <h6 className="pt-3 mx-auto text-center text-white text-1xl">Autonomous Institute, Affiliated to VTU </h6>
                        <h5 className="pt-3 mx-auto text-2xl text-center text-yellow-400">A unit of National Education Foundation</h5>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
