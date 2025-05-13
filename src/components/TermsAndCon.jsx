import React from "react";

const TermsAndCon = () => {
  return (
    <div className="bg-first text-black dark:bg-black dark:text-white font-roboto min-h-screen flex flex-col items-center">
      <header className="bg-second w-full py-6 shadow-lg">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Terms and Conditions
        </h1>
      </header>

      <main className="w-11/12 md:w-10/12 lg:w-8/12 my-6 space-y-6">
        <section className="p-6 bg-test rounded-lg shadow-md space-y-4">
          <p className="text-lg md:text-xl">
            <strong>Effective Date:</strong> 12/05/2025
          </p>
          <p className="text-lg md:text-xl">
            Welcome to the Subham App operated by Sri Subham Stores Private
            Limited. By accessing or using the Subham App, you agree to be bound
            by the following Terms and Conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold">1. Eligibility and Access</h2>
          <p className="text-lg md:text-xl">
            The Subham App is available for use by all individuals. There is no
            age restriction. However, creating an account is mandatory to access
            the app and place any order.
          </p>

          <h2 className="text-2xl font-semibold">2. Account Responsibility</h2>
          <p className="text-lg md:text-xl">
            Users are responsible for maintaining accurate information in their
            account, including name, phone number, address, and pincode. Any
            misuse of account access or impersonation will result in account
            termination.
          </p>

          <h2 className="text-2xl font-semibold">
            3. Orders and Cancellations
          </h2>
          <p className="text-lg md:text-xl">
            Customers may cancel orders after placing them through the app
            interface. Our delivery staff also reserve the right to cancel an
            order in case of availability issues or operational constraints.
          </p>

          <h2 className="text-2xl font-semibold">4. Payment Methods</h2>
          <p className="text-lg md:text-xl">
            We support both prepaid and cash-on-delivery (COD) options. Prepaid
            payments are processed securely via Razorpay and may include wallet
            or UPI payments.
          </p>

          <h2 className="text-2xl font-semibold">5. Service Areas</h2>
          <p className="text-lg md:text-xl">
            The Subham App currently delivers only to specific serviceable
            pincodes in selected regional areas. Orders placed outside our
            delivery zone will not be processed.
          </p>

          <h2 className="text-2xl font-semibold">6. Delivery</h2>
          <p className="text-lg md:text-xl">
            Deliveries are currently made in shifts based on area and timing.
            Instant delivery options may be introduced in the future, but are
            not guaranteed at this time.
          </p>

          <h2 className="text-2xl font-semibold">7. Prohibited Activities</h2>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>Placing fake or fraudulent orders</li>
            <li>Tampering with or attempting to reverse engineer the app</li>
            <li>Providing false delivery information</li>
            <li>Misusing sensitive or health-related products</li>
            <li>
              Engaging in any unlawful or unauthorized access to the app's
              systems
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
          <p className="text-lg md:text-xl">
            Sri Subham Stores Private Limited is a registered private limited
            company under Indian law and operates under a limited liability
            framework. We strive to fulfill all orders promptly and accurately;
            however, we are not responsible for:
          </p>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Delivery delays caused by unforeseen events</li>
            <li>Technical issues beyond our control</li>
            <li>Misuse of the app or services by users</li>
          </ul>

          <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
          <p className="text-lg md:text-xl">
            We reserve the right to modify or update these Terms and Conditions
            at any time. Continued use of the app after changes means you accept
            the new terms.
          </p>

          <h2 className="text-2xl font-semibold">10. Contact Information</h2>
          <p className="text-lg md:text-xl">
            For questions or concerns regarding these Terms, please contact:
          </p>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>Sri Subham Stores Private Limited</li>
            <li>Email: contact@srisubhamstores.com</li>
            <li>Phone: +91 7603824925</li>
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

export default TermsAndCon;
