class A extends Object
{
    public A()
    {
        System.out.println("Object created");
    }


}

public class Main {
    public static void main(String[] args) {
        A obj = new A();
        obj = null;


        System.gc();
    }
}
