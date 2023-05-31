public class switchExample {
    public static void main(String[] args) {
        String daya = "Sat";
        String time = "";

        switch (daya) {
            case "Sat", "Sun" -> time = "6am";
            case "Wed" -> time = "7am";
            default -> time = "8am";
        }
        System.out.println(time);

        String Jetha = "Mon";

        time = switch (Jetha) {
            case "Sat", "Sun" -> "6am";
            case "Wed" -> "7am";
            default -> "8am";
        };
        System.out.println(time);

        String Tapu = "Wed";

        time = switch (Tapu) {
            case "Sat", "Sun" : yield  "6am";
            case "Wed" : yield "7am";
            default : yield "8am";
        };
        System.out.println(time);
    }
}
