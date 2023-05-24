

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println("====================================");
        Class<?> d = Class.forName("Apple");
        Apple apple1 = (Apple) d.newInstance();
        Apple apple2 = (Apple) d.newInstance();

        Method ms1 = d.getDeclaredMethod("repair", null);
        ms1.setAccessible(true);
        ms1.invoke(apple1);

        System.out.println("====================================");

        Method ms2 = d.getDeclaredMethod("repair", int.class);
        ms2.setAccessible(true);
        ms2.invoke(apple2, 30);

        System.out.println("====================================");

        Class<?>[] interfs = d.getInterfaces();
        for (Class interf : interfs) {
            System.out.println(interf);
        }

        System.out.println("====================================");


        Class c = Class.forName("Product");
        System.out.println(c.getName());


        Constructor[] constructors = c.getConstructors();
        for (Constructor constructor : constructors) {
            System.out.println(constructor);
        }
        System.out.println("====================================");

        Field fields[] = c.getDeclaredFields();
        for (Field field : fields) {
            System.out.println(field);
        }
        System.out.println("====================================");

        Method[] methods = c.getMethods();
        for (Method method : methods) {
            System.out.println(method);
        }
        System.out.println("====================================");

        Class.forName("A");
        A.show();
    }
}
