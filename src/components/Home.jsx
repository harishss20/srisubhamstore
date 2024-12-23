import React, { useState } from "react";
import logo from "../assets/logo.png";
import Location from "./Location.jsx";
import Card from "./Card";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <div
        className=" w-full h-auto pb-16 text-white flex flex-col"
        style={{ overflowX: "clip" }}
      >
        {/* Header Section */}
        <header className="w-full flex justify-between items-center px-8 py-4 bg-orange-500">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img id="logo-container" src={logo} alt="Logo" className="h-8" />
            <h2 className="text-xl font-bold cursor-pointer">Sri Subham</h2>
          </div>
          {/* App Section */}
          {/* <div className="flex items-center text-white space-x-6">
            <a
              href=""
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:ease-in-out transition sm:text-sm"
            >
              Get the App
            </a>
          </div> */}
        </header>

        {/* Main Section */}
        <main className="flex flex-col mt-16 items-center font-gilroy text-center px-8 flex-grow">
          <div className="text-container">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-gilroy shadow-sm font-extrabold mt-8">
              Order Dairy products & groceries. Daily services!
            </h2>
          </div>
          {/* Location Search */}
          <Location />

          <div id="image-container"></div>

          <Card />
        </main>
      </div>
    </div>
  );
};

export default Home;
