package KodNumber;

import java.util.Scanner;

public class ReverseNum {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        int result = revDigit(n);
        System.out.println(result);
    }

    public static int revDigit(int n){
        int revNum = 0;
        while(n>0) {

            int lastDigit = n % 10;
            n /= 10;
            revNum = (revNum * 10) + lastDigit;
        }
        return revNum;
    }
}
