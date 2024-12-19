package com.revature.eCommerce.service;

import com.revature.eCommerce.entity.*;
import com.revature.eCommerce.resposity.CartRepository;
import com.revature.eCommerce.resposity.OrderItemsRepository;
import com.revature.eCommerce.resposity.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private OrderItemsRepository orderItemsRepository;

    /*** CHECKOUT METHOD ***/


    /*** GET ORDER DETAILS BY ORDER ID ***/
    public Orders getOrderByOrderId(Integer orderId) {
        Optional<Orders> optionalOrders = orderRepository.findById(orderId);
        return optionalOrders.orElse(null);
    }
}
