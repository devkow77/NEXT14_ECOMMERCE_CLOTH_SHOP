import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="my-4 w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept a variety of secure payment methods, including major credit
          cards (Visa, MasterCard, American Express), PayPal, and other common
          payment options. Your transactions are encrypted and safeguarded to
          ensure a safe and seamless shopping experience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Can I customize or personalize a hoodie for a special occasion?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely! We offer customization options for select hoodies. Simply
          check the product page for customization availability, and follow the
          easy steps to add a personal touch to your hoodie, making it uniquely
          yours.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What is your return/exchange policy?
        </AccordionTrigger>
        <AccordionContent>
          We want you to be completely satisfied with your purchase. If your
          hoodie doesn't meet your expectations, we offer a hassle-free return
          and exchange policy. Please visit our Returns & Exchanges page for
          detailed instructions and eligibility criteria.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          {" "}
          How long does it take for my hoodie to be shipped?
        </AccordionTrigger>
        <AccordionContent>
          We strive to process and ship orders promptly. Standard shipping times
          typically range from 2 to 3 business days, depending on your location.
          For more detailed information, please refer to our Shipping page or
          contact our customer support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          {" "}
          How long does it take for my hoodie to be shipped?
        </AccordionTrigger>
        <AccordionContent>
          We strive to process and ship orders promptly. Standard shipping times
          typically range from 2 to 3 business days, depending on your location.
          For more detailed information, please refer to our Shipping page or
          contact our customer support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          Do you offer international shipping?
        </AccordionTrigger>
        <AccordionContent>
          Yes, we do! We provide international shipping to bring our cozy
          hoodies to customers around the globe. Shipping costs and delivery
          times vary by location. To find out more, please check our
          International Shipping page during the checkout process.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>Are your hoodies machine washable?</AccordionTrigger>
        <AccordionContent>
          Absolutely! Our hoodies are designed for easy care. For best results,
          turn the hoodie inside out before machine washing in cold water.
          Follow the care instructions on the label to keep your hoodie looking
          and feeling great.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>
          Are there any promotions or discounts available?
        </AccordionTrigger>
        <AccordionContent>
          Stay tuned for exciting promotions and discounts! We regularly offer
          special deals on our hoodies. To be the first to know about these
          exclusive offers, sign up for our newsletter or follow us on social
          media. Happy shopping!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;
