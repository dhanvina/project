import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
function Slider() {
    const listings = [require("../img/ScienceLab.jpg"), require("../img/cseLab.jpg"), require("../img/mechLab.jpg"), require("../img/eceLab.jpg")];
    let Names = ["Physic Labs", "CSE Labs", "Mechanical Lab", "ECE Labs"];

    SwiperCore.use([Pagination, Autoplay, Navigation, EffectFade]);

    return (
        <Swiper slidesPerView={1} pagination={{ type: "bullets" }} autoplay navigation effect="slide">
            {listings.map((image, ind) => (
                <SwiperSlide key={ind}>
                    <div
                        style={{
                            background: `url(${image}) no-repeat center`,
                            backgroundSize: "cover",
                        }}
                        className="  relative w-full h-[450px] "
                    >
                        <div className="capitalize absolute px-3 py-1 font-semibold text-white bg-blue-500 top-4 left-2 rounded-br-xl rounded-tl-xl opacity-80 ">{Names[ind]}</div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider;
