package patterns;

import java.util.Scanner;
public class Patterns {
    public static void printstar(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                System.out.print(" * ");

            }
            System.out.println();
        }
    }

    public static void pattern2(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<i+1;j++){
                System.out.print("* ");

            }
            System.out.println();
        }
    }

    public static void pattern3(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<i+1;j++){
                System.out.print(j+1+" ");

            }
            System.out.println();
        }
    }

    public static void pattern4(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<=i;j++){
                System.out.print(i+1+" ");

            }
            System.out.println();
        }
    }

    public static void pattern5(int n){
        for(int i=0;i<n;i++){
           for(int j=0;j<n-i;j++){
               System.out.print("* ");
           }
            System.out.println();
        }
    }

    public static void pattern6(int n){
        for(int i=0;i<n;i++){
           for(int j=0;j<n-i;j++){
               System.out.print((j+1)+" ");
           }
            System.out.println();
        }
    }

    public static void pattern7(int n){
        for(int i=0;i<n;i++){
            //space
           for(int j=0;j<n-i-1;j++)
           {
               System.out.print(" ");
           }
           //stars
            for (int j=0;j<2*i+1;j++){
                System.out.print("*");

            }
            //spaces
            for(int j=0;j<n-i-1;j++)
            {
                System.out.print(" ");
            }

            System.out.println();
        }
    }

    public static void pattern8(int n){
        for(int i=0;i<n;i++){
            //space
            for(int j=0;j<i;j++)
            {
                System.out.print(" ");
            }
//            stars
            for (int j=0;j<2*n-(2*i+1); j++){
                System.out.print("*");

            }
//            //spaces
//            for(int j=0;j<n-i-1;j++)
//            {
//                System.out.print(" ");
//            }

            System.out.println();
        }
    }

    public static void pattern9(int n){
        pattern7(n);
        pattern8(n);
    }

    public static void pattern10(int n){
       for(int i=0;i<=2*n-1;i++){
           int stars=i;
           if(i>n) stars=2*n-i;
           for(int j=1; j<=stars;j++){
               System.out.print("*");
           }
           System.out.println();
       }
    }

    public static void pattern11(int n){
        int start=1;
        for(int i=0; i<n; i++){
            if(i%2==0) start =1;
            else start =0;
            for (int j=0 ;j<=i;j++){
                System.out.print(start);
                start=1-start;
            }
            System.out.println();

        }
    }

    public static void pattern12(int n){

        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                System.out.print(" * ");
            }
            System.out.println();

        }
    }

    public static void pattern13(int n){

        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                System.out.print(" "+i+" ");
            }
            System.out.println();

        }
    }

    public static void pattern14(int n){

        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                System.out.print(" "+j+" ");
            }
            System.out.println();

        }
    }

    public static void pattern15(int n){

        for(int i=0; i<n; i++){
            for(int j=0; j<=i; j++){
                System.out.print("* ");
            }
            System.out.println();

        }
    }

    public static void pattern16(int n){

        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print(" "+j+" ");
            }
            System.out.println();

        }
    }

    public static void pattern17(int n){

        for(int i=1; i<=n; i++){
            for(int j=1; j<=n-i+1; j++){
                System.out.print("*");
            }
            System.out.println();

        }
    }

    public static void pattern18(int n){

        for(int i=1; i<=n; i++){
            for(int j=1; j<=n-i+1; j++){
                System.out.print(""+j);
            }
            System.out.println();

        }
    }

    public static void pattern19(int n){

        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print(" ");
            }
            for(int k=1; k<=n; k++){
                 System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void pattern20(int n){

        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print(" ");
            }
            for(int k=1; k<=i; k++){
                 System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void pattern21(int n){

        for(int i=1; i<n; i++){
            for(int j=1; j<n; j++){
                System.out.print(i+" ");
            }
            for(int k=1; k<=i; k++){
                 System.out.print(k+" ");
            }
            System.out.println();
        }
    }

    public static void pattern22(int n){

        for(int i=1; i<=n; i++){
            for(int j=1; j<=n; j++){
                System.out.print("_");
            }
            for(int k=1; k<=i; k++){
                 System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void pattern23(int n){

        for(int i=1; i<=n; i++){
            for(int j=1; j<=n; j++){
                System.out.print("_");
            }
            for(int k=1; k<=n-i+1; k++){
                 System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void pattern24(int n){
        int star=n;
        for(int i=1; i<=n+n-1; i++){
            for(int j=1; j<=n; j++){
                System.out.print("_");
            }
            if(i<=n) {
                for (int l = 1; l <= i; l++) {
                    System.out.print("*");
                }
            }
            else {

                for (int k = 1; k<star; k++) {
                    System.out.print("*");
                }
                star = star-1;
            }
                System.out.println();
        }
    }

    public static void pattern25(int n){
        int star=n;
        for(int i=1; i<=n; i++){
            for(int j=1; j<=n-i+1; j++){
                System.out.print("_");
            }

            for (int l = 1; l <= i*2-1; l++) {
                System.out.print("*");
                }
            System.out.println();
        }
    }

    public static void pattern26(int n){
        int star=n;
        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print("_");
            }

            for (int l = 1; l <= n*2-(2*i-1); l++) {
                System.out.print("*");
                }
            System.out.println();
        }
    }

    public static void pattern27(int n){
       int space =n;
       int star= 2;
        for(int i=1;i<=n+n-1;i++){
            //space
            if(i<n) {
                for (int j = 1; j <= n - i + 1; j++) {
                    System.out.print("-");
                }
            }
            else {
                for (int j = 1; j <= i-space+1; j++) {
                    System.out.print("-");
                }


            }
            //stars
            if(i<=n){
            for (int j=0;j<2*i-1;j++) {
                System.out.print("*");
                 }
            }
            else{
//                for (int l = 1; l <=n*2-(2*i-n-4); l++) {
//                    System.out.print("*");
                    for (int l = 1; l <=n*2-(2*star-1); l++) {
                    System.out.print("*");
                }
                    star++;



            }
            System.out.println();
        }

    }

    public static void pattern28(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n;j++){
                if(i==1||i==n){
                    System.out.print("*");
                }
                else if (j==1||j==n) {
                    System.out.print("*");
                }
                else{
                    System.out.print("-");
                }
            }
            System.out.println();
        }

    }

    public static void pattern29(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                if(i==1||i==n||i==2){
                    System.out.print("*");
                }
                else if (j==1||j==i) {
                    System.out.print("*");
                }
                else{
                    System.out.print("-");
                }
            }
            System.out.println();
        }

    }

    public static void pattern30(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n-i+1;j++){
                if(i==1||i==n||i==n-1){
                    System.out.print("*");
                }
                else if (j==1||j==n-i+1) {
                    System.out.print("*");
                }
                else{
                    System.out.print("-");
                }
            }
            System.out.println();
        }

    }

    public static void pattern31(int n){
        for(int i=1;i<=n;i++) {
            for (int j = 1; j <= n - i + 1; j++) {
                System.out.print("_");
            }
            for (int j = 1; j <= 2 * i - 1; j++) {
                if (j == 1 || j == 2 * i - 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        for(int i=2;i<=n;i++) {
            for (int j = 1; j <=i; j++) {
                System.out.print("_");
            }
            for (int j = 1; j <=(n*2+1)-2*i; j++) {
                if (j == 1|| j==(n*2+1)-2*i) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    public static void pattern32(int n) {
        int num=1;
        for (int i = 1; i < n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(num+" ");
                num++;
            }
            System.out.println();
        }
    }

    public static void pattern33(int n) {
        int num = 1; // Starting number

        for (int i = 1; i <= n; i++) { // Loop for each row
            for (int j = 1; j <= n; j++) { // Loop for each column in the row
                if (j > 1) {
                    System.out.print("_"); // Print underscore before every number except the first in the row
                }
                if (num < 10) {
                    System.out.print("_"); // Print an additional underscore for single digit numbers
                }
                System.out.print(num); // Print the current number
                num++; // Increment the number for the next iteration
            }
            System.out.println(); // Move
        }
    }

    public static void main(String[] args){
        System.out.println("enter no lines");
        Scanner scanner = new Scanner(System.in);
        int n=scanner.nextInt();
//        printstar(n);
//        pattern2(n);
//        pattern3(n);
//        pattern4(n);
//        pattern5(n);
//        pattern6(n);
//        pattern7(n);
//        pattern8(n);
//        pattern9(n);
//        pattern10(n);
//        pattern11(n);
//        pattern12(n);
//        pattern13(n);
//        pattern14(n);
//        pattern15(n);
//        pattern16(n);
//        pattern17(n);
//        pattern18(n);
//        pattern19(n);
//        pattern20(n);
//        pattern21(n);
//        pattern22(n);
//        pattern23(n);
//        pattern24(n);
//          pattern25(n);
//          pattern26(n);
//          pattern27(n);
//          pattern28(n);
//          pattern29(n);
//          pattern30(n);
//          pattern31(n);
//          pattern32(n);
          pattern33(n);
    }
}
// outer looop for every next line
// inner loop to print connect them both
// print * in inneer loop
//try to find the symmetri