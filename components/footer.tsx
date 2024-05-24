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
    <footer className="relative z-20 bg-zinc-900 py-12">
      <Container>
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div>
            <Link href="/">
              <h1 className="mb-2 text-lg font-bold lg:text-xl">Fendie</h1>
            </Link>
            <p className="text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
              Wrap yourself in style with our premium hoodies, where comfort
              meets fashion. Elevate your wardrobe with quality and warmth your
              perfect companion for every season
            </p>
          </div>
          <div className="lg:mx-auto">
            <h2 className="mb-2 text-lg font-bold lg:text-xl">Links</h2>
            <ul className="flex flex-col gap-2 text-sm lg:text-base">
              {links.map(({ name, href }: Link, index: number) => (
                <Link
                  href={href}
                  key={index}
                  className="duration-200 hover:text-red-600"
                >
                  <li>{name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col lg:items-end">
            <h2 className="mb-3 text-lg font-bold lg:text-xl">Socials</h2>
            <div className="-ml-2 flex items-center gap-4">
              <Link href="https://www.facebook.com" target="_blank">
                <Facebook className="scale-90 duration-200 hover:text-red-600 lg:scale-100" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <Instagram className="scale-90 duration-200 hover:text-red-600 lg:scale-100" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank">
                <Twitter className="scale-90 duration-200 hover:text-red-600 lg:scale-100" />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
