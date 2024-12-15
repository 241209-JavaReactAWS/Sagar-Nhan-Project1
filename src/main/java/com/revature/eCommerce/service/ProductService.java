package com.revature.eCommerce.service;

import com.revature.eCommerce.entity.Product;
import com.revature.eCommerce.resposity.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProductService {

    @Autowired

    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long productId){
        return productRepository.findById(productId).orElse(null);
    }
    public Product addProduct (Product product){
        return productRepository.save(product);
    }
    public void deletedProduct(Long productId){
        productRepository.deleteById(productId);
    }

    public Product updateProductById(Long id, Product updatedProduct){
        return productRepository.findById(id).map(product -> 
        {
            product.setName(updatedProduct.getName());
            product.setPrice(updatedProduct.getPrice());
            product.setQuantity(updatedProduct.getQuantity());
            product.setImageUrl(updatedProduct.getImageUrl());
            return productRepository.save(product);
            
        }).orElseThrow() ;
    }
}