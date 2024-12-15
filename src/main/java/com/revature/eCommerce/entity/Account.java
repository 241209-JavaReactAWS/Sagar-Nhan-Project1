package com.revature.eCommerce.entity;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import org.jetbrains.annotations.*;

@Entity
@Table(name ="Account")

public class Account {

    @Column(name="User_id")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userId;

    @Column(name="Username")
    private String username;

    @Column(name= "password_hash")
    private String passwordHash;

    @Column(name="role_name")
    private String roleName;


    public Account(String username, String passwordHash) {
        this.username = username;
        this.passwordHash = passwordHash;
    }

    public Account(Integer userId, String username, String passwordHash, String roleName) {
        this.userId = userId;
        this.username = username;
        this.passwordHash = passwordHash;
        this.roleName = roleName;
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

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String toString() {
        return "Account {"+
                "userId  = " + userId +
                ", username    = " + username + '\'' +
                ", password = " + passwordHash + '\'' +
                ", roleName = " + roleName + '\'' +
                "} ";
    }
}