import React, { useState, useEffect, Component } from "react";
import LogoImage from "../assets/logo.png";
import { ProductBrandData, ProductData } from "./Utils.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brandImage from "../assets/brand.webp";
const BrandsList = ({ brands, onBrandClick }) => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex w-10/12 mt-2 duration-300 pointer-cursor flex-col items-center justify-center gap-2 hover:scale-105"
          >
            <div>
              <img
                src={brand.image}
                alt={brand.name}
                className="w-32 h-32 object-cover mx-auto border-2 border-black rounded-full shadow-2xl cursor-pointer"
                onClick={() => {
                  onBrandClick(brand.name);
                }}
              />
            </div>
            <h1 className="text-lg text-center text-black mt-2">
              {brand.name}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ProductCategory = ({ category }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">{category.category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {category.imagesData.map((data, idx) => (
          <div
            key={idx}
            className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300 hover:text-gray-700 hover:text-second"
          >
            <img
              src={data[0]}
              alt={`${category.category} product`}
              className="w-full sm:w-full h-40 sm:h-72 p-4  object-cover"
            />
            <div className="p-4">
              <p className="text-center text-lg  font-medium">{data[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function ProductsList() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = ProductData.filter((category) =>
    category.category.toLowerCase().includes(selectedBrand?.toLowerCase())
  );

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);
  };

  return (
    <div>
      <div className="flex mt-10 gap-4 font-serif text-black space-y-4 items-center">
        <img src={LogoImage} alt="logo" className="w-12 h-12" />
        <h1 className="text-xl font-serif font-bold">Our Products</h1>
      </div>

      <div className="flex flex-col mt-8 items-center">
        <BrandsList brands={ProductBrandData} onBrandClick={handleBrandClick} />

        <div className="flex flex-wrap gap-8 justify-center items-center shadow-2xl my-10 p-6 text-black bg-white rounded-lg font-serif w-10/12">
          {selectedBrand && filteredProducts.length > 0 ? (
            filteredProducts.map((category, index) => (
              <ProductCategory key={index} category={category} />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center ">
              <p className="text-center text-sm sm:text-4xl text-black mb-4">
                To view our products, click the respective brand logos above.
              </p>
              <img
                src={brandImage}
                alt="Select Brand Logo"
                className="w-96 h-96"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
