package KodNumber;

import java.util.Scanner;

public class CountEvenOddDigits {

    // Function to count the number of even digits in a given number
    public static int countEvenDigits(int number) {
        int count = 0;
        // Convert the number to positive if it's negative
        number = Math.abs(number);

        while (number != 0) {
            int digit = number % 10; // Extract the last digit
            if (digit % 2 == 0) {
                count++; // Increment the count if the digit is even
            }
            number /= 10; // Remove the last digit from the number
        }
        return count;
    }

    // Function to count the number of odd digits in a given number
    public static int countOddDigits(int number) {
        int count = 0;
        // Convert the number to positive if it's negative
        number = Math.abs(number);

        while (number != 0) {
            int digit = number % 10; // Extract the last digit
            if (digit % 2 != 0) {
                count++; // Increment the count if the digit is odd
            }
            number /= 10; // Remove the last digit from the number
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        int evenCount = countEvenDigits(number);
        int oddCount = countOddDigits(number);

        System.out.println("The number of even digits: " + evenCount);
        System.out.println("The number of odd digits: " + oddCount);

        scanner.close();
    }
}

