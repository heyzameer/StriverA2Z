package KodNumber;

import java.sql.SQLOutput;
import java.util.Scanner;

public class Weather {
    public static void main(String[] args) {
        System.out.println("enter month number");
        Scanner scan = new Scanner(System.in);
        int month=scan.nextInt();
        switch(month){
            case 12:System.out.println("dec corresponds to winters");
                break;
            case 1:System.out.println("jan corresponds towinters");
                break;
            case 2:System.out.println("feb corresponds to winters");
                break;

            case 3:System.out.println(" march corresponds toSpring");
                break;
            case 4:System.out.println("april corresponds to Spring");
                break;
            case 5:
                System.out.println(" may corresponds to Spring");
                break;
            case 6:System.out.println("june corresponds to Summer");
                break;
            case 7:System.out.println("july corresponds to Summer");
                break;
            case 8:
                System.out.println("aug corresponds to Summer");
                break;
            case 9: System.out.println("sep  corresponds to fall");
                break;
            case 10: System.out.println("oct  corresponds to fall");
                break;
            case 11:
                System.out.println("nov  corresponds to Fall");
                break;
            default:
                System.out.println("invalid month");
                break;
        }
    }
}
