package com.revature.eCommerce.entity;

import jakarta.persistence.*;

@Entity
@Table(name ="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "available_quantity", nullable = false)
    private Integer availableQuantity ;

    private String imageUrl;

    public long getProductId() {
        return productId;
    }

    public void setProductId(long id){
        this.productId =productId;
    }

    public String getProductName (){
        return productName;
    }
    public void setProductName (String name) {
        this.productName = productName;
    }

    public Double getPrice () {
        return price;
    }
    public void setPrice (Double price) {
        this.price = price;
    }

    public Integer getAvailableQuantity (){
        return availableQuantity;
    }
    public void setAvailableQuantity (Integer availableQuantity){
        this.availableQuantity = availableQuantity;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}
