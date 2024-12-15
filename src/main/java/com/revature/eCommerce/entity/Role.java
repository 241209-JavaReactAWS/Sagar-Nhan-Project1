package com.revature.eCommerce.entity;

import jakarta.persistence.*;


@Entity
@Table(name ="account_role")
public class Role {

    @Id
    @Column(name="role_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer role_id;

    @Column(name = "Role_name", nullable = false)
    private String roleName;


    public Integer getRoleId() {
        return role_id;
    }

    public void setRoleId(Integer role_id) {
        this.role_id = role_id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setName(String roleName) {
        this.roleName = roleName;
    }

    public String toString() {
        return "Role {" +
                "role_id=" + role_id + ", " +
                "name=" + roleName + ", " +

                "}";
    }
}
