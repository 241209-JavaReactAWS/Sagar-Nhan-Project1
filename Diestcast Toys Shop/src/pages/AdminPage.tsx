import React, { useEffect, useState } from 'react';
import { fetchAllProducts, addNewProduct, updateProduct, deleteProduct } from '../components/product/productApi'; // Add necessary API functions
import { Product } from '../types/productTypes'; // Import the product type
import './AdminPage.css';

const AdminPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Form states for adding/updating products
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [availableQuantity, setAvailableQuantity] = useState<number | ''>('');
  const [image, setImage] = useState<File | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Fetch all products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchAllProducts();
        setProducts(productsData);
      } catch (err) {
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Handle add or update product
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!productName.trim() || !price || !availableQuantity || (editingProduct === null && !image)) {
      alert('All fields are required, including an image for new products.');
      return;
    }
  
    try {
      if (editingProduct) {
        // Update product
        await updateProduct(editingProduct.productId, {
          productName,
          price: Number(price),
          availableQuantity: Number(availableQuantity),
          imagePath: image, // Optional for updates
        });
        alert('Product updated successfully!');
      } else {
        // Add new product
        await addNewProduct({
          productName,
          price: Number(price),
          availableQuantity: Number(availableQuantity),
          imagePath: image!,
        });
        alert('Product added successfully!');
      }
  
      // Reload products
      const updatedProducts = await fetchAllProducts();
      setProducts(updatedProducts);
      resetForm();
    } catch (error: any) {
      console.error('Error:', error);
      alert(`Failed to add or update the product: ${error.response?.data?.message || error.message}`);
    }
  };
  // Handle delete product
  const handleDelete = async (productId: number) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
  
    try {
      await deleteProduct(productId); // Call the deleteProduct API
      alert('Product deleted successfully!');
      setProducts(products.filter((product) => product.productId !== productId)); // Remove the product from the local state
    } catch (error: any) {
      console.error('Failed to delete product:', error);
      alert(`Failed to delete product: ${error.response?.data?.message || error.message}`);
    }
  };
  
  // Handle edit product
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setProductName(product.productName);
    setPrice(product.price);
    setAvailableQuantity(product.availableQuantity);
    setImage(null); // Reset image for optional update
  };

  // Reset form
  const resetForm = () => {
    setEditingProduct(null);
    setProductName('');
    setPrice('');
    setAvailableQuantity('');
    setImage(null);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="admin-dashboard">
      <h1 className="admin-title">Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className="admin-form">
        <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label>Available Quantity:</label>
          <input
            type="number"
            value={availableQuantity}
            onChange={(e) => setAvailableQuantity(Number(e.target.value))}
            required
          />
        </div>
        {!editingProduct && (
          <div className="form-group">
            <label>Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
        {editingProduct && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={resetForm}
          >
            Cancel
          </button>
        )}
      </form>

      <div className="product-container">
        {products.map((product) => (
          <div key={product.productId} className="card">
            <img
              src={`http://localhost:8080/${product.imagePath}`}
              alt={product.productName}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">Price: ${product.price.toFixed(2)}</p>
              <p className="card-text">Quantity: {product.availableQuantity}</p>
              <button
                className="btn btn-warning"
                onClick={() => handleEdit(product)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(product.productId)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
