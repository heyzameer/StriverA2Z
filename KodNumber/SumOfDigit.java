package KodNumber;

import java.util.Scanner;

public class SumOfDigit {

    // Function to count the number of digits in a given number
    public static int sumOfDigit(int number) {
        int sum = 0;
        while (number != 0) {
            int dig = number % 10;// get the last dig
            number /=10;// remove last dig
            sum +=dig;// add last dig to sum
        }
        return sum;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        // If the number is 0, it has one digit
        if (number < 10 && number > 0) {
            System.out.println("The sum is "+number);
        } else {
            // If the number is negative, convert it to positive
            if (number < 0) {
                number = -number;
            }
            int digitSum = sumOfDigit(number);

            System.out.println("The sum of number " + number + " is " + digitSum);
        }

        scanner.close();
    }
}

