declare global {
  namespace T {
    interface Category {
      id: number;
      name: string;
      slug: string;
      imagePath: string;
      products: number[];
    }
  }
}

export {};
