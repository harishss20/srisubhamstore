import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="bg-first text-black dark:bg-black dark:text-white font-roboto min-h-screen flex flex-col items-center">
      <header className="bg-second w-full py-6 shadow-lg">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Return, Cancellation & Refund Policy
        </h1>
      </header>

      <main className="w-11/12 md:w-10/12 lg:w-8/12 my-6 space-y-6">
        <section className="p-6 bg-test rounded-lg shadow-md space-y-4">
          <p className="text-lg md:text-xl">
            <strong>Effective Date:</strong> 13/05/2025
          </p>
          <p className="text-lg md:text-xl">
            This policy outlines the conditions for product returns, order
            cancellations, and applicable refunds for purchases made via the
            Subham App operated by Sri Subham Stores Private Limited.
          </p>

          <h2 className="text-2xl font-semibold">1. Return Policy</h2>
          <h3 className="text-xl font-semibold">1.1 Return Eligibility:</h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>
              The product delivered is incorrect (different from what was
              ordered), or
            </li>
            <li>
              The product is substantially damaged or spoiled at the time of
              delivery
            </li>
          </ul>

          <h3 className="text-xl font-semibold">
            1.2 Return Request Conditions:
          </h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>Return must be initiated on the same day of delivery.</li>
            <li>
              Product must be unopened, unused, and in original packaging.
            </li>
            <li>
              You must upload clear photo proof showing the issue (e.g., damage
              or wrong item).
            </li>
          </ul>

          <h3 className="text-xl font-semibold">
            1.3 Branch Approval Required:
          </h3>
          <p className="text-lg md:text-xl">
            All return requests will be forwarded to the appropriate Subham
            Branch for review. Only upon approval by the concerned branch, the
            return will be processed.
          </p>

          <h3 className="text-xl font-semibold">
            1.4 Items Not Eligible for Return:
          </h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>Products reported after the delivery date.</li>
            <li>Items that have been opened, used, or altered.</li>
            <li>No digital products are sold by Subham App.</li>
          </ul>

          <h3 className="text-xl font-semibold">
            1.5 How to Request a Return:
          </h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>Through the "Return Request" option in the app</li>
            <li>
              By contacting our Customer Support Team via the app or helpline
            </li>
          </ul>

          <h3 className="text-xl font-semibold">
            1.6 Next Steps After Approval:
          </h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>The delivery staff may collect the product</li>
            <li>Or you may be asked to dispose of the product safely</li>
          </ul>

          <h3 className="text-xl font-semibold">1.7 Right to Decline:</h3>
          <p className="text-lg md:text-xl">
            Subham reserves the right to decline return requests if the issue is
            not proven, reported late, or the product was used or mishandled.
          </p>

          <h2 className="text-2xl font-semibold">2. Cancellation Policy</h2>
          <h3 className="text-xl font-semibold">
            2.1 Customer-Initiated Cancellation:
          </h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>
              You may cancel an order anytime before the delivery staff reaches
              your location.
            </li>
            <li>
              You can cancel through the app or by informing the delivery staff
              directly.
            </li>
            <li>
              Once the product is delivered, cancellation is not allowed. You
              must raise a return request instead.
            </li>
          </ul>

          <h3 className="text-xl font-semibold">
            2.2 Automatic Cancellations:
          </h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>Unavailability of products</li>
            <li>Delivery constraints</li>
            <li>Fraud prevention</li>
            <li>Any unforeseen or force majeure event</li>
          </ul>

          <h3 className="text-xl font-semibold">
            2.3 Refund for Cancellations:
          </h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>
              If the order is cancelled before delivery, you will not be
              charged.
            </li>
            <li>
              If prepaid, your full payment will be refunded to your original
              payment method.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">3. Refund Policy</h2>
          <h3 className="text-xl font-semibold">3.1 Refund Timelines:</h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>
              Real Cash (COD) Refunds: Processed within 2 business days in cash.
            </li>
            <li>
              UPI, Wallet, or Card Refunds: Processed within 7 to 10 business
              days to the original payment method.
            </li>
          </ul>

          <h3 className="text-xl font-semibold">3.2 Refund Method:</h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li>Bank or UPI for prepaid orders</li>
            <li>Real cash for real cash payments</li>
          </ul>

          <h3 className="text-xl font-semibold">
            3.3 No Coupon or Voucher Refunds:
          </h3>
          <p className="text-lg md:text-xl">
            Subham App does not offer refunds in the form of coupons or
            vouchers. All refunds are made in real money only.
          </p>

          <h3 className="text-xl font-semibold">3.4 Conditions:</h3>
          <p className="text-lg md:text-xl">
            Refunds are issued only after proper product inspection and branch
            approval. Customers will be notified when refunds are processed.
          </p>

          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-lg md:text-xl">
            For assistance, please contact our support team via the app or
            helpline.
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

export default ReturnPolicy;
