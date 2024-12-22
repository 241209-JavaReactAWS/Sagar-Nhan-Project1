import React, { useState } from 'react';
import { addNewProduct } from '../components/product/productApi';
const AdminPage: React.FC = () => {
  
  const [productName, setProductName] = useState('');
  const [price,setPrice] = useState<number | ''>('');
  const [availableQuantity, setAvailableQuantity] = useState<number | ''>('');
  const [image, setImage]= useState<File |null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", productName, price, availableQuantity, image);
    
    if (!productName.trim() || !price || !availableQuantity || !image) {
      alert("All fields are required, including an image.");
      return;
    }
    try {
      const response = await addNewProduct({
        productName,
        price: Number(price),
        availableQuantity: Number(availableQuantity),
        imagePath: image,
      });
      console.log("Product created:", response);
      alert("Product created successfully!");
    } catch (error:any) {
      console.error(" Error creating product:", error.response.data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
            <h1>Add New Product</h1>
            <div>
                <label>Product Name:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Available Quantity:</label>
                <input
                    type="number"
                    value={availableQuantity}
                    onChange={(e) => setAvailableQuantity(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    required
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
  );
  
};

export default AdminPage;
