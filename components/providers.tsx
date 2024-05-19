"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { CartProvider } from "use-shopping-cart";

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_API_KEY as string}
        successUrl="http://localhost:3000/success"
        cancelUrl="http://localhost:3000/cancel"
        currency="EUR"
        billingAddressCollection={true}
        shouldPersist={true}
      >
        {children}
      </CartProvider>
    </NextThemesProvider>
  );
};

export default Providers;
