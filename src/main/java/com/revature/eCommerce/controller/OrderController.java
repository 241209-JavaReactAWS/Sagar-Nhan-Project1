package com.revature.eCommerce.controller;

import com.revature.eCommerce.entity.Account;
import com.revature.eCommerce.entity.Orders;
import com.revature.eCommerce.resposity.OrderRepository;
import com.revature.eCommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;


    /// GET ALL ORDER BY USER ID
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Orders>> getAllOrdersByUserId(@PathVariable  Integer userId){
         List<Orders> orders =orderService.getAllOrdersFromUserId(userId);
         if (orders.isEmpty()){
             return ResponseEntity.noContent().build();
         }
         return ResponseEntity.ok(orders);
     }
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
