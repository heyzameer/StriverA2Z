package KodNumber;

import java.util.Scanner;

public class EvenRangeMtoN {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            // Taking inputs for m and n
            System.out.println("Enter the value of m:");
            int m = scanner.nextInt();

            System.out.println("Enter the value of n:");
            int n = scanner.nextInt();

            // Check if m is less than n
            if (m >= n) {
                System.out.println("Invalid input. Make sure m is less than n.");
                return;
            }

            System.out.print("Even numbers between " + m + " and " + n + " are:");

            // Loop through the range from m to n
            for (int i = m; i <= n; i++) {
                // Check if the number is even
                if (i % 2 == 0) {
                    if(i<n-1) {
                        System.out.print(i + ",");
                    }
                    else
                        System.out.print(i+".");
                }
            }
        }
    }

