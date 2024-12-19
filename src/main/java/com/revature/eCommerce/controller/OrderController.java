package com.revature.eCommerce.controller;

import com.revature.eCommerce.entity.Account;
import com.revature.eCommerce.entity.Orders;
import com.revature.eCommerce.resposity.OrderRepository;
import com.revature.eCommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;


    /// GET ALL ORDER BY USER ID
//    @PostMapping("/checkout/{userId}")
//    public ResponseEntity<String> checkout(@PathVariable Integer userId) {
//        boolean success = orderService.checkout(userId);
//
//        if (success) {
//            return ResponseEntity.ok("Order placed successfully!");
//        } else {
//            return ResponseEntity.badRequest().body("Failed to process the order. Cart is empty or user not found.");
//        }
//    }
    ///  GET ORDER DETAIL  BY ORDER ID
    @GetMapping("/{orderId}")
    public ResponseEntity<Orders> getOrderDetailByOrderId (@PathVariable  Integer orderId){
        Orders order = orderService.getOrderByOrderId(orderId);
        if(order == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(order);
    }
}
