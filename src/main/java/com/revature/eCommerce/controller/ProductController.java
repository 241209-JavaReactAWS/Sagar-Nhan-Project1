package com.revature.eCommerce.controller;

import com.revature.eCommerce.entity.Product;
import com.revature.eCommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    public ProductService productService;


    /*** GET ALL PRODUCT ***/
    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    /*** UPDATE A PRODUCT ***/
    @PutMapping("/{productId}")
    public Product updateProduct (@PathVariable Long productId, @RequestBody Product product) {
        return productService.updateProductById (productId, product);
    }
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId) {
        productService.deletedProduct(productId);
        return ResponseEntity.noContent().build();
    }
}
