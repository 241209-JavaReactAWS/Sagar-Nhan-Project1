package com.revature.eCommerce.entity;

import jakarta.persistence.*;

@Entity
@Table(name ="Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "quantity", nullable = false)
    private Integer quantity ;

    private String imageUrl;

    public long getProductId() {
        return productId;
    }

    public void setProductId(long id){
        this.productId =productId;
    }

    public String getName (){
        return name;
    }
    public void setName (String name) {
        this.name = name;
    }

    public Double getPrice () {
        return price;
    }
    public void setPrice (Double price) {
        this.price = price;
    }

    public Integer getQuantity (){
        return quantity;
    }
    public void setQuantity (Integer quantity){
        this.quantity = quantity;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}
