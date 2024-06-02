import React from "react";

const guarantees = [
  "Free Returns 🛒",
  "Fast Delivery 🚚",
  "Quality Guarantee 🌟",
  "Secure Checkout 🛡️",
  "24/7 Customer Support 🕜",
];

const ProductGuarantees = () => {
  return (
    <section>
      <ul className="ml-4 list-disc space-y-2 text-sm lg:space-y-3 lg:text-base">
        {guarantees.map((info, index) => (
          <li key={index}>{info}</li>
        ))}
      </ul>
    </section>
  );
};

export default ProductGuarantees;
