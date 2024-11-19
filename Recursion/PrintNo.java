package Recursion;

import java.util.Scanner;

public class PrintNo {


    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int N = scan.nextInt();
        int count = 1;

//        printNos(1,N);
//        printNosOptimized(N);
//        printGfg(N);
//        printNosReverse(N);

//        int sum = 0;
//        SumofNparametarized(N,sum);

//        System.out.println(SumOfNFunctional(N));

//        System.out.println("factorial of "+N+" is"+Factorial(N) );

//        Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.
//            System.out.println("factorial of "+N+" is"+sumOfSeries(N) );

//        509. Fibonacci Number
//        System.out.println("fib number at  "+N+" is"+fib(N) );







    }




    public static void printNos(int count,int N)
    {

            //Your code here
            if(count > N)
                return;
            System.out.print(count+" ");
            count ++;
            printNos(count,N);

    }
    public static void printNosOptimized(int N) {
        if(N>0){
            printNosOptimized(N-1);
            System.out.print(N+" ");
        }
    }

    public static void printGfg(int N) {
        // code here
        if(N>0){
            N=N-1;
            printGfg(N);
            System.out.print("GFG ");
        }
    }

    public static void printNosReverse(int N) {
        // code here
        System.out.print(N+" ");
        N=N-1;
        if(N>0)
            printNosReverse(N);

    }
    public static void SumofNparametarized(int N,int sum){

        if(N< 1){
            System.out.println(sum);
            return;
        }
        SumofNparametarized(N-1 , sum+N);

    }

    public static int  SumOfNFunctional(int N){
        if (N==0){
            return 0;
        }
        return N + SumOfNFunctional(N-1);
    }

    public static int  Factorial(int N){
        if (N==0){
            return 1;
        }
        return N * Factorial(N-1);
    }

//    Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.
        public static long sumOfSeries(long n) {// code here
                if(n==0){
                     return 0;
                }
             return n*n*n + sumOfSeries(n-1);
    }

    public static int fib(int n) {
        if(n<=1){
            return n;
        }
        int Lastdigit = fib(n-1);
        int SecLastdigit = fib(n-2);
        return Lastdigit + SecLastdigit;
    }



    }



