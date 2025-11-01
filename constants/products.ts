import { CATEGORIES } from "./categories";

export const PRODUCTS: T.Product[] = CATEGORIES.flatMap(
  (category) => category.products,
);
