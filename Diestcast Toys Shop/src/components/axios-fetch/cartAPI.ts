import axios from 'axios';

const CART_API_BASE_URL = 'http://localhost:8080/shopping-cart'; // Replace with your backend URL

export const addToCart = async (productId: number, quantity: number, userId?: number, sessionId?: string) => {
  try {
    const params: Record<string, string | number> = { quantity };
    if (userId) {
      params.userId = userId;
    } else if (sessionId) {
      params.sessionId = sessionId;
    }

    const response = await axios.post(`${CART_API_BASE_URL}/addItems/${productId}`, null, {
      params,
    });
    return response.data; // Return the updated cart
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};
//GET CART 
export const fetchCart = async (userId?: number, sessionId?: string) => {
    try {
      const params: Record<string, string | number> = {};
      if (userId) {
        params.userId = userId;
      } else if (sessionId) {
        params.sessionId = sessionId;
      }
  
      const response = await axios.get(`${CART_API_BASE_URL}/user/${userId}`, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  };
  //REMOVE ITEM FROM CART
  export const removeFromCart = async (productId: number, userId: number) => {
    try {
      const response = await axios.delete(`${CART_API_BASE_URL}/removeItem/${productId}`, {
        params: { userId },
      });
      return response.data;
    } catch (error) {
      console.error('Error removing item from cart:', error);
      throw error;
    }
  };