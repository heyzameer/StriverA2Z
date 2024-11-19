package KodNumber;

import java.util.Scanner;

public class CountDigits {

    // Function to count the number of digits in a given number
    public static int countDigits(int number) {
        int count = 0;
        while (number != 0) {
            number /= 10;
            count++;
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        // If the number is 0, it has one digit
        if (number < 10 && number > 0) {
            System.out.println("The number "+number+" has 1 digit.");
        } else {
            // If the number is negative, convert it to positive
            if (number < 0) {
                number = -number;
            }
            int digitCount = countDigits(number);

                System.out.println("The number " + number + " has " + digitCount + " digits.");
        }

        scanner.close();
    }
}

