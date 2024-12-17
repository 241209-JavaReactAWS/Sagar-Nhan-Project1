package com.revature.eCommerce.service;

import com.revature.eCommerce.entity.Role;
import com.revature.eCommerce.resposity.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public Role updateRole(Integer roleId, String roleName){
        Optional<Role> optionalRole = roleRepository.findById(roleId);
        if(optionalRole.isEmpty()) {
            throw new IllegalArgumentException("Role with ID"+ roleId + "does not exist");
        }
        Role role = optionalRole.get();
        role.setRoleName(roleName);
        return roleRepository.save(role);
    }

    public List<Role> getAllRole() {
        return roleRepository.findAll();
    }

    public Role createRole (Role role) {
        return roleRepository.save(role);
    }
    public void deleteRole(Integer roleId){
        roleRepository.deleteById(roleId);
    }
}
