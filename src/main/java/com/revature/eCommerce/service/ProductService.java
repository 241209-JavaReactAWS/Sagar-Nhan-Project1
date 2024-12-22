package com.revature.eCommerce.service;

import com.revature.eCommerce.entity.Product;
import com.revature.eCommerce.resposity.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    private final String uploadDir = System.getProperty("user.dir") + "/imageProducts/";

    /**GET ALL PRODUCTS **/
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(product -> new Product(
                product.getProductId(),
                product.getProductName(),
                product.getPrice(),
                product.getAvailableQuantity(),
                product.getImagePath()
        )).toList();
    }

    /**GET PROdUCT BY ID **/
    public Product getProductById(Long productId){
        Product product = productRepository.findById(productId).orElseThrow(null);
        return new Product(
                product.getProductId(),
                product.getProductName(),
                product.getPrice(),
                product.getAvailableQuantity(),
                product.getImagePath()
        );
    }

    /**ADD NEW PROdUCT BY **/
    public Product addNewProduct(String productName, BigDecimal price, Integer availableQuantity, MultipartFile image) {
        try {
            // Save the image and get the relative path
            String imagePath = saveImageToFileSystem(image);

            // Create and save the product
            Product product = new Product();
            product.setProductName(productName);
            product.setPrice(price);
            product.setAvailableQuantity(availableQuantity);
            product.setImagePath(imagePath); // Save the relative path
            return productRepository.save(product);
        } catch (IOException e) {
            throw new RuntimeException("Error saving product with image", e);
        }
    }
    /**DELETE  PROdUCT BY ID **/
    public void deletedProduct(Long productId){
        productRepository.deleteById(productId);
    }
    /***********  UPDATE PRODUCT BY ID      **********/
    /** UPDATE PRODUCT BY ID **/
    public Product updateProductById(Long productId, Product updatedProduct, MultipartFile image) {
        return productRepository.findById(productId).map(product -> {
            try {
                product.setProductName(updatedProduct.getProductName());
                product.setPrice(updatedProduct.getPrice());
                product.setAvailableQuantity(updatedProduct.getAvailableQuantity());

                if (image != null && !image.isEmpty()) {
                    // Save new image and update the imagePath
                    String imagePath = saveImageToFileSystem(image);
                    product.setImagePath(imagePath);
                }
                return productRepository.save(product);
            } catch (IOException e) {
                throw new RuntimeException("Error updating product image", e);
            }
        }).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    /** SAVE IMAGE TO FILE SYSTEM **/
    private String saveImageToFileSystem(MultipartFile image) throws IOException {
        // Ensure the upload directory exists
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Save the file with a unique name to prevent overwrites
        String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.write(filePath, image.getBytes());

        // Return only the filename
        return fileName;
    }

}