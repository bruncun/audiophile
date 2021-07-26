type CartAction =
  | { type: "ADD_ORDER"; payload: Order }
  | { type: "REMOVE_ALL_ORDERS" };

declare interface Order {
  productId: number;
  quantity: number;
}

declare interface Costs {
  total: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

declare interface Cart {
  [k: number]: number;
}

declare interface ICheckoutFormValues {
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

declare interface Purchase extends ICheckoutFormValues {
  orders: Order[];
}

declare type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};

declare type Product = {
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

declare interface LocationWithNavState extends Location {
  state: { showCollapse?: boolean; showCart?: boolean };
}
