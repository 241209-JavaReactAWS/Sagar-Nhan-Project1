import axios from 'axios';
import { Product } from '../../types/productTypes';

const API_BASE_URL = 'http://localhost:8080/products'; // Replace with your backend URL

export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductByProductId = async(productId: number) => {
  const response = await axios.get(`${API_BASE_URL}/${productId}`);
  return response.data
}

//Add a new product 
export const addNewProduct = async (productData:{
  productName: string;
  price: number;
  availableQuantity: number;
  imagePath: File;
}) => {
  const formData = new FormData();
  formData.append("productName", productData.productName);
  formData.append("price",String(productData.price));
  formData.append("availableQuantity", String(productData.availableQuantity));
  formData.append("image", productData.imagePath);

  const response = await axios.post(`${API_BASE_URL}/create`,formData,{
    headers: {"Content-Type": "multipart/form-data"}
  });
  return response.data;
}

// Add a new method to update a product

export const updateProduct = async (
  productId: number,
  productData: {
    productName: string;
    price: number;
    availableQuantity: number;
    imagePath?: File;
  }
) => {
  const formData = new FormData();
  formData.append('productName', productData.productName);
  formData.append('price', String(productData.price));
  formData.append('availableQuantity', String(productData.availableQuantity));
  if (productData.imagePath) {
    formData.append('image', productData.imagePath);
  }

  try {
    const response = await axios.put(`${API_BASE_URL}/${productId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    console.error('Error updating product:', error);
    throw error;
  }
};
//DELETE PRODUCT API
export const deleteProduct = async (productId: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${productId}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true, // Include cookies if required
    });
    return response.data;
  } catch (error: any) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
