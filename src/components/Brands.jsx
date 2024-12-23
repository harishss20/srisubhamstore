import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductBrandData } from "./Utils.jsx";
import { useNavigate } from "react-router";
function Brands() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/productsList");
    window.scrollTo(0, 0);
  };
  const brands = ProductBrandData;
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full  text-black bg-first p-10">
      <div className="font-gilroy   w-full">
        <div className="flex justify-between items-center mx-14  mb-12">
          <h1 className="text-lg sm:text-4xl font-serif">
            Our Exclusive Brands
          </h1>
          <button
            onClick={handleClick}
            className="h-10 text-black underline text-2xl hover:text-second  transition duration-200"
          >
            All Products
          </button>
        </div>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex mt-2 duration-300 pointer-cursor flex-col items-center justify-center gap-2 hover:scale-105 mb-8 "
            >
              <div>
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-32 h-32 object-cover mx-auto border-2 border-black rounded-full shadow-2xl cursor-pointer"
                />
              </div>
              <h1 className="text-lg text-center mt-2">{brand.name}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Brands;
