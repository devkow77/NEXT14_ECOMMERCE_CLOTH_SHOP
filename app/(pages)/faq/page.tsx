import React from "react";
import { FaqAccordion, Container } from "@/components/index";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Faq = () => {
  return (
    <main>
      <Container className="py-12">
        <h2 className="text-2xl font-black lg:text-3xl">
          FAQ <br /> <span className="text-red-600">FREQUENTLY ASKED</span>{" "}
          <br /> QUESTIONS
        </h2>
        <FaqAccordion />
        <p className="mb-4 text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
          If the FAQ section does not address your queries adequately, feel free
          to reach out to us by using the contact form. We are here to assist
          you and will respond promptly to ensure all your concerns are
          addressed.
        </p>
        <Link href="/contact">
          <Button>Contact with us</Button>
        </Link>
      </Container>
    </main>
  );
};

export default Faq;
