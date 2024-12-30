import React from "react";

const Policy = () => {
  return (
    <div className="bg-first text-black dark:bg-black dark:text-white font-roboto min-h-screen flex flex-col items-center">
      <header className="bg-second w-full py-6 shadow-lg">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Privacy Policy
        </h1>
      </header>

      <main className="w-11/12 md:w-10/12 lg:w-8/12 my-6 space-y-6">
        <section className="p-6 bg-test rounded-lg shadow-md">
          <p className="text-lg md:text-xl mb-4">
            <strong>Last Updated:</strong> 24/12/2024
          </p>
          <p className="text-lg md:text-xl">
            At Sri Subham Stores, we respect your privacy. We do not collect or
            track any personal data from visitors. Your browsing is private, and
            we do not use cookies or analytics tools. Any updates to this policy
            will be posted here.
          </p>
        </section>

        <section className="p-6 bg-test rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg md:text-xl">
            If you have any questions, feel free to contact us:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
            <li>Email: srisubhamstores@gmail.com</li>
            <li>Phone: +91 7603824925</li>
            <li>
              Address: No 90/1 Aranmanai Street, Periyakulam, Theni - 625601
            </li>
          </ul>
        </section>
      </main>

      <footer className="w-full bg-second py-4 text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Sri Subham Stores. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Policy;
