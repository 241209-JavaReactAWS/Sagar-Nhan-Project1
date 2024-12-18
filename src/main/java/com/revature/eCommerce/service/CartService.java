package com.revature.eCommerce.service;


import com.revature.eCommerce.entity.CartItems;
import com.revature.eCommerce.entity.Product;
import com.revature.eCommerce.entity.ShoppingCart;
import com.revature.eCommerce.resposity.CartRepository;
import com.revature.eCommerce.resposity.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    //GET SHOPPING CART BY USER ID
    public ShoppingCart getCartByUserId(Integer  userId){
        Optional<ShoppingCart> optionalCart = cartRepository.findByUser_userId(userId);
        return optionalCart.orElse(null);
    }

    // ADD A product to CART
    public ShoppingCart addProductToCart(Integer userId, Long productId, Integer quantity) {
        // Validate quantity
        if (quantity <= 0) {
            throw new IllegalArgumentException("Quantity must be greater than zero");
        }

        // Fetch or create the shopping cart
        ShoppingCart cart = cartRepository.findByUser_userId(userId)
                .orElseGet(() -> {
                    ShoppingCart newCart = new ShoppingCart();
                    newCart.setUserId(userId);
                    newCart.setTotalAmount(BigDecimal.ZERO);
                    newCart.setCartItems(new java.util.ArrayList<>()); // Initialize empty list
                    return newCart;
                });

        // Fetch the product
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with ID: " + productId));

        // Check if the product already exists in the cart
        Optional<CartItems> existingItem = cart.getCartItems().stream()
                .filter(item -> item.getProduct().getProductId() == productId)
                .findFirst();

        if (existingItem.isPresent()) {
            // Update quantity if product exists
            CartItems cartItem = existingItem.get();
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
        } else {
            // Add new product to cart
            CartItems newItem = new CartItems();
            newItem.setProduct(product);
            newItem.setQuantity(quantity);
            newItem.setShoppingCart(cart);
            cart.getCartItems().add(newItem);
        }

        // Recalculate total amount

        BigDecimal totalAmount = cart.getCartItems().stream()
                .map(item ->
                        BigDecimal.valueOf(item.getProduct().getPrice()) // Convert price to BigDecimal
                        .multiply(BigDecimal.valueOf(item.getQuantity())))    // Multiply price * quantity
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        cart.setTotalAmount(totalAmount);

        // Save and return the updated cart
        return cartRepository.save(cart);
    }

}
