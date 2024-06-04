import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/lib/interface";
import ProductCard from "./product-card";
import NotFoundProducts from "./not-found-products";

const SimiliarProductsCarousel = ({ products }: { products: Product[] }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full overflow-hidden"
    >
      <CarouselContent>
        {products.length ? (
          products.map((product: Product, index: number) => (
            <CarouselItem className="basis-1/2  sm:basis-1/3 md:basis-1/4">
              <ProductCard product={product} />
            </CarouselItem>
          ))
        ) : (
          <NotFoundProducts />
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SimiliarProductsCarousel;
