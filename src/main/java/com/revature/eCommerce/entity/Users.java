package com.revature.eCommerce.entity;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import org.jetbrains.annotations.*;

@Entity
@Table(name ="Users")
public class Users {

    @Id
    @Column(name="User_id")
    private Integer userId;

    @OneToOne
    @JoinColumn(name="User_id",  referencedColumnName = "user_id")
    private Account account;

    @Column(name = "First_name", nullable = true)
    private String firstName;

    @Column(name = "Last_name", nullable = true)
    private String lastName;

    @Column(name = "Email", unique=true, nullable = true)
    private String email;

    @Column(name= "Address", nullable = true)
    private String address;

    @Column(name = "Phone")
    private String phone;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    
}
