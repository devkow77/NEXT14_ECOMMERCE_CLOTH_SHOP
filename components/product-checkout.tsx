"use client";

import React from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { useSelector } from "react-redux";
import { useToast } from "./ui/use-toast";

const ProductCheckout = ({ product }: any) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const { size, quantity, stripeApi } = useSelector(
    (state: any) => state.product,
  );
  const { toast } = useToast();

  const productInfo = {
    id: stripeApi,
    name: `${product.name} (${size})`,
    description: product.description,
    price: Number(product.price),
    currency: "EUR",
    image: product.images[0].url,
    slug: product.slug,
  };

  const addProduct = () => {
    if (!quantity || !size) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "You need to select a size and quantity.",
        variant: "destructive",
      });
      return;
    }
    addItem(productInfo, { count: Number(quantity) });
    handleCartClick();
  };

  return (
    <div className="flex items-center gap-4">
      <Button variant={"buy"}>Buy now</Button>
      <Button onClick={addProduct} variant={"addToCart"}>
        Add to cart 🛒
      </Button>
    </div>
  );
};

export default ProductCheckout;
