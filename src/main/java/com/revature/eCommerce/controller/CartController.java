package com.revature.eCommerce.controller;


import com.revature.eCommerce.entity.ShoppingCart;
import com.revature.eCommerce.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/shopping-cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<ShoppingCart> getCartByUserId(@PathVariable Integer userId) {
        ShoppingCart cart = cartService.getCartByUserId(userId);
        if (cart == null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(cart);
    }
    @PostMapping("/addItems/{productId}")
    public ResponseEntity<ShoppingCart> addProductToCart(
            @PathVariable Long productId,
            @RequestParam Integer quantity,
            @RequestParam(required = false) Integer userId,
            @RequestParam(required = false) String sessionId) {

        if (userId == null && sessionId == null) {
            return ResponseEntity.badRequest().body(null); // At least one must be provided
        }

        ShoppingCart updatedCart = cartService.addProductToCart( userId, productId, quantity  );
        return ResponseEntity.ok(updatedCart);
    }
}
