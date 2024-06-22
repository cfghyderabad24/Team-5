// Partners.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from "../assets/images/img1.jpg";
import Logo2 from "../assets/images/img2.jpg";
import Logo3 from "../assets/images/img3.jpg";
import Logo4 from "../assets/images/img4.jpg";
import Logo5 from "../assets/images/img5.jpg";
import Logo6 from "../assets/images/img6.jpg";
import Logo7 from "../assets/images/img7.jpg";
import Logo8 from "../assets/images/img8.jpg";


const Partners = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  // Define partner logos with their imported paths
  const partnerLogos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
  ];

  return (
    <div className="bg-gray-100 mx-auto py-12 w-full">
      <h2 className='text-4xl uppercase text-center font-bold mb-12'>
          <span className='text-brightRed'>OUR POPULAR BRAND PARTNERS</span>
        </h2>
      <Slider {...settings}>
        {partnerLogos.map((logo, index) => (
          <div key={index} className="slide">
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;


