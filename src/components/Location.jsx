import React, { useState, useEffect, useRef } from "react";

function Location() {
  const [currentLocation, setCurrentLocation] = useState("Theni");
  const sliderRef = useRef(null);
  const locations = ["Theni", "Periyakulam"];
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      textAnimation();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function textAnimation() {
    i++;
    setCurrentLocation(locations[i % locations.length]);

    if (sliderRef.current) {
      sliderRef.current.style.opacity = "0";
      sliderRef.current.style.left = "-5px";

      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.opacity = "1";
          sliderRef.current.style.left = "0";
        }
      }, 2500);
    }
  }

  return (
    <div>
      <div className="search_bar">
        <div className="input_box">
          <div className="search_container">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <input type="text" className="input" />

          <div className="placeholder">
            <div className="box">
              <p>Delivery in</p>
            </div>
            <div className="slider_box">
              <div className="slider" ref={sliderRef}>
                {currentLocation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
