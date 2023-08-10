import React from 'react';
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

function Carousel() {
 return (<div>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">
    <div class="carousel-item active">
     <img src={image1} class="d-block w-100 " alt="..." style={{ height: "500px" }} />
    </div>
    <div class="carousel-item">
     <img src={image2} class="d-block w-100 " alt="..." style={{ height: "500px" }} />
    </div>
    <div class="carousel-item">
     <img src={image3} class="d-block w-100 " alt="..." style={{ height: "500px" }} />
    </div>
   </div>
  </div>
 </div>)
}


export default Carousel;