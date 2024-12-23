import React from "react";

const Footer = () => {
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
                <a
                  href="/about"
                  className="text-black hover:text-second transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/productsList"
                  className="text-black hover:text-second transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-black hover:text-second transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-roboto font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-gray">Email: srisubhamstores@gmail.com</p>
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
