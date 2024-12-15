package com.revature.eCommerce.resposity;

import com.revature.eCommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository <Product, Long>{

}
