import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ProductService {

    List<Product> products = new ArrayList<>();

    public void addProduct(Product p){
        products.add(p);
    }

    public List<Product> getAllProducts(){
        return products;
    }
    
    /** This method will search the product according to given exact key word as place. 
    Also it will handle the lowercase scenarios of place name.    **/
    public Product getProductByPlace(String place){
        return products.stream()
                .filter(p -> (p.getPlace().toLowerCase().equals(place.toLowerCase())))
                .findFirst()
                .orElse(null);
    }
    
    /** This method will return type as List but we are using stream to filter out of warranty products. 
    And converting Stream to List using collect(Collectors.toList()).    **/    
    public List<Product> getOutOfWarrantyProduct(int currentYear) {
            return products.stream()
                    .filter(p -> (p.getWarranty() < currentYear))
                    .collect(Collectors.toList());

    }
}
