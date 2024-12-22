package com.revature.eCommerce.service;


import com.revature.eCommerce.entity.*;
import com.revature.eCommerce.resposity.CartRepository;
import com.revature.eCommerce.resposity.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;



import com.revature.eCommerce.entity.CartItem;
import com.revature.eCommerce.entity.Product;
import com.revature.eCommerce.entity.ShoppingCart;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    // GET SHOPPING CART BY USER ID
    @Transactional
    public ShoppingCart getCartByUserId(Integer userId) {
        return cartRepository.findByUser_userId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found for user ID: " + userId));
    }

    // ADD A PRODUCT TO CART
    @Transactional
    public ShoppingCart addProductToCart(Integer userId, Long productId, Integer quantity) {
        // Check quantity
        if (quantity <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than zero");
        }

        // Fetch or create the shopping cart
        ShoppingCart cart = cartRepository.findByUser_userId(userId)
                .orElseGet(() -> {
                    ShoppingCart newCart = new ShoppingCart();
                    newCart.setUser(new Account(userId));
                    newCart.setTotalAmount(BigDecimal.ZERO);
                    newCart.setCartItems(new java.util.ArrayList<>());
                    return cartRepository.save(newCart);
                });

        // Fetch the product
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with ID: " + productId));

        // Check if the product already exists in the cart
        Optional<CartItem> existingItem = cart.getCartItems().stream()
                .filter(item -> item.getProduct().getProductId().equals(productId))
                .findFirst();

        if (existingItem.isPresent()) {
            // Update quantity if product exists
            CartItem cartItem = existingItem.get();
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
            cartItem.setPrice(product.getPrice().multiply(BigDecimal.valueOf(cartItem.getQuantity())));
        } else {
            // Add new product to cart
            CartItem newItem = new CartItem();
            newItem.setProduct(product);
            newItem.setQuantity(quantity);
            newItem.setPrice(product.getPrice().multiply(BigDecimal.valueOf(quantity)));
            newItem.setShoppingCart(cart);
            cart.getCartItems().add(newItem);
        }

        // Recalculate total amount
        BigDecimal totalAmount = cart.getCartItems().stream()
                .map(item -> item.getPrice())
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        cart.setTotalAmount(totalAmount);

        // Save and return the updated cart
        return cartRepository.save(cart);
    }
}

