import React from "react";

const helpSections = [
  {
    title: "Order & Shipping",
    topics: [
      "How to place an order",
      "Order tracking",
      "Shipping options, costs, and delivery times",
      "Changing or cancelling orders"
    ],
  },
  {
    title: "Payment & Billing",
    topics: [
      "Accepted payment methods",
      "Issues with payments",
      "Invoices and receipts"
    ],
  },
  {
    title: "Returns & Refunds",
    topics: [
      "Return policy",
      "How to request a return or exchange",
      "Refund process and timelines"
    ],
  },
  {
    title: "Account & Profile",
    topics: [
      "Creating an account",
      "Resetting passwords",
      "Managing addresses and personal info"
    ],
  },
  {
    title: "Product Information",
    topics: [
      "Product details and specifications",
      "Size guides",
      "Product availability"
    ],
  },
  {
    title: "Promotions & Discounts",
    topics: [
      "Using promo codes",
      "Loyalty programs",
      "Gift cards"
    ],
  },
  {
    title: "Security & Privacy",
    topics: [
      "Data protection practices",
      "Reporting fraud"
    ],
  },
  {
    title: "Contact Us / Customer Support",
    topics: [
      "How to reach customer support (email, phone, chat)",
      "FAQ section for quick answers"
    ],
  },
  {
    title: "Technical Support",
    topics: [
      "Troubleshooting login or website issues"
    ],
  },
];

const HelpCenter = () => {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1>Help Center</h1>
      <p>Welcome to our Help Center. Find answers to your questions below or contact our support team for assistance.</p>
      {helpSections.map((section) => (
        <div key={section.title} style={{ marginBottom: 32 }}>
          <h2>{section.title}</h2>
          <ul>
            {section.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
