import React from "react";
import { ContactForm, GoogleMap, Container } from "@/components/index";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Contact = async () => {
  return (
    <article className="bg-zinc-200 dark:bg-transparent">
      <Container className="py-12">
        <h2 className="text-2xl font-black md:text-3xl xl:text-4xl">
          CONTACT <br /> <span className="text-red-600">FORM</span>
        </h2>
        <p className="mt-2 text-sm leading-6 lg:text-base lg:leading-8">
          For any questions, feedback, or partnership inquiries, feel free to
          drop me a message. I'm always eager to hear from you!
        </p>
        <div className="md:flex md:flex-row md:items-center md:gap-6 lg:mt-6">
          <GoogleMap />
          <ContactForm />
        </div>
        <div className="mt-6 space-y-4">
          <p className="text-sm leading-6 opacity-80 lg:text-base lg:leading-8">
            Would like to check frequently asked questions before get in touch
            with me?
          </p>
          <Button>
            <Link href="/faq">Check Faq</Link>
          </Button>
        </div>
      </Container>
    </article>
  );
};

export default Contact;
