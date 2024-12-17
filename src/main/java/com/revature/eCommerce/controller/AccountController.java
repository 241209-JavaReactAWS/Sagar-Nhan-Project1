package com.revature.eCommerce.controller;


import com.revature.eCommerce.entity.Account;
import com.revature.eCommerce.entity.Role;
import com.revature.eCommerce.service.AccountService;
import com.revature.eCommerce.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private RoleService roleService;

    @Autowired
    private AccountService accountService;

    @GetMapping
    public List<Account> getAllAccounts(){
        return accountService.getAllAccounts();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Account> getAccountById (@PathVariable Integer userId){
        Optional<Account> account =  accountService.getAccountById(userId);
        return account.map(ResponseEntity::ok)                      // If present return 200 OK
                .orElseGet(() -> ResponseEntity.notFound().build()); // If empty, return 404 Not Found
    }
    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        return accountService.createAccount(account);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteAccount(@PathVariable Integer userId) {
        accountService.deleteAccount(userId);
        return ResponseEntity.noContent().build();
    }
    ///************ROLE CONTROLLER*************** ///
    @PutMapping("/roles/{roleId}")
    public Role updateRole (@PathVariable("roleId") Integer roleId, @RequestBody String roleName){
        return roleService.updateRole(roleId, roleName);
    }
    @GetMapping("/roles")
    public List<Role> getAllRole(){
        return roleService.getAllRole();
    }

}
