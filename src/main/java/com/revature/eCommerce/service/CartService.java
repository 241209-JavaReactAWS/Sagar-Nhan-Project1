package com.revature.eCommerce.service;


import com.revature.eCommerce.entity.*;
import com.revature.eCommerce.resposity.AccountRepository;
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
    private AccountRepository accountRepository;
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

        // Ensure the user exists in the database
        Account user = accountRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));

        // Fetch or create the shopping cart
        ShoppingCart cart = cartRepository.findByUser_userId(userId)
                .orElseGet(() -> {
                    ShoppingCart newCart = new ShoppingCart();
                    newCart.setUser(user); // Set the existing user
                    newCart.setTotalAmount(BigDecimal.ZERO);
                    newCart.setCartItems(new java.util.ArrayList<>()); // Initialize empty list
                    return cartRepository.save(newCart); // Save the new cart
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
                .map(CartItem::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        cart.setTotalAmount(totalAmount);

        // Save and return the updated cart
        return cartRepository.save(cart);
    }
    /********* DELETE ITEM FROM CART ****/
    @Transactional
    public ShoppingCart deleteItemFromCart(Integer userId, Long productId) {
        // Fetch the shopping cart
        ShoppingCart cart = cartRepository.findByUser_userId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found for user ID: " + userId));

        // Find the cart item to delete
        Optional<CartItem> itemToDelete = cart.getCartItems().stream()
                .filter(item -> item.getProduct().getProductId().equals(productId))
                .findFirst();

        if (itemToDelete.isEmpty()) {
            throw new RuntimeException("Product not found in the cart");
        }

        // Remove the item from the cart
        cart.getCartItems().remove(itemToDelete.get());

        // Recalculate total amount
        BigDecimal totalAmount = cart.getCartItems().stream()
                .map(CartItem::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        cart.setTotalAmount(totalAmount);

        // Save and return the updated cart
        return cartRepository.save(cart);
    }

}

