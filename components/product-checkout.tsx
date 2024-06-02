import React from "react";
import { Button } from "./ui/button";

const ProductCheckout = () => {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"buy"}>Buy now</Button>
      <Button variant={"addToCart"}>Add to cart 🛒</Button>
    </div>
  );
};

export default ProductCheckout;
