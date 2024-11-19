package KodNumber;

import java.util.Scanner;

public class SmallestDigit {

    // Function to find the smallest digit in a given number
    public static int findSmallestDigit(int number) {
        // Convert the number to positive if it's negative
        number = Math.abs(number);

        // Initialize the smallest digit to 9 (the highest possible digit)
        int smallestDigit = 9;

        // Handle the case when the number is 0
        if (number == 0) {
            return 0;
        }

        // Iterate through each digit of the number
        while (number != 0) {
            int digit = number % 10; // Extract the last digit
            if (digit < smallestDigit) {
                smallestDigit = digit; // Update the smallest digit
            }
            number /= 10; // Remove the last digit from the number
        }
        return smallestDigit;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        int smallestDigit = findSmallestDigit(number);
        System.out.println("The smallest digit is: " + smallestDigit);

        scanner.close();
    }
}

