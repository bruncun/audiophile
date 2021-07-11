export type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Order = {
  quantity: number;
  productSlug: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
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
  categoryImage: Image;
  gallery: {
    first: Image;
    second: Image;
    third: Image;
  };
};
