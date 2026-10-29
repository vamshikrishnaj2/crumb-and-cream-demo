export type ProductCategory = 'cakes' | 'custom' | 'pastries' | 'boxes';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  fullDescription: string;
  priceStarting: string;
  servings: string;
  popularFlavors: string[];
  leadTime: string;
  dietary: string[];
  image: string;
}

export interface MenuItem {
  id: string;
  category: 'Cakes' | 'Pastries' | 'Dessert Boxes' | 'Artisan Breads' | 'Beverages';
  name: string;
  description: string;
  price: string;
  tags: string[];
  isVegetarian?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Celebration Cakes' | 'Custom Tiered' | 'Pastries' | 'Dessert Boxes';
  image: string;
  caption: string;
}

export interface CustomCakeFormData {
  customerName: string;
  phone: string;
  occasion: string;
  servingsTier: string;
  flavor: string;
  filling: string;
  eventDate: string;
  inscription: string;
  specialRequests: string;
}
