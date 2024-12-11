export interface Category {
  id: number;
  name: string;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  categoryId: number;
  imageUrl?: string;
  stock?: number;
}
