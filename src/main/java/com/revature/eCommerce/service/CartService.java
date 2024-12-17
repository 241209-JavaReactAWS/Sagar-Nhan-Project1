package com.revature.eCommerce.service;


import com.revature.eCommerce.entity.ShoppingCart;
import com.revature.eCommerce.resposity.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    //GET SHOPPING CART BY USER ID
    public ShoppingCart getCartByUserId(Integer  userId){
        Optional<ShoppingCart> optionalCart = cartRepository.findByUser_userId(userId);
        return optionalCart.orElse(null);
    }

    // CREATE AND UPDATE A SHOPPING CART
    public ShoppingCart createAndUpdateCart(ShoppingCart cart){
        return cartRepository.save(cart);
    }

}
