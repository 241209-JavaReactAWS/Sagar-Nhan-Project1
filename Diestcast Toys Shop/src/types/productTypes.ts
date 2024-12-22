export interface Product {
    productId: number; 
    productName: string; 
    price: number;
    availableQuantity: number;
    imagePath: string | null; // Handles the `null` case
  }
  