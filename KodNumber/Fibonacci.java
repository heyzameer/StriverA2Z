package KodNumber;

import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int result = fib(n);
        System.out.println(n+"th fibonacci number is "+ result);
//        printFibonacciTillN(n);

    }
    public static int fib(int n) {
        int a = 0, b = 1, c=0;

        // Handle base cases
        if (n <= 0) {
            return 0; // Assuming 0 is a valid Fibonacci number for n <= 0
        }
        if (n == 1) {
            return a;
        }
        if (n == 2) {
            return b;
        }

        // Compute Fibonacci numbers using iteration
//        for (int i = 2; i < n; i++) {
//            c = a + b;
//            a = b;
//            b = c;
//        }
//        return b;
            while(c<n){
                c = a + b;
                a = b;
                b = c;
        }
            return b;
    }

    public static void printFibonacciTillN(int n) {
        int a = 0, b = 1, c;

        // Print the first Fibonacci number
        if (n >= a) {
            System.out.print(a + " ");
        }

        // Print the second Fibonacci number if n is greater than 1
        if (n >= b) {
            System.out.print(b + " ");
        }

        // Compute and print Fibonacci numbers up to n
        while (true) {
            c = a + b;
            if (c >=n) {
                break;
            }
            System.out.print(c + " ");
            a = b;
            b = c;
        }

        System.out.println(); // Move to the next line after printing all numbers
    }

}
