package com.revature.eCommerce.entity;

import jakarta.persistence.*;

@Entity
@Table(name="shoping_carts")
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private long cart_id;

    private long total;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "User_id")
    private Account user;
}
