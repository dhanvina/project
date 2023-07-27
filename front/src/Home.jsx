import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        require("../src/img/collegeImg.jpeg"),
        require("../src/img/ScienceLab.jpg"),
        require("../src/img/cseLab.jpg"),
        require("./img/mechLab.jpg"),
        require("./img/eceLab.jpg"),

        // Add more image URLs here
    ];

    return (
        <div>
            <div className="pt-10 ">
                <h1 className="text-4xl mt-3">WHO WE ARE</h1>
                <h1 className="text-2xl text-blue-800 mt-3">AUTONOMOUS INSTITUTION WITH NAAC-A ACCREDITATION</h1>
                <p className="mt-3">
                    Global Academy of Technology is an A-grade college that is counted one amongst the best engineering colleges in Bangalore. Along with being equipped with modern technology and the perfect infrastructure, the college has an ambience and culture to accelerate learning. The
                    Management, Principal and Staff of the institution believe in the overall development of the students and hence encourage them to participate in co-curricular, extra-curricular and sports events.
                </p>
            </div>

            <div className="max-w-5xl mx-auto w-full">
                <Slider {...settings}>
                    {images.map((imageUrl, index) => (
                        <div key={index}>
                            <img src={imageUrl} className="w-full  pt-10 mt-10 " />
                        </div>
                    ))}
                </Slider>
            </div>
            <footer className=' border-t-amber-300 mx-auto h-96 align-bottom pl-10 pr-10 mt-8 bg-[url("../src/img/bgRepeat.png")] '>
                <div className="mb-0 pb-0 h-80">
                    <img src={require("../src/img/GAT-logo.png")} className="mx-auto mb-0 pb-0 h-48 pt-5"></img>
                    <div>
                        <h3 className="text-center mx-auto text-3xl text-white pt-3">GLOBAL ACADEMY OF TECHNOLOGY</h3>
                        <h4 className="text-center mx-auto text-2xl text-blue-600 pt-3"> Growing Ahead of Time...</h4>
                        <h6 className="text-center mx-auto text-1xl text-white pt-3">Autonomous Institute, Affiliated to VTU </h6>
                        <h5 className="text-center mx-auto text-2xl text-yellow-400 pt-3">A unit of National Education Foundation</h5>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ImageCarousel;
