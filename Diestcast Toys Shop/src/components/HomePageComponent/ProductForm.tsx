import React from 'react';

const ProductForm: React.FC = () => (
    <form id="product-form" className="mt-4">
        <div className="row mb-3">
            <div className="col">
                <input type="text" id="product-name" className="form-control" placeholder="Product Name" required />
            </div>
            <div className="col">
                <input type="number" id="product-price" className="form-control" placeholder="Price" required />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col">
                <input type="number" id="product-quantity" className="form-control" placeholder="Quantity" required />
            </div>
            <div className="col">
                <input type="file" id="product-image" className="form-control" accept="image/*" required />
            </div>
        </div>
        <div className="text-center">
            <button type="submit" className="btn btn-success">Add to Inventory</button>
        </div>
    </form>
);

export default ProductForm;
