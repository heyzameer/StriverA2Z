package BasicMaths;
import java.io.*;
import java.util.*;
public class Divisor {//{ Driver Code Starts

    //Initial Template for Java
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        long ans = sumOfDivisors(N);
        System.out.println(ans);
    }

    public static long sumOfDivisors(int N) {
        // code here
        long sum = 0;
        for (int i = 1; i < N; i++) {
            if (N % i == 0) {
                sum += i;
            }
        }
        return sum;
    }
}
