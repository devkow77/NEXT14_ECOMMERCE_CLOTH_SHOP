export interface Link {
  name: string;
  href: string;
}

export interface Product {
  id: string;
  images: {
    url: string;
  }[];
  price: string;
  slug: string;
  name: string;
}

export interface Filter {
  name: string;
  value: string;
}
