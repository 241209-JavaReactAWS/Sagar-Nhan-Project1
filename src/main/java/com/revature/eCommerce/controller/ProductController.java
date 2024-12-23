package com.revature.eCommerce.controller;
import com.revature.eCommerce.entity.Account;
import com.revature.eCommerce.entity.Product;
import com.revature.eCommerce.entity.Role;
import com.revature.eCommerce.resposity.AccountRepository;
import com.revature.eCommerce.resposity.ProductRepository;
import com.revature.eCommerce.service.AccountService;
import com.revature.eCommerce.service.ProductService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    public ProductService productService;
    @Autowired
    public ProductRepository productRepository;
    @Autowired
    private AccountService accountService;

    /*** GET ALL PRODUCT ***/
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    /*** GET PRODUCT BY ID ***/
    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) {
        Product product = productService.getProductById(productId);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(product);
    }
    /*** UPDATE A PRODUCT ***/
    @PutMapping("/{productId}")
    public ResponseEntity<Product> updateProduct
    (
            HttpSession session,
            @PathVariable Long productId,
            @RequestBody Product product

    ) {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

// Fetch the Account object from the database
        Account user = accountService.findAccountByUsername(username);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

// Check if the user is an admin
        if (!"ADMIN".equals(user.getRoleName().getRoleName())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }


        Product updatedProduct = productService.updateProductById(productId, product);
        return ResponseEntity.ok(updatedProduct);
    }

    /******* ADD NEW PRODUCT  *****/
    @PostMapping("/create")
    public ResponseEntity<Product> createProduct(
            @RequestParam("productName") String productName,
            @RequestParam("price") BigDecimal price,
            @RequestParam("availableQuantity") Integer availableQuantity,
            @RequestParam("image") MultipartFile image) {
        try {
            Product product = productService.addNewProduct(productName, price, availableQuantity, image);
            return ResponseEntity.status(HttpStatus.CREATED).body(product);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }
    /******* DELETE PRODUCT BY ID ******/
    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(HttpSession session, @PathVariable Long productId) {
        String username = (String) session.getAttribute("username");
        if (username == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        Role role = (Role) session.getAttribute("role");
        if (role == null || !"ADMIN".equals(role.getRoleName())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build(); // 403 Forbidden
        }

        productService.deletedProduct(productId);
        return ResponseEntity.noContent().build();
    }


}
