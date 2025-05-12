<div className="bg-first text-black dark:bg-black dark:text-white font-roboto min-h-screen flex flex-col items-center">
  <header className="bg-second w-full py-6 shadow-lg">
    <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
      Privacy Policy
    </h1>
  </header>

  <main className="w-11/12 md:w-10/12 lg:w-8/12 my-6 space-y-6">
    <section className="p-6 bg-test rounded-lg shadow-md space-y-4">
      <p className="text-lg md:text-xl">
        <strong>Effective Date:</strong> 12/5/2025
      </p>
      <p className="text-lg md:text-xl">
        Sri Subham Stores Private Limited ("we", "our", or "us") respects your
        privacy and is committed to protecting the personal information you
        share with us through our mobile application Subham (the "App"). This
        Privacy Policy explains how we collect, use, and protect your
        information when you use our services.
      </p>

      <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
      <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
        <li>Full Name</li>
        <li>Phone Number</li>
        <li>Home Address</li>
        <li>Pincode</li>
        <li>Geo-location (for delivery purposes)</li>
        <li>
          Razorpay-related identifiers (e.g., payment reference IDs, wallet IDs)
        </li>
      </ul>
      <p className="text-lg md:text-xl">
        We do not collect card numbers or UPI PINs. All payment processing is
        handled securely by Razorpay.
      </p>

      <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
        <li>To process and fulfill your orders</li>
        <li>
          To verify your phone number via OTP (login and delivery verification)
        </li>
        <li>To deliver orders to your specified address</li>
        <li>To provide payment services via Razorpay</li>
        <li>To store order-related data securely in AWS S3</li>
      </ul>
      <p className="text-lg md:text-xl">
        We do not use your data for advertising or promotional messaging.
      </p>

      <h2 className="text-2xl font-semibold">3. Third-Party Services We Use</h2>
      <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
        <li>Razorpay – for payment processing and wallet-based transactions</li>
        <li>MSG91 – for sending secure OTP messages</li>
        <li>AWS S3 – for secure cloud storage of user and order data</li>
      </ul>
      <p className="text-lg md:text-xl">
        We do not share your personal data with any other third-party service
        providers or delivery partners. All deliveries are managed by our
        in-house staff only.
      </p>

      <h2 className="text-2xl font-semibold">4. User Accounts</h2>
      <p className="text-lg md:text-xl">Users can:</p>
      <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
        <li>Create an account</li>
        <li>View and edit their name, phone number, address, and pincode</li>
        <li>Update saved preferences and delivery details</li>
      </ul>
      <p className="text-lg md:text-xl">
        Users cannot delete their accounts at this time. However, you may
        contact us if you need assistance or have concerns regarding your data.
      </p>

      <h2 className="text-2xl font-semibold">5. Children's Privacy</h2>
      <p className="text-lg md:text-xl">
        Our app is intended for a general audience. However, it is not designed
        for children under the age of 13. We do not knowingly collect data from
        minors.
      </p>

      <h2 className="text-2xl font-semibold">
        6. Sensitive Product Information
      </h2>
      <p className="text-lg md:text-xl">
        While we offer products such as sanitary napkins and condoms through our
        app, we do not advertise or promote them explicitly.
      </p>

      <h2 className="text-2xl font-semibold">7. Data Security</h2>
      <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
        <li>Data is stored securely on AWS servers</li>
        <li>Payment details are processed securely via Razorpay</li>
        <li>OTPs are sent using secure APIs via MSG91</li>
      </ul>

      <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
      <p className="text-lg md:text-xl">
        We may update this Privacy Policy occasionally. We will notify you of
        any significant changes via the app or other communication channels.
      </p>

      <h2 className="text-2xl font-semibold">9. Contact Us</h2>
      <p className="text-lg md:text-xl">
        If you have any questions about this Privacy Policy or your data, please
        contact:
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
</div>;
