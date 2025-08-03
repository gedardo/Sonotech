export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  review_count: number;
  specifications: Record<string, any>;
  stock_quantity: number;
  sku: string;
  weight: number;
  dimensions: {
    ancho?: number;
    alto?: number;
    profundidad?: number;
  };
  in_stock: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}