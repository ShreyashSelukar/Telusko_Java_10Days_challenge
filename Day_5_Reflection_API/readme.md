**Reflection API**

The Reflection APIs in Java are used to access classes, methods, interfaces, fields and constructors at runtime. Generally Java does not allow this, but Reflection API has these special powers. Mostly these are used in frameworks to get information about the package.

I used different methods in the code to understand the working.

1. Class d = **Class.forName("Apple")** : This loads the class dynamically.
2. Using d, we can access all methods(private also) using **getDeclaredMethod("repair", null)** which gives reference to specific method. Here repair method has no argument, so we passed null.
3. To pass argument in the method, use this command d.getDeclaredMethod("repair", int.class).
4. As these methods can be private, so use **setAccessible(true)** to display the result.
5. **invoke()** method is used to invoke a method on an object.
6. **getInterfaces()** returns interfaces implemented by class.
7. **getConstructors()** returns constructors for a class.
8. **getDeclaredFields()** return fields or attributes declared in the class.
9. **getMethods()** returns only public methods in the class.

These Reflection APIs are very useful when classes and their implementations are not known at compile-time. Reflection can be useful in scenarios such as building generic frameworks, implementing serialization/deserialization, and creating dynamic proxies.

Also I learned about static and non-static blocks. Always print instance block first, and then constructor. If constructor is not called, then instance blocks won't be called.
