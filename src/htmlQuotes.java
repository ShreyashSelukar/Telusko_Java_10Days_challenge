import java.io.IOException;

public class htmlQuotes {
    public static void main(String[] args) throws IOException {
        String htmlData = "<html>\n" +
                "<body>\n" +
                "</body>\n" +
                "</html>";

        System.out.println(htmlData);
        String newHtmlData = """
                <html>
                    <body>
                    </body>
                </html>                
                """;
        System.out.println(newHtmlData);
    }
}
