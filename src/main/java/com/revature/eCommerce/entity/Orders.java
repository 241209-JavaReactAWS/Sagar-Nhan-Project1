package com.revature.eCommerce.entity;

import jakarta.persistence.*;

import java.sql.Time;
import java.time.LocalDateTime;

@Entity
@Table(name="orders")
public class Orders {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="order_id")
    private Integer orderId;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private Users user;

    @Column(name = "total_amount", nullable = false)
    private Double totalAmount;

    @Column(name = "order_status")
    private String status;

    @Column(name = "at_time", columnDefinition = "TIMESTAMP")
    private LocalDateTime atTime = LocalDateTime.now();

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }
    public Orders() {
        this.atTime = LocalDateTime.now();
    }
    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getAtTime() {
        return atTime;
    }

    public void setAtTime(LocalDateTime atTime) {
        this.atTime = atTime;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
