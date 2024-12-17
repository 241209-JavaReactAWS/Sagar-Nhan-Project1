package com.revature.eCommerce.resposity;

import com.revature.eCommerce.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {
    List<Orders> findByUser_UserId(Integer userId);
}
