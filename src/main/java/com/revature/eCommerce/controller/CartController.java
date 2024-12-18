package com.revature.eCommerce.controller;


import com.revature.eCommerce.entity.ShoppingCart;
import com.revature.eCommerce.resposity.CartRepository;
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

    @PostMapping("/{userId}/addItems/{productId}")
    public ResponseEntity<ShoppingCart> addProductToCart(
            @PathVariable Integer userId,
            @PathVariable Long productId,
            @RequestParam Integer quantity) {

        ShoppingCart updatedCart = cartService.addProductToCart(userId, productId, quantity);
        return ResponseEntity.ok(updatedCart);
    }
}
