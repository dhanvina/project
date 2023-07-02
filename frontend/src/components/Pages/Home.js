import React from "react";
//import image from "./images/ScienceLab.jpg";
export const Home = () => {
  
  return (
  //   <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  //  <div class="carousel-inner">
  //   <div class="carousel-item active">
  //     <img src={"./images/ScienceLab.jpg"} class="d-block w-100" alt="1"></img>
  //   </div>
  //   <div class="carousel-item">
  //     <img src="./images/ScienceLab.jpg" class="d-block w-100" alt="2"></img>
  //   </div>
  //   <div class="carousel-item">
  //     <img src="./images/ScienceLab.jpg" class="d-block w-100" alt="3"></img>
  //   </div>
  // </div>
  // </div>

  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/ScienceLab.jpg" class="d-block w-100" alt=""></img>
    </div>
    <div class="carousel-item">
      <img src="./images/ScienceLab.jpg" class="d-block w-100" alt=""></img>
    </div>
    <div class="carousel-item">
      <img src="./images/ScienceLab.jpg" class="d-block w-100" alt=""></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    

  );
};
