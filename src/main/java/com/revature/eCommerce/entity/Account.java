package com.revature.eCommerce.entity;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import org.jetbrains.annotations.*;

import java.io.Serializable;

@Entity
@Table(name ="account")

public class Account implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private Integer userId;

    @Column(name="username", nullable = false, unique = true)
    private String username;

    @Column(name= "password_hash", nullable = false)
    private String passwordHash;

    @ManyToOne
    @JoinColumn(name="role_id" , referencedColumnName= "role_id" ,nullable = false )
    private Role role;


    public Account() {
    }

    public Account(String username, String passwordHash) {
        this.username = username;
        this.passwordHash = passwordHash;
    }


    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public Role getRoleName() {
        return role;
    }

    public void setRoleName(Role role) {
        this.role = role;
    }

    public String toString() {
        return "Account {"+
                "userId  = " + userId +
                ", username    = " + username + '\'' +
                ", password = " + passwordHash + '\'' +
                ", roleName = " + (role != null ? role.getRoleName() : "null") +
                "} ";
    }
}