declare global {
  namespace T {
    type CartAction =
      | {
          type: "ADD_TO_CART";
          payload: { product: T.Product; quantity: number };
        }
      | { type: "REMOVE_FROM_CART"; payload: { cartItemId: string } }
      | { type: "CLEAR_CART" }
      | { type: "INCREMENT_QUANTITY"; payload: { cartItemId: string } }
      | { type: "DECREMENT_QUANTITY"; payload: { cartItemId: string } }
      | { type: "SET_CART"; payload: { cart: T.Cart } };

    interface ImageSet {
      mobile: string;
      tablet: string;
      desktop: string;
    }

    interface Product {
      id: number;
      slug: string;
      name: string;
      image: ImageSet;
      category: string;
      categoryImage: ImageSet;
      new: boolean;
      price: number;
      description: string;
      features: string;
      includes: Array<{ quantity: number; item: string }>;
      gallery: {
        first: ImageSet;
        second: ImageSet;
        third: ImageSet;
      };
      others: Array<{
        slug: string;
        name: string;
        image: ImageSet;
      }>;
    }

    interface Category {
      slug: string;
      name: string;
      images: ImageSet;
      products: Product[];
    }

    interface CartItem {
      id: string;
      product: Product;
      quantity: number;
    }

    interface Cart {
      items: CartItem[];
      total: number;
    }
  }
}

export {};
