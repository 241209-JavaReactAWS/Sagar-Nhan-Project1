package com.revature.eCommerce.service;

import com.revature.eCommerce.entity.Account;
import com.revature.eCommerce.entity.Role;
import com.revature.eCommerce.resposity.AccountRepository;
import com.revature.eCommerce.resposity.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private RoleRepository roleRepository;


    /***SET ROLE FOR THE ACCOUNT***/

    public void updateUserRole(Integer userId, String roleName) {
        Account account = accountRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        Role role = roleRepository.findByRoleName(roleName);
        if (role == null) {
            throw new RuntimeException("Role not found");
        }

        account.setRoleName(role);
        accountRepository.save(account);
    }

    public Role getRole(Integer userId) {
        return accountRepository.findById(userId)
                .map(Account::getRoleName)
                .orElseThrow(() -> new RuntimeException("Account not found"));
    }

    /***REGISTER NEW ACCOUNT***/
    public Account registerAccount(Account account, String roleName) {
        // Check if the username already exists
        if (accountRepository.findByUsername(account.getUsername()) != null) {
            throw new RuntimeException("Username already exists: " + account.getUsername());
        }


        String effectiveRoleName = (roleName == null || roleName.isEmpty()) ? "ROLE_USER" : roleName;
        // Assign role to the account
        Role role = roleRepository.findByRoleName(roleName);
        if (role != null) {
            account.setRoleName(role);
        } else {
            throw new RuntimeException("Role not found");
        }

        // Save the account
        return accountRepository.save(account);
    }

    /****LOGIN ACCOUNT **/
    public Account loginAccount(String username, String passwordHash) {
        Account account = accountRepository.findByUsername(username);
        if (account != null && account.getPasswordHash().equals(passwordHash)) {
            return account;
        }
        else

        {
            throw new RuntimeException("Invalid username or password");
        }
    }




    /***GET ALL ACCOUNTS***/
    public List<Account> getAllAccounts(){return accountRepository.findAll();}

    /***CHECK USER EXIST BY USER ID **/
    public boolean userExists(Integer userId) {return accountRepository.existsById(userId);}

    /*** DELETED ACCOUNT ***/
    public void deleteAccount (Integer userId) {
        accountRepository.deleteById(userId);
    }

    public Optional<Account> getAccountById(Integer userId){
        return accountRepository.findById(userId);
    }
}
