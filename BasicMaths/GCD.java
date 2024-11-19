package BasicMaths;

import java.util.Scanner;

// Euclidean Algorithm
public class GCD {
    public static int gcd(int a,int b) {
        // Write your code here
        while (a > 0 && b > 0) {
            if (a > b) a = a % b;
            else b = b % a;

        }
        if (a == 0) {

            return b;
        } else {
            return a;
        }
    }

public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);
    int n1 = scan.nextInt();
    int n2 = scan.nextInt();
    int gcd = gcd(n1,n2);
    System.out.println(gcd);
}
}
