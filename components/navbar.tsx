import React from "react";
import {
  Container,
  ThemeToggle,
  ShoppingBag,
  DesktopMenu,
  HamburgerBtn,
} from "@/components/index";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative left-0 top-0 z-50 h-24 w-full py-8">
      <Container className="flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-slate-700 dark:text-white">Fendie</h1>
        </Link>
        <DesktopMenu />
        <div className="flex items-center gap-4">
          <ShoppingBag />
          <ThemeToggle />
          <HamburgerBtn />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
