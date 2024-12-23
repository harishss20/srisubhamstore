import React from "react";
import services from "../assets/Frame 1.png";
function Services() {
  return (
    <div>
      <h1 className="text-black text-lg sm:text-4xl mt-8  font-serif ml-24">
        How Delivery Works
      </h1>
      <img src={services} alt="How Delivery Work!" className="mb-12" />
    </div>
  );
}

export default Services;
