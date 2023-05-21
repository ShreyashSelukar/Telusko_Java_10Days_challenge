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

    public Product getProductByPlace(String place){
        return products.stream()
                .filter(p -> (p.getPlace().equals(place)))
                .findFirst()
                .orElse(null);
    }
    public List<Product> getOutOfWarrantyProduct(int currentYear) {
            return products.stream()
                    .filter(p -> (p.getWarranty() < currentYear))
                    .collect(Collectors.toList());

    }
}
