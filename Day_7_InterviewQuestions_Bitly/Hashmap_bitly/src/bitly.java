import java.net.URL;
import java.util.*;

class URLService{
    String chars = "abc";
    Random random = new Random();
    Map<String, String> hashMap = new HashMap<>();
    public void fillUrls(String input_url){
        hashMap.put(input_url,generateURL());
    }

    public String generateURL() {
        String shortUrl = "";
        //using string builder as we can not append to string directly
        StringBuilder sb = new StringBuilder();
        int index=0;
        sb.setLength(0);
        for(int i=0; i<6; i++){
            sb.append(chars.charAt(random.nextInt(chars.length())));
        }
        shortUrl =sb.toString();
//        urls.add(shortUrl);
//        System.out.println("generated");
        return shortUrl;
    }
}
public class bitly {
    public static void main(String[] args) {
        String input_url = "https://github.com/ShreyashSelukar/Telusko_Java_10Days_challenge/tree/main/Day_6_Annotations";

        String shortUrl = "";  // telusko.ko/abcdef
        URLService service = new URLService();
        service.hashMap.put("input_url", service.generateURL());

        for(Map.Entry<String, String> entry : service.hashMap.entrySet()) {
            if (entry.getKey() == input_url) {
                System.out.println("===============================");
                System.out.println("already present : "+entry.getValue());
                return;
            }
        }
        service.fillUrls(input_url);

        do{
            shortUrl = service.generateURL();

        }while(service.hashMap.containsKey(shortUrl));

        System.out.println("===============================");
        System.out.println("Generated Url : " +shortUrl);

    }
}


// hashmap
// spring boot mvc
// use original url to generate short url (skip the special characters)