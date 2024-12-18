package com.revature.eCommerce.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name ="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private long productId;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "available_quantity", nullable = false)
    private Integer availableQuantity ;

    @ManyToMany(mappedBy = "products")
    private List<ShoppingCart> carts;

    private String imageUrl;

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId){
        this.productId =productId;
    }

    public String getProductName (){
        return productName;
    }
    public void setProductName (String productName) {
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
