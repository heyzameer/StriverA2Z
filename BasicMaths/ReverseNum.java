package BasicMaths;
//7. Reverse Integer

// negative no are not palindrome
import java.util.Scanner;

public class ReverseNum {

    public static void main(String[] args) {
        // Write your code here
        Scanner scan = new Scanner(System.in);
        System.out.println(" enter any number");
        int x = scan.nextInt();
        //converts to positive no
        int n = Math.abs(x);


        int revno = 0;
        while(n > 0){

            int lastdig = n % 10;
//           if (revno > (Integer.MAX_VALUE - lastdig) / 10) {
//                revno = 0;
//                 break;
//            }  // leetcode solution for the long input
                 n = n / 10;
                 revno=(revno * 10)+ lastdig;
        }
        if(x<0){
            revno = -revno;
        }
        System.out.println(revno);

    }
}

