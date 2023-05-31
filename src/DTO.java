import java.util.Objects;

//class Alien {
//    private int age;
//    private String name;
//
//    public int getAge() {
//        return age;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public Alien(int age, String name) {
//        this.age = age;
//        this.name = name;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Alien alien = (Alien) o;
//        return age == alien.age && Objects.equals(name, alien.name);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(age, name);
//    }
//
//    @Override
//    public String toString() {
//        return "Alien{" +
//                "age=" + age +
//                ", name='" + name + '\'' +
//                '}';
//    }
//}

//======================================
//New implementation of Alien class

//these two lines of code is equil to above class
record Alien(int age, String name){};
//Data Transfer Object
public class DTO {
    public static void main(String[] args) {
        Alien obj1 = new Alien(33,"navin");
        System.out.println(obj1);
    }
}

//Assignment
// var
// Record Class
// Text Block

// Implement these concept in the spring mvc

// UI : Admin -> CRUD with Questions (id, question, opt1..,opt4, ans, tech),
//               create quiz (tech) and generate 5 question
//               verify the Answer
// User -> Play the quiz, show the result 