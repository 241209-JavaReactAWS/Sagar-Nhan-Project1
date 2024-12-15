package com.revature.eCommerce.service;

import com.revature.eCommerce.entity.Account;
import com.revature.eCommerce.resposity.AccountRepository;

import java.util.List;
import java.util.Optional;

public class AccountService {
    private AccountRepository accountRepository;

    public Account createAccount(Account account){
        return accountRepository.save(account);
    }

    /******/
    public Account loginAccount (String username, String passwordHash) {
        Account account = accountRepository.findByUsername(username);
        if (account != null && account.getPasswordHash().equals(passwordHash)) {
            return account;
        }
        return null;
    }
    /******/
    public List<Account> getAllAccounts(){return accountRepository.findAll();}

    /******/
    public boolean userExists(Integer userId) {return accountRepository.existsById(userId);}

    /******/
    public void deleteAccount (Integer userId) {
        accountRepository.deleteById(userId);
    }

    public Optional<Account> getAccountById(Integer userId){
        return accountRepository.findById(userId);
    }
}
