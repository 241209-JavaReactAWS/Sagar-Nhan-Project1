package com.revature.eCommerce.controller;


import com.revature.eCommerce.entity.Account;
import com.revature.eCommerce.entity.Role;
import com.revature.eCommerce.service.AccountService;
import com.revature.eCommerce.service.RoleService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "http://localhost:5173")
public class AccountController {

    @Autowired
    private RoleService roleService;
    @Autowired
    private AccountService accountService;


    /************* GET ALL ACCOUNT ************/
    @GetMapping("/all")
    public ResponseEntity<?> getAllAccounts(HttpSession session) {
        // Check if user is logged in
        Account user = (Account) session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("You must be logged in to access this resource.");
        }

        // Optional: Check for admin privileges
        if (!user.getRoleName().getRoleName().equals("ROLE_ADMIN")) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied.");
        }

        // Fetch and return all accounts
        return ResponseEntity.ok(accountService.getAllAccounts());
    }

    /************GET ACCOUNT BY USER ID ************/

    @GetMapping("/{userId}")
    public ResponseEntity<Account> getAccountById (@PathVariable Integer userId){

        Optional<Account> account =  accountService.getAccountById(userId);
        return account.map(ResponseEntity::ok)                      // If present return 200 OK
                .orElseGet(() -> ResponseEntity.notFound().build()); // If empty, return 404 Not Found
    }

    /************REGISTER ACCOUNT************/
    @PostMapping("/register")
    public ResponseEntity<?> registerAccount(@RequestBody Account account, @RequestParam(required = false) String roleName) {
        try {
            // Register the account
            Account registeredAccount = accountService.registerAccount(account, roleName);

            return ResponseEntity.status(HttpStatus.CREATED).body(registeredAccount);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    /************LOGIN ACCOUNT************/
    @PostMapping("/login")
    public ResponseEntity<?> loginAccount(@RequestBody Account account, HttpSession session) {
        Account authenticatedAccount = accountService.loginAccount(account.getUsername(), account.getPasswordHash());
        if (authenticatedAccount == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }


        session.setAttribute("username", authenticatedAccount.getUsername());
        session.setAttribute("userId", authenticatedAccount.getUserId());
        session.setAttribute("role", authenticatedAccount.getRoleName());
        return ResponseEntity.ok(authenticatedAccount);
    }
    /************LOG OUT ACCOUNT************/
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.noContent().build();
    }
    /************DELETE ACCOUNT************/

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteAccount(@PathVariable Integer userId, HttpSession session) {
        Account user = (Account) session.getAttribute("user");

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // User not logged in
        }

        if (!"ROLE_ADMIN".equals(user.getRoleName().getRoleName())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build(); // User does not have admin privileges
        }

        accountService.deleteAccount(userId);
        return ResponseEntity.noContent().build();
    }
    ///************ROLE CONTROLLER*************** ///
    @PutMapping("/roles/{roleId}")
    public ResponseEntity<?> updateRole(@PathVariable("roleId") Integer roleId, @RequestBody String roleName, HttpSession session) {
        Account user = (Account) session.getAttribute("user");

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("You must be logged in to access this resource.");
        }

        if (!"ROLE_ADMIN".equals(user.getRoleName().getRoleName())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied.");
        }

        Role updatedRole = roleService.updateRole(roleId, roleName);
        return ResponseEntity.ok(updatedRole);
    }
    ///************GET ALL ROLES*************** ///

    @GetMapping("/roles")
    public ResponseEntity<?> getAllRoles(HttpSession session) {
        Account user = (Account) session.getAttribute("user");

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("You must be logged in to access this resource.");
        }

        if (!"ROLE_ADMIN".equals(user.getRoleName().getRoleName())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied.");
        }

        List<Role> roles = roleService.getAllRole();
        return ResponseEntity.ok(roles);
    }
}
