export interface Product {
    productId: number; // Matches the backend property
    productName: string; // Matches the backend property
    price: number;
    availableQuantity: number;
    imageUrl: string | null; // Handles the `null` case
  }
  