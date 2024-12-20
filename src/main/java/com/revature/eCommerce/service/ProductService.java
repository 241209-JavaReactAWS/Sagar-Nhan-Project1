package com.revature.eCommerce.service;

import com.revature.eCommerce.entity.Product;
import com.revature.eCommerce.resposity.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    /**GET ALL PROdUCTS **/
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    /**GET PROdUCT BY ID **/
    public Product getProductById(Long productId){
        return productRepository.findById(productId).orElse(null);
    }
    /**ADD NEW PROdUCT BY **/
    public void AddNewProduct(String productName, Double price, Integer availableQuantity, MultipartFile image) {
        try {
            // Create a new product
            Product product = new Product();
            product.setProductName(productName);
            product.setPrice(price);
            product.setAvailableQuantity(availableQuantity);

            // Set image data
            product.setImageData(image.getBytes());

            // Save the product
            productRepository.save(product);
        } catch (Exception e) {
            throw new RuntimeException("Error saving product with image", e);
        }
    }
    /**DELETE  PROdUCT BY ID **/
    public void deletedProduct(Long productId){
        productRepository.deleteById(productId);
    }
    /***********  UPDATE PRODUCT BY ID      **********/
    public Product updateProductById(Long productId, Product updatedProduct) {
        return productRepository.findById(productId).map(product -> {
            product.setProductName(updatedProduct.getProductName());
            product.setPrice(updatedProduct.getPrice());
            product.setAvailableQuantity(updatedProduct.getAvailableQuantity());
            product.setImageData(updatedProduct.getImageData()); // Adjusted for imageData
            return productRepository.save(product);
        }).orElseThrow(() -> new RuntimeException("Product not found"));
    }
    /***********  UPLOAD PRODUCT IMAGE      **********/
    public String uploadProductImage(Long productId, MultipartFile file) {
        Product product = productRepository.findById(productId).orElseThrow(() ->
                new RuntimeException("Product not found"));
        try {
            product.setImageData(file.getBytes());
            productRepository.save(product);
            return "Image uploaded successfully";
        } catch (Exception e) {
            throw new RuntimeException("Error uploading image", e);
        }
    }
    /********* GET IMAGE FOR PRODCUT   *********/
    public byte[] getProductImage(Long productId) {
        Product product = productRepository.findById(productId).orElseThrow(() ->
                new RuntimeException("Product not found"));
        return product.getImageData();
    }

}