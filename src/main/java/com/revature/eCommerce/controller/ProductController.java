package com.revature.eCommerce.controller;
import com.revature.eCommerce.entity.Account;
import com.revature.eCommerce.entity.Product;
import com.revature.eCommerce.resposity.ProductRepository;
import com.revature.eCommerce.service.ProductService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")
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
        Account user = (Account) session.getAttribute("username");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        Object roleObj = session.getAttribute("role");
        if (roleObj == null || !"ROLE_ADMIN".equals(roleObj.toString())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build(); // 403 Forbidden
        }

        Product updatedProduct = productService.updateProductById(productId, product);
        return ResponseEntity.ok(updatedProduct);
    }

    /******* ADD NEW PRODUCT  *****/
    @PostMapping("/create")
    public ResponseEntity<String> AddNewProduct(
            @RequestParam("productName") String productName,
            @RequestParam("price") Double price,
            @RequestParam("availableQuantity") Integer availableQuantity,
            @RequestParam("image") MultipartFile image) {
        try {
            productService.AddNewProduct(productName, price, availableQuantity, image);
            return ResponseEntity.ok("Product add successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error creating product: " + e.getMessage());
        }
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(HttpSession session, @PathVariable Long productId) {
        Account user = (Account) session.getAttribute("username");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        Object roleObj = session.getAttribute("role");
        if (roleObj == null || !"ROLE_ADMIN".equals(roleObj.toString())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build(); // 403 Forbidden
        }

        productService.deletedProduct(productId);
        return ResponseEntity.noContent().build();
    }


}
