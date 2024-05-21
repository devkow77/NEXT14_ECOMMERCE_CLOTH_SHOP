"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "./ui/button";

const ShoppingCard = () => {
  const {
    shouldDisplayCart,
    handleCartClick,
    cartCount,
    cartDetails,
    decrementItem,
    incrementItem,
    removeItem,
    redirectToCheckout,
    totalPrice,
    clearCart,
  } = useShoppingCart();

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
            Currently you have {cartCount} items in cart.
          </SheetDescription>
        </SheetHeader>
        {Number(cartCount) > 0 && (
          <section className="h-[300px] overflow-y-auto pb-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
                      <p className="my-2 text-sm text-slate-300">{`${item.description?.substring(0, 80)}...`}</p>
                      <h2 className="font-semibold">
                        {item.price.toPrecision(5)} {item.currency} |{" "}
                        <span className="text-red-500">
                          Amount: {item.quantity}
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
                        onClick={() =>
                          incrementItem(item.id, item.amountOfProduct + 1)
                        }
                      />
                      <Minus
                        size={20}
                        className="cursor-pointer duration-200 hover:text-red-400"
                        onClick={() =>
                          decrementItem(item.id, item.amountOfProduct + 1)
                        }
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
              {totalPrice !== 0 ? Number(totalPrice).toPrecision(5) : 0} PLN
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
