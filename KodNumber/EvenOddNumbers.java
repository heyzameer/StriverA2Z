package KodNumber;

import java.util.Scanner;

public class EvenOddNumbers {

    // Function to print even numbers and their sum up to n
    public static void printEvenNumbersAndSum(int n) {
        int sum = 0;
        System.out.println("Even numbers:");
        for (int i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                sum += i;

                if(i<n-1) {
                    System.out.print(i + ",");
                }
                else
                    System.out.print(i+".");
            }
        }
        System.out.println("\nSum of even numbers: " + sum);
    }

    // Function to print odd numbers and their sum up to n
    public static void printOddNumbersAndSum(int n) {
        int sum = 0;
        System.out.println("Odd numbers:");
        for (int i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                sum += i;

                if(i<n-1) {
                    System.out.print(i + ",");
                }
                else
                    System.out.print(i+".");
            }
        }
        System.out.println("\nSum of odd numbers: " + sum);
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("enter the n value");
        int n = scan.nextInt();

        // Calling the functions
        printEvenNumbersAndSum(n);
        System.out.println(); // Print a blank line for better readability
        printOddNumbersAndSum(n);
    }
}

