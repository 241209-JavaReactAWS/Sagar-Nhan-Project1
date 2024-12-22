import axios from "axios";

const API_BASE_URL = "http://localhost:8080/shopping-cart";

export const addProductToCart = async (
  userId: number,
  productId: number,
  quantity: number
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/${userId}/addItems/${productId}`,
      null,
      {
        params: { quantity },
      }
    );
    return response.data; // Updated to return ShoppingCartDTO
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};