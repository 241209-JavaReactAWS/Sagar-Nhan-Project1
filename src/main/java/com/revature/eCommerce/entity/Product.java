package com.revature.eCommerce.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name ="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "available_quantity", nullable = false)
    private Integer availableQuantity ;

    @ManyToMany(mappedBy = "products")
    private List<ShoppingCart> carts;

    @Column(name = "image_path")
    private String imagePath; // New field for file system storage

    public Product() {
    }
    public Product(long productId, String productName, BigDecimal price, Integer availableQuantity, String imagePath) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.availableQuantity = availableQuantity;
        this.imagePath = imagePath;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId){
        this.productId =productId;
    }

    public String getProductName (){
        return productName;
    }
    public void setProductName (String productName) {
        this.productName = productName;
    }

    public BigDecimal getPrice () {
        return price;
    }
    public void setPrice (BigDecimal price) {
        this.price = price;
    }

    public Integer getAvailableQuantity (){
        return availableQuantity;
    }
    public void setAvailableQuantity (Integer availableQuantity){

        this.availableQuantity = availableQuantity;
    }

    public String getImagePath() {
        return imagePath;
    }
    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public List<ShoppingCart> getCarts() {
        return carts;
    }

    public void setCarts(List<ShoppingCart> carts) {
        this.carts = carts;
    }
}
