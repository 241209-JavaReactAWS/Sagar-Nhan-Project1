package com.revature.eCommerce.controller;


import com.revature.eCommerce.entity.ShoppingCart;
import com.revature.eCommerce.resposity.CartRepository;
import com.revature.eCommerce.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired

    private CartService cartService;

    @GetMapping ("/{userId}")
    public ResponseEntity<ShoppingCart> getCartByUserId(@PathVariable Integer userId){
        ShoppingCart cart= cartService.getCartByUserId(userId);
        if (cart ==null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(cart);
    }

    @PostMapping
    public ResponseEntity<ShoppingCart> CreateOrUpdateCart (@RequestBody ShoppingCart cart){
        ShoppingCart updateCart = cartService.createAndUpdateCart(cart);
        return ResponseEntity.ok(updateCart);
    }
}
