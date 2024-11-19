package BasicMaths;
import java.util.Scanner;




public class Palindrome {

        public static void main(String[] args) {
            Scanner scan = new Scanner(System.in);

            // Read integer input from user
            int n = scan.nextInt();
            int orgnum = n; // Store original number

            int revno = 0;

            // Reverse the digits of the number
            while (n > 0) {
                int lastdig = n % 10; // Extract the last digit
                n = n / 10; // Remove the last digit
                revno = (revno * 10) + lastdig; // Build the reversed number
            }

            // Check if the original number is equal to the reversed number
            if (orgnum == revno) {
                System.out.println(true); // Print true if palindrome
            } else {
                System.out.println(false); // Print false if not palindrome
            }

            scan.close(); // Close the Scanner
        }
    }
