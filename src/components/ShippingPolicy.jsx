import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="bg-first text-black dark:bg-black dark:text-white font-roboto min-h-screen flex flex-col items-center">
      <header className="bg-second w-full py-6 shadow-lg">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Shipping & Delivery Policy
        </h1>
      </header>

      <main className="w-11/12 md:w-10/12 lg:w-8/12 my-6 space-y-6">
        <section className="p-6 bg-test rounded-lg shadow-md space-y-4">
          <p className="text-lg md:text-xl">
            <strong>Effective Date:</strong> 13/5/2025
          </p>
          <p className="text-lg md:text-xl">
            This Shipping & Delivery Policy is applicable to all purchases made
            through the Subham App, operated by Sri Subham Stores Private
            Limited.
          </p>

          <h2 className="text-2xl font-semibold">1. Delivery Coverage Area</h2>
          <p className="text-lg md:text-xl">
            Subham App delivers only to selected serviceable pincodes in your
            local area. You will be able to place an order only if your address
            and pincode fall under our delivery zone. We reserve the right to
            accept or reject delivery requests based on pincode availability.
          </p>

          <h2 className="text-2xl font-semibold">2. Delivery Shifts</h2>
          <p className="text-lg md:text-xl">
            Each product in the Subham App is assigned one or more eligible
            delivery shifts. Shifts may include (but are not limited to):
          </p>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>Morning Shift</li>
            <li>Afternoon Shift</li>
            <li>Evening Shift</li>
          </ul>
          <p className="text-lg md:text-xl">
            Delivery shift information is displayed on the product page, and
            users can select their preferred delivery time accordingly.
          </p>

          <h2 className="text-2xl font-semibold">3. Delivery Fee</h2>
          <p className="text-lg md:text-xl">
            A flat delivery charge of ₹5 is applicable to all orders, regardless
            of cart value. We currently do not offer free delivery under any
            circumstance.
          </p>

          <h2 className="text-2xl font-semibold">
            4. Missed Delivery & Postponement
          </h2>
          <p className="text-lg md:text-xl">
            If the delivery staff is unable to deliver the order because:
          </p>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>The customer is unavailable</li>
            <li>The delivery is declined</li>
          </ul>
          <p className="text-lg md:text-xl">
            then the delivery will not be retried automatically. However,
            customers can reschedule or postpone their delivery to any upcoming
            eligible shift via the app or by informing our support team before
            dispatch.
          </p>

          <h2 className="text-2xl font-semibold">
            5. Special Delivery Instructions
          </h2>
          <p className="text-lg md:text-xl">
            Customers can provide special delivery instructions while placing an
            order. Examples include:
          </p>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>Call on arrival</li>
            <li>Leave at doorstep</li>
            <li>Ring doorbell and wait</li>
          </ul>
          <p className="text-lg md:text-xl">
            Our delivery staff will do their best to follow these instructions,
            subject to feasibility and safety.
          </p>

          <h2 className="text-2xl font-semibold">6. Other Notes</h2>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>
              Deliveries are performed by our internal staff only, not
              third-party delivery services.
            </li>
            <li>
              In rare cases (e.g., weather, technical issues), delivery may be
              delayed. You will be notified promptly.
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

export default ShippingPolicy;
