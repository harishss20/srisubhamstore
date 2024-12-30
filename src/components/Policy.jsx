import React from "react";

const Policy = () => {
  return (
    <div className="bg-first text-black dark:bg-black dark:text-white font-roboto min-h-screen flex flex-col items-center">
      <header className="bg-second w-full py-6 shadow-lg">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Privacy Policy
        </h1>
      </header>

      <main className="w-11/12 md:w-10/12 lg:w-8/12 my-10 space-y-6">
        <section className="p-6 bg-test rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <p className="text-lg md:text-xl mb-4">
            <strong>Last Updated:</strong> 24/12/2024
          </p>
          <p className="text-lg md:text-xl">
            Welcome to Sri Subham Stores! We value your privacy and want to
            ensure transparency about how we handle your data. This Privacy
            Policy explains how information is collected, used, and protected
            when you visit our website.
          </p>
        </section>

        <section className="p-6 bg-test rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">1. No Data Collection</h2>
          <p className="text-lg md:text-xl">
            Our website is designed purely for showcasing products and services
            offered by Sri Subham Stores. We do not collect, store, or process
            any personal information from users who visit our site.
          </p>
        </section>

        <section className="p-6 bg-test rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">
            2. No Cookies or Tracking
          </h2>
          <p className="text-lg md:text-xl">
            We do not use cookies, analytics tools, or any tracking mechanisms
            on our website. Your browsing activity on our site is entirely
            private and anonymous.
          </p>
        </section>

        <section className="p-6 bg-test rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">3. External Links</h2>
          <p className="text-lg md:text-xl">
            Our website may contain links to third-party websites. Please note
            that we are not responsible for the privacy practices of those
            websites. We encourage you to review their privacy policies when
            visiting them.
          </p>
        </section>

        <section className="p-6 bg-test rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">
            4. Updates to this Policy
          </h2>
          <p className="text-lg md:text-xl">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. Any updates will be posted on this page with the
            updated date.
          </p>
        </section>

        <section className="p-6 bg-test rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p className="text-lg md:text-xl mb-4">
            If you have any questions or concerns about this Privacy Policy,
            feel free to contact us:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
            <li>Email: srisubhamstores@gmail.com</li>
            <li>Phone: +91 7603824925</li>
            <li>
              Address: No 90/1 Aranmanai Street, Vadakarai, Periyakulam, Theni -
              625601
            </li>
          </ul>
        </section>
      </main>

      <footer className="w-full bg-second py-4 text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Policy;
