package com.revature.eCommerce.resposity;

import com.revature.eCommerce.entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<ShoppingCart, Long> {
    //Find SHopping cart base on User ID
    Optional<ShoppingCart> findByUser_userId(Integer userId);

}
