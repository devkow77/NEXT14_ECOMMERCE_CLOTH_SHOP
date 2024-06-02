"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${pathname === "/products" ? "font-semibold text-red-600" : ""}`}
          >
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  asChild
                  className="hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <a
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/products"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      All products
                    </div>
                    <p className="text-muted-foreground text-sm leading-5">
                      Explore our wide range of offerings in the All Products
                      section, where you'll find everything from the latest tech
                      gadgets to everyday essentials.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/products/gender/men"
                title="Men Products"
                className="hover:bg-black/5 dark:hover:bg-white/5"
              >
                Browse our Men’s Products section for the latest in fashion.
              </ListItem>
              <ListItem
                href="/products/gender/women"
                title="Women Products"
                className="hover:bg-black/5 dark:hover:bg-white/5"
              >
                Browse our Women’s Products section for the latest in fashion.
              </ListItem>
              <ListItem
                href="/products/gender/kids"
                title="Kids Products"
                className="hover:bg-black/5 dark:hover:bg-white/5"
              >
                Browse our Kids Products section for the latest in fashion.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`${pathname === "/premieres" ? "font-semibold text-red-600" : ""}`}
        >
          <Link href="/premieres" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Premieres
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`${pathname === "/sizes" ? "font-semibold text-red-600" : ""}`}
        >
          <Link href="/sizes" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sizes
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`${pathname === "/news" ? "font-semibold text-red-600" : ""}`}
        >
          <Link href="/news" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`${pathname === "/faq" ? "font-semibold text-red-600" : ""}`}
        >
          <Link href="/faq" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Faq
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`${pathname === "/contact" ? "font-semibold text-red-600" : ""}`}
        >
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
