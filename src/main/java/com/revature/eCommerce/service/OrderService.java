package com.revature.eCommerce.service;


import com.revature.eCommerce.entity.Orders;
import com.revature.eCommerce.resposity.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    /*** GET ALL ORDERS FROM USER ID*****/
    public List<Orders> getAllOrdersFromUserId(Integer userId){
        return orderRepository.findByUser_UserId(userId);
    }

    /******* SINGLE ORDER BY ORDER ID ****/
    public Orders getOrderByOrderId(Integer orderId){
        Optional<Orders> optionalOrders =orderRepository.findById(orderId);
        return optionalOrders.orElse(null);
    }
}
