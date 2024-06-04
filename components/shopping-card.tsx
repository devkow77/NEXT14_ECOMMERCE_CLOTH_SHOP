"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash, ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
// import { useEffect } from "react";

const ShoppingCard = () => {
  const {
    shouldDisplayCart,
    handleCartClick,
    cartCount,
    cartDetails,
    totalPrice,
    removeItem,
    redirectToCheckout,
    incrementItem,
    clearCart,
  } = useShoppingCart();

  // useEffect(() => {
  //   console.log(cartDetails);
  // }, [cartDetails]);

  const handleCheckoutClick = async (event: any) => {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log(`Checkout error: ${result}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent
        side={"bottom"}
        className="flex h-[90vh] flex-col justify-between sm:max-h-[500px]"
      >
        <SheetHeader className="mb-6">
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            You have {cartCount} items in the cart
          </SheetDescription>
        </SheetHeader>
        {!cartCount && (
          <div>
            <section className="relative" />
            <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex min-w-[260px] flex-col items-center">
                <ShoppingBasket size={40} className="md:scale-125" />
                <h1 className="mb-2 mt-4 text-center text-lg font-extrabold">
                  Your cart is empty! 😢
                </h1>
                <p className="text-center text-sm text-slate-300">
                  Looks like you have not added anything to your cart yet
                </p>
              </div>
            </section>
          </div>
        )}
        {Number(cartCount) > 0 && (
          <section className="h-[300px] overflow-y-auto pb-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {Object.values(cartDetails ?? {}).map((item, index) => (
                <div key={index}>
                  <div className="relative flex items-center gap-4">
                    <Link
                      href={`/products/${item.slug}`}
                      className="relative block aspect-square h-[80px] w-[80px]"
                    >
                      <Image
                        src={item.image as string}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="absolute h-full w-full rounded-2xl object-cover object-center"
                      />
                    </Link>
                    <div className="pr-8 text-sm">
                      <h2 className="font-bold">{item.name}</h2>
                      <p className="my-2 text-sm text-slate-300">{`${item.description?.substring(0, 50)}...`}</p>
                      <h2 className="font-semibold">
                        {item.price.toPrecision(5)} {item.currency} |{" "}
                        <span className="text-red-600">
                          Quantity: {item.quantity}
                        </span>
                      </h2>
                    </div>
                    <div className="absolute right-0 top-0 space-y-2">
                      <Trash
                        size={20}
                        className="cursor-pointer duration-200 hover:text-slate-400"
                        onClick={() => removeItem(item.id)}
                      />
                      <Plus
                        size={20}
                        className="cursor-pointer duration-200 hover:text-green-400"
                        onClick={() => incrementItem(item.id, { count: 1 })}
                      />
                      <Minus
                        size={20}
                        className="cursor-pointer duration-200 hover:text-red-600"
                        onClick={() => incrementItem(item.id, { count: -1 })}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        <section>
          <h2>
            Quantity of products:{" "}
            <span className="font-semibold">{cartCount}</span> <br />
            Total price:{" "}
            <span className="font-semibold">
              {totalPrice !== 0 ? Number(totalPrice).toPrecision(5) : 0} USD
            </span>
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <Button
              variant={"buy"}
              disabled={cartCount === 0}
              onClick={handleCheckoutClick}
            >
              Checkout now
            </Button>
            <Button
              variant={"deleteProduct"}
              onClick={clearCart}
              disabled={cartCount === 0}
            >
              Clear products
            </Button>
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCard;
