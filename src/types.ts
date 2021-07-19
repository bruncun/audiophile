export interface ICheckoutFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: number;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber: string;
  eMoneyPin: string;
}

export type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Order = {
  id: number;
  quantity: number;
};

export type Product = {
  id: number;
  name: string;
  shortName: string;
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

export interface LocationWithNavState extends Location {
  state: { showCollapse?: boolean; showCart?: boolean };
}
