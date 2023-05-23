package com.example.ProductSpringWeb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    // it'll provide object of productDb automatically
    @Autowired
    ProductDB db;
    public List<Product> getAllProducts(){
        return db.findAll();
    }
    public List<Product> getProductByName(String name){
        return db.findByNameIgnoreCase(name.toLowerCase());
    }
    public List<Product> getProductsByText(String searchText){
        return db.findAllByAnyColumnContaining(searchText.toLowerCase());
    }
    public List<Product> getOutOfWarranty(Integer warranty){
        return db.findByWarrantyLessThan(warranty);
    }

    public void addProduct(Product p) {
        db.save(p);
    }

    public List<Product>  getProduct(String name) {
       return db.findByNameIgnoreCase(name);
    }
    public void deleteProductById(Long id) {
        // Implement the logic to delete a product by ID
        // Example:
        db.deleteById(id);
    }
}
