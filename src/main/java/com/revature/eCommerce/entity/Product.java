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

    @Lob
    private byte[] imageData;

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

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }

    public List<ShoppingCart> getCarts() {
        return carts;
    }

    public void setCarts(List<ShoppingCart> carts) {
        this.carts = carts;
    }
}
