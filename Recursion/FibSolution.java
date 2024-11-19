package Recursion;

import java.util.Scanner;

public class FibSolution {
    int a = 0, b = 1, c;

    int fib(int n) {
        if (n < 2) return n;
        a = 0; // Reset a
        b = 1; // Reset b
        return fibnoci(n - 1); // Start with n-1 as the first two numbers are already set
    }

    public int fibnoci(int n) {
        if (n > 0) {
            c = a + b;
            a = b;
            b = c;
            fibnoci(n - 1);
        }
        return c;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter the value of n: ");
        int n = scan.nextInt();
        scan.close();

        FibSolution sol = new FibSolution();
        int result = sol.fib(n);
        System.out.println("F(" + n + ") = " + result);
    }
}
