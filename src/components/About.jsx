import React from "react";

const About = () => {
  return (
    <div className="bg-first text-black dark:bg-black dark:text-white font-roboto min-h-screen flex flex-col items-center">
      <header className="bg-second w-full py-6 shadow-lg">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          About Us
        </h1>
      </header>

      <main className="w-11/12 md:w-10/12 lg:w-8/12 my-10 space-y-6">
        <section className="p-6 bg-test rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <p className="text-lg md:text-xl">
            Welcome to Sri Subham Store – Your Trusted Source for Freshness. We
            specialize in delivering the freshest milk and premium groceries
            straight to your doorstep. Whether you're planning for your daily
            needs or stocking up for the month, we’re here to make your shopping
            experience effortless, reliable, and convenient. Experience
            freshness like never before – because you deserve the best!
          </p>
        </section>

        <section className="p-6 bg-test rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Daily and monthly milk and grocery delivery plans.</li>
            <li>Fresh and high-quality products sourced locally.</li>
            <li>Five daily delivery shifts to suit your schedule.</li>
          </ul>
        </section>

        <section className="p-6 bg-test rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p>
            Our delivery system operates in five shifts daily, ensuring timely
            service that fits your routine. Customers can conveniently place
            orders using our mobile app (currently under development).
          </p>
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

export default About;
