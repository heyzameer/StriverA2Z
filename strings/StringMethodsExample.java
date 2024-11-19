package strings;

public class StringMethodsExample {
    public static void main(String[] args) {
        // using literal
        String str = "  Hello World! Welcome to Java Programming.  ";

        // using boxing int to String
        int number = 123;
        String str1 = String.valueOf(number);
        System.out.println(str); // "123"

        //using new keyword
        String str2 = new String("Hello");


        // Length of the string
        System.out.println("Length: " + str.length());

        // Character at a specific index
        System.out.println("Character at index 6: " + str.charAt(6));

        // Substring
        System.out.println("Substring (0, 5): " + str.substring(0, 5));

        // Check if the string contains a substring
        System.out.println("Contains 'World': " + str.contains("World"));

        // String comparison
        System.out.println("Equals 'hello': " + str.equals("hello"));
        System.out.println("EqualsIgnoreCase 'hello': " + str.equalsIgnoreCase("hello"));

        // Index of a character
        System.out.println("Index of 'W': " + str.indexOf('W'));
        System.out.println("Last Index of 'o': " + str.lastIndexOf('o'));

        // Convert to lower case
        System.out.println("Lower Case: " + str.toLowerCase());

        // Convert to upper case
        System.out.println("Upper Case: " + str.toUpperCase());

        // Trim whitespace
        System.out.println("Trimmed: '" + str.trim() + "'");

        // Replace characters
        System.out.println("Replace 'Hello' with 'Hi': " + str.replace("Hello", "Hi"));
    }
}

