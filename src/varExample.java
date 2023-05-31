import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class varExample {
    public static void main(String[] args) throws IOException {
        InputStreamReader reader = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(reader);
        ArrayList<String> names = new ArrayList<>();

        names.add(br.readLine());
        names.add(br.readLine());

        System.out.println(names);

        System.out.println("=========================================");

        var reader2 = new InputStreamReader(System.in);
        var br2 = new BufferedReader(reader2);
        var names2 = new ArrayList<>();

        names2.add(br2.readLine());
        names2.add(br2.readLine());

        System.out.println(names2);
    }
}
