import React from 'react';
import { Product as ProductType } from '../types/productTypes';
import ProductForm from '../components/HomePageComponent/ProductForm';

interface AdminDashboardProps {
  products: ProductType[];
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ products }) => {
  return (
    <div className="container mt-5 ">
      <h1 className="text-center">Admin Dashboard</h1>

      {/* Product List Section */}
      <section className="mt-5">
        <h2 className="text-center">Product List</h2>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Add Product Form Section */}
      <section className="mt-5">
        <h2 className="text-center">Add a New Product</h2>
        <ProductForm />
      </section>
    </div>
  );
};

export default AdminDashboard;
