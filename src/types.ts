export type Category = 'all' | 'summer' | 'winter' | 'occasion' | 'shoes' | 'treats';

export type BodyCut = 'Petite' | 'Standard' | 'Long-Body' | 'Broad-Chest';
export type ShoeSize = 'Petite' | 'Standard' | 'Wide' | 'XL';

export interface SizeOption {
  cut: BodyCut;
  girthRange: string;
  minGirth: number;
  maxGirth: number;
  backLengthRange: string;
  breeds: string;
}

export interface ProductColorway {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  title: string;
  category: Category;
  categoryLabel: string;
  tag: string;
  tagBadge?: string;
  material: string;
  price: number;
  originalPrice?: number;
  girth: number;
  description: string;
  longDescription?: string;
  recommendedCuts: string;
  image: string;
  galleryImages?: string[];
  colorways?: ProductColorway[];
  rating?: number;
  reviewCount?: number;
  edition?: string;
  specs?: {
    label: string;
    value: string;
  }[];
  sizeOptions?: SizeOption[];
}

export interface CartItem {
  product: Product;
  size: BodyCut | ShoeSize | string;
  colorway: string;
  quantity: number;
  chestGirth: number;
}
