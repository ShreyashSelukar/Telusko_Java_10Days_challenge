class Vehicle{
    public void go(){
        System.out.println("Going");
    }
}
//Person is a Vehicle
class person extends Vehicle{


}

//Person2 has vehicle
class person2 {
    Vehicle car = new Vehicle();

}
class A{

}
class B extends A{}




//================================
//vehicle class can be access by car and bike class only
sealed class VehicleA permits Car, Bike{
    public void go(){
        System.out.println("Going");
    }
}
non-sealed  class Car extends VehicleA{

}
final class Bike extends VehicleA{

}
public class sealed_class {
    public static void main(String[] args) {

    }
}