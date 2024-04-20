export type TDynamicProductParams = {
  params: {
    productId: string;
  };
};
export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  categories: string[];
  stockQuantity: number;
  images: string;
  brand: string;
  ratings: number;
  reviews: TProductReview[];
  isActive: boolean;
  isDeleted: boolean;
};

type TProductReview = {
  reviewer: string;
  comment: string;
  rating: number;
  reviewDate: string;
};
