package KodNumber;

import java.util.Scanner;

public class Palindrome {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println(" enter number ");
        int orgNum = scan.nextInt();
        if (isPalindrome(orgNum)) {
            System.out.println(orgNum + " is a palindrome");
        } else
            System.out.println(orgNum + " is not a palindrom");
    }
    public static boolean isPalindrome(int num){
        int orgNum = num;
        int revNum = 0;
        while (num!=0){
            int lastDigit = num % 10;
            num /= 10;
            revNum = ( revNum * 10) + lastDigit;
        }
        if ( revNum == orgNum)
            return true;
        else
            return false;
    }
}
