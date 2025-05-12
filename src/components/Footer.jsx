import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-test text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-gilroy font-bold mb-2">
              Sri Subham Stores
            </h2>
            <p className="text-gray">
              Delivering quality products with excellence and dedication.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-roboto font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="h-10 text-black text-xl hover:text-second transition duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/terms")}
                  className="h-10 text-black text-xl hover:text-second transition duration-200"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/privacy")}
                  className="h-10 text-black text-xl hover:text-second transition duration-200"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-roboto font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-gray">Email: contact@srisubhamstores.com</p>
            <p className="text-gray">Phone: +91 7603824925</p>
            <p className="text-gray">
              Location: No 90/1 Aranmanai Street, Vadakarai, Periyakulam, Theni
              - 625601
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray pt-4 text-center">
          <p className="text-gray text-sm">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
