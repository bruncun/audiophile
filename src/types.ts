type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Product = {
  name: string;
  isNew: boolean;
  description: string;
  price: number;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  others: {
    slug: string;
    name: string;
    image: Image;
  }[];
  image: Image;
  gallery: {
    first: Image;
    second: Image;
    third: Image;
  };
};
