**Day 2 of Telusko challenge **

We have given the product list as
Products = [
{name='Type C', type='Cable', place='Black Drawer', warranty=2024},
 {name='Mac Studio', type='Computer', place='White Table', warranty=2025},
 {name='Focusrite Mixer', type='Audio System', place='White Table', warranty=2025},
 {name='Asus Vivobook', type='Laptop', place='Brown Drawer', warranty=2021},
 {name='Asus Rog', type='Laptop', place='Black Table', warranty=2021},
 {name='Macbook pro', type='Laptop', place='Brown Drawer', warranty=2022},
 {name='Wacom Pad', type='Writing Pad', place='Black Drawer', warranty=2020},
 {name='Apple Keyboard', type='Keyboard', place='White Table', warranty=2022},
 {name='Logitech Keyboard', type='Keyboard', place='Black Table', warranty=2024},
 {name='Hdmi cable', type='Cable', place='Black Drawer', warranty=2024},
 {name='Java Black Book', type='Cable', place='Shelf', warranty=2024},
 {name='Logi Mouse', type='Mouse', place='Black Table', warranty=2022},
 {name='Apple Mouse', type='Mouse', place='White Table', warranty=2022},
 {name='Lenovo Mouse', type='Mouse', place='Black Drawer', warranty=2022},
 {name='BlackBeast', type='Computer', place='White Table', warranty=2020},
]

**Assignment 1: To search the product by place**
  I have written a method **displayProductByPlace**, which prints the product according to the provided place as argument.
  
   public static void displayProductByPlace(ProductService service){
        System.out.println("A Particular product By Place");
        Product p = service.getProductByPlace("Black Drawer");
        if(p == null){
            System.out.println("No data found");
        }else{
            System.out.println(p);
        }
    }
  
  In this method I am calling the product service where I am managing data related to products and their methods.
  I have declared a method **getProductByPlace** where we are using stream API to find out the required object with given place.
  If there is no match found, I am returning NULL value and printing "No data found".
  
     public Product getProductByPlace(String place){
        return products.stream()
                .filter(p -> (p.getPlace().equals(place)))
                .findFirst()
                .orElse(null);
    }
    
   For Example : If I am paasing the place as 'Black Drawer', above method will return {name='Type C', type='Cable', place='Black Drawer', warranty=2024} as output.
   
   **Assignment 2: Out of warranty products**
   To check out of warranty products I have wirtten method as **displayOutOfWarrantyProduct**, which prints the products List of Out of warranty.
   I am using the current year as 2023 and passing it to getProductByPlace where I am using stream API to find out the required objects without of warranty.
   I am returning the List from getProductByPlace, so I am using the collect(Collectors.toList()) to convert stream into list.
   
    public static void displayOutOfWarrantyProduct(ProductService service){
        System.out.println("Out of warranty products");
        int currentYear = 2023;
        List<Product> productList = new ArrayList<>();
        //Assignment 3 : Using stream
        List<Product> listP = service.getOutOfWarrantyProduct(currentYear);
        if(listP.size() > 0)
            System.out.println(listP);
        else
            System.out.println("No data found");
     }
     
   **Assignment 3 : Using stream API**
     public List<Product> getOutOfWarrantyProduct(int currentYear) {
      
            return products.stream()
                    .filter(p -> (p.getWarranty() < currentYear))
                    .collect(Collectors.toList());
    }
    

