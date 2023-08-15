import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import NavbarGeneral from '../components/NavbarGeneral';

const Home = () => {
 const sliders = ["Become a Seller", "Buy the best products", "Your one and only market place"];
 const [currentSlider, setCurrentSlider] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentSlider(count => (count + 1) % sliders.length);
  }, 5000); // Change the interval time (in milliseconds) as needed

  return () => clearInterval(interval);
 }, []);


 return (<div class="home-page">
  <NavbarGeneral />
  <div class=" first-slide container-fluid">
   <div className='row first-slide'>
   <div class="col-md-5 offset-md-1 mt-5">

    <h1 class="headliner">{sliders[currentSlider]}</h1>
   </div>
   <div class="col-md-5 onset-md-1  "><iframe class="animation" src="https://embed.lottiefiles.com/animation/28183"></iframe>
   </div>

   </div>


  </div>


  <div class="container-fluid section-2">

   <div class="word">
    <h2>There's Always Something here for you to sell or buy </h2>
    <p>Our site is secure, safe and brings about 10 million buyers and shoppers every year. Be part of this Journey.</p>
   </div>
   <div>
    <ul className='options container'>
     <div class="card each " >
      <div className='green'>
       <iframe src="https://embed.lottiefiles.com/animation/57048" class="card-img-top"></iframe>
      </div>
      <div class="card-body">
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
       </p>
      </div>
     </div>
     <div class="card each" >
      <div className='pink'>
       <iframe src="https://embed.lottiefiles.com/animation/80391" class="card-img-top"></iframe>
       {/* <img src="..." class="card-img-top" alt="..." /> */}
      </div>
      <div class="card-body">
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
       </p>
      </div>
     </div>
     <div class="card each">
      <div className='orange'>
       <iframe src="https://embed.lottiefiles.com/animation/73312" class="card-img-top"></iframe>
       {/* <img src="..." class="card-img-top" alt="..." /> */}
      </div>
      <div class="card-body">
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
       </p>
      </div>
     </div>
     <div class="card each">
      <div className='red'>
       <iframe src="https://embed.lottiefiles.com/animation/104950" class="card-img-top"></iframe>
       {/* <img src="..." class="card-img-top" alt="..." /> */}
      </div>
      <div class="card-body">
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
       </p>
      </div>
     </div>

    </ul>
   </div>
  </div>

 </div>);
}


export default Home;