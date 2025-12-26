export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  healthBenefits: string[];
  origin: string;
  nutritionFacts: {
    calories: number;
    protein: string;
    fat: string;
    carbs: string;
    fiber: string;
  };
  weights: { value: string; price: number }[];
  isBestSeller?: boolean;
  isOrganic?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  weight: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}
