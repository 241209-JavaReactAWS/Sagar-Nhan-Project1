package com.revature.eCommerce.entity;

import jakarta.persistence.*;

@Entity
@Table(name="shopping_cart")
public class ShoppingCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private long cart_id;

    private long total;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private Account user;
}
