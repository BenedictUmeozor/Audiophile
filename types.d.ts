declare global {
  namespace T {
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
  }
}

export {};
