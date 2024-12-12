package com.revature.eCommerce.entity;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import org.jetbrains.annotations.*;

@Entity
@Table(name ="account")

public class Account {

    @Column(name="accountId")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long accountId;

    private String username;

    private String password;

    private String firstName;

    private String lastName;

    @NotNull

    private String email;

    private String address;

    private String phone;

    private long purchaseAmount;

    private Cart cart;

    private Role role;

    /* CONSTRUCTOR without accountID*/
    public Account(String username, String password){
        this.username = username;
        this.password = password;
    }

    /* CONSTRUCTOR */
    public Account(long accountId, String firstName, String lastName, String email, String address, String phone) {
        this.accountId = accountId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }




    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }

    public long getPurchaseAmount() {
        return purchaseAmount;
    }

    public void setPurchaseAmount(long purchaseAmount) {
        this.purchaseAmount = purchaseAmount;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(java.lang.String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(java.lang.String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public @NotNull String getEmail() {
        return email;
    }

    public void setEmail(@NotNull String email) {
        this.email = email;
    }

    public String toString() {
        return "Account {"+
                "accountId  = " + accountId +
                ", email    = " + email + '\'' +
                ", firstName= " + firstName + '\'' +
                ", lastName = " + lastName + '\'' +
                ", address  = " + address + '\'' +
                ", phone    = " + phone + '\'' +
                "} ";
    }
}