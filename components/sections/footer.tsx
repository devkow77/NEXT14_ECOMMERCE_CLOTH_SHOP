import React from "react";
import { FadeIn, Container } from "@/components/index";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Men",
    href: "/products/men",
  },
  {
    name: "Women",
    href: "/products/women",
  },
  {
    name: "Kids",
    href: "/products/kids",
  },
  {
    name: "Premieres",
    href: "/premieres",
  },
  {
    name: "Sizes",
    href: "/sizes",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Faq",
    href: "/faq",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="relative z-20 bg-zinc-900 py-8">
      <FadeIn>
        <Container>
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div>
              <h1 className="mb-2 text-lg font-bold lg:text-2xl">Fendie</h1>
              <p className="text-sm leading-6 opacity-80 lg:text-base">
                Wrap yourself in style with our premium hoodies, where comfort
                meets fashion. Elevate your wardrobe with quality and warmth
                your perfect companion for every season
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold lg:text-2xl">Links</h2>
              <ul className="flex flex-col gap-2 text-sm">
                {links.map(({ name, href }: Link, index: number) => (
                  <Link href={href} key={index}>
                    <li>{name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-lg font-bold lg:text-2xl">Socials</h2>
              <div className="-ml-2 flex items-center gap-4">
                <Facebook className="scale-90" />
                <Instagram className="scale-90" />
                <Twitter className="scale-90" />
              </div>
            </div>
          </section>
        </Container>
      </FadeIn>
    </footer>
  );
};

export default Footer;
