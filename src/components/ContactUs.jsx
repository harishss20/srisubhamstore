import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-first text-black dark:bg-black dark:text-white font-roboto min-h-screen flex flex-col items-center">
      <header className="bg-second w-full py-6 shadow-lg">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Contact Us
        </h1>
      </header>

      <main className="w-11/12 md:w-10/12 lg:w-8/12 my-6 space-y-6">
        <section className="p-6 bg-test rounded-lg shadow-md space-y-4">
          <p className="text-lg md:text-xl">
            <strong>Effective Date:</strong> 13/05/2025
          </p>
          <p className="text-lg md:text-xl">
            If you have any questions, concerns, feedback, or need assistance
            regarding orders, deliveries, payments, or app usage, feel free to
            contact us using any of the methods below.
          </p>

          <h2 className="text-2xl font-semibold">Company Details</h2>
          <p className="text-lg md:text-xl font-medium">
            Sri Subham Stores Private Limited
          </p>

          <h2 className="text-2xl font-semibold">Registered Office</h2>
          <p className="text-lg md:text-xl">
            No 89, Aranmanai Street,
            <br />
            Vadakarai, Periyakulam,
            <br />
            Theni - 625601
          </p>

          <h2 className="text-2xl font-semibold">Operating Area</h2>
          <p className="text-lg md:text-xl">
            Selected serviceable pincodes in your local region.
          </p>

          <h2 className="text-2xl font-semibold">Customer Support</h2>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>📞 Phone: +91 763824925</li>
            <li>📧 Email: contact@srisubhamstores.com</li>
            <li>🕐 Working Hours: Monday to Saturday, 9:00 AM to 6:00 PM</li>
            <li>
              📱 App Support: Tap on <strong>Help</strong> or{" "}
              <strong>Support</strong> in the Subham App for real-time
              assistance
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">Grievance Escalation</h2>
          <p className="text-lg md:text-xl">
            If your issue is not resolved via regular support, you may escalate
            the matter to:
          </p>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>
              <strong>Grievance Officer</strong>
              <br />
              Sri Subham Stores Pvt. Ltd.
            </li>
            <li>📧 Email: contact@srisubhamstores.com</li>
            <li>
              ⏱️ Response Time: We aim to respond within 48 hours and resolve
              issues within 7 working days.
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

export default ContactUs;
