import { Container, FadeIn } from "@/components/index";
import {
  ShoppingBasket,
  Package,
  Map,
  CreditCard,
  ShieldCheck,
  Gift,
  Table2,
  Clock,
} from "lucide-react";

const policity = [
  {
    icon: <ShoppingBasket className="mb-2 lg:scale-110" />,
    text: "14 days to return the product after receiving it",
  },
  {
    icon: <Package className="mb-2 lg:scale-110" />,
    text: "guaranteed delivery within 3 business days",
  },
  {
    icon: <Map className="mb-2 lg:scale-110" />,
    text: "Possibility to track the shipment of your parcel live",
  },
  {
    icon: <CreditCard className="mb-2 lg:scale-110" />,
    text: "Secure payment methods",
  },
  {
    icon: <ShieldCheck className="mb-2 lg:scale-110" />,
    text: "Personal data protection",
  },
  {
    icon: <Gift className="mb-2 lg:scale-110" />,
    text: "Loyalty programs",
  },
  {
    icon: <Table2 className="mb-2 lg:scale-110" />,
    text: "Size charts",
  },
  {
    icon: <Clock className="mb-2 lg:scale-110" />,
    text: "Reply from support within 24 hours",
  },
];

const Policity = () => {
  return (
    <article className="relative z-20 h-[110vh] bg-gradient-to-tl from-violet-950 to-pink-900">
      <FadeIn className="absolute top-1/2 w-full -translate-y-1/2">
        <Container>
          <div className="mb-6 flex flex-col items-end">
            <h2 className="mb-2 text-xl font-bold lg:text-2xl">
              Our Shop Policity
            </h2>
            <p className="max-w-xl text-right text-sm opacity-80 lg:text-base">
              Our shop policy ensures a seamless shopping experience,
              emphasizing transparent transactions and top-notch customer
              satisfaction.
            </p>
          </div>
          <div className="grid h-[500px] grid-cols-2 gap-4 rounded-xl sm:grid-cols-3">
            {policity.map(({ icon, text }: any, index: number) => (
              <div
                key={index}
                className="relative flex items-center justify-center rounded-xl bg-white/5 p-2 lg:p-10"
              >
                <div className="flex flex-col items-center justify-center text-center text-xs lg:text-base">
                  {icon}
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </FadeIn>
    </article>
  );
};

export default Policity;
