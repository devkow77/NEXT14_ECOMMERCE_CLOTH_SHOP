import React from "react";
import { HoodieTable, ShirtTable, TrausersTable } from "@/components/index";
import { Container } from "@/components/index";
import { PiPants, PiHoodie, PiTShirt } from "react-icons/pi";

const Sizes = () => {
  return (
    <main>
      <Container className="py-12">
        <h2 className="mb-4 text-2xl font-black md:text-3xl xl:text-4xl">
          PRODUCT <br /> <span className="text-red-600">TABLE</span> SIZES
        </h2>
        <section>
          <p className="mb-8 max-w-2xl text-sm leading-7 lg:text-base lg:leading-8">
            Discover the harmony of style and fit with our meticulously curated
            product table sizes, ensuring your confidence in every dimension of
            fashion.
          </p>
        </section>
        <section className="space-y-12">
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-bold lg:text-lg">
              <span className="font-extrabold text-red-600">Hoodie</span> Size
              Charts <PiHoodie />
            </h3>
            <HoodieTable />
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-bold lg:text-lg">
              <span className="font-extrabold text-red-600">T-shirt</span> Size
              Charts <PiTShirt />
            </h3>
            <ShirtTable />
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-bold lg:text-lg">
              <span className="font-extrabold text-red-600">Trausers</span> Size
              Charts <PiPants />
            </h3>
            <TrausersTable />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Sizes;
