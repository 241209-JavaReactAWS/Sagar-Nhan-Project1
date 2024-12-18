package com.revature.eCommerce.controller;
import com.revature.eCommerce.entity.Account;
import com.revature.eCommerce.entity.Product;
import com.revature.eCommerce.service.ProductService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<Product> updateProduct(HttpSession session, @PathVariable Long productId, @RequestBody Product product) {
        Account user = (Account) session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        if (!"ROLE_ADMIN".equals(user.getRoleName().getRoleName())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        Product updatedProduct = productService.updateProductById(productId, product);
        return ResponseEntity.ok(updatedProduct);
    }

    /******* CREATE NEW PRODUCT  *****/
    @PostMapping
    public ResponseEntity<Product> addProduct(HttpSession session, @RequestBody Product product) {
        if(session.isNew()|| session.getAttribute("username") == null){
            return ResponseEntity.status(401).build();
        }
        if(session.getAttribute("role").equals("ROLE_ADMIN")){
            return ResponseEntity.status(403).build();
        }
        Product newProduct = productService.addProduct(product);
        if(newProduct == null){
            return ResponseEntity.status(400).build();
        }
        return ResponseEntity.status(201).body(newProduct);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(HttpSession session, @PathVariable Long productId) {
        Account user = (Account) session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        if (!"ROLE_ADMIN".equals(user.getRoleName().getRoleName())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        productService.deletedProduct(productId);
        return ResponseEntity.noContent().build();
    }
}
