import axios from 'axios';
import { Product } from '../../types/productTypes';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
