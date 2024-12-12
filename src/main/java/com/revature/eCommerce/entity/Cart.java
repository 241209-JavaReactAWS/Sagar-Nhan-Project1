package com.revature.eCommerce.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="carts")
public class Cart {
    private long id;

    private long total;

    private Account user;
}
