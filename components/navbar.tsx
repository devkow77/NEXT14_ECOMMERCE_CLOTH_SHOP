import React from "react";
import {
  Container,
  ThemeToggle,
  ShoppingBag,
  DesktopMenu,
  MobileMenu,
} from "@/components/index";

const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 z-50 h-24 py-8">
      <Container className="flex items-center justify-between">
        <h1 className="font-bold text-white">Fendie</h1>
        <DesktopMenu />
        <div className="flex items-center gap-4">
          <ShoppingBag />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
