package com.revature.eCommerce.entity;

import jakarta.persistence.*;


@Entity
@Table(name ="account_role")
public class Role {

    @Id

    @Column(name="role_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer roleId;


    @Column(name = "role_name", nullable = false, unique = true)
    private String roleName;


    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }


}
