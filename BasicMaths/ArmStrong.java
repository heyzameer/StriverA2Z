package BasicMaths;
import java.util.Scanner;
public class ArmStrong {


        public static void main(String[] args) {
            Scanner scan = new Scanner(System.in);
            int n = scan.nextInt();
            int orgnum = n;
            int sum = 0; // Initialize sum variable
            int NoOfdigit = String.valueOf(n).length();

            while (n > 0) {
                int digit = n % 10;
                sum = sum + (int)Math.pow(digit, NoOfdigit); // Casting to int because Math.pow returns double
                n = n / 10;
            }

            System.out.println(orgnum == sum ? true : false);
        }
    }

