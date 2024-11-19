package BasicMaths;

public class Countdigit {
        public static int countDivisibleDigits(int n) {
            // Convert the number to a string
//            Input: n = 12
//            Output: 2
//            Explanation: 1, 2 when both divide 12 leaves remainder 0.

//          String numberString = String.valueOf(n);
            String numberString = Integer.toString(n);
            int count = 0;

            // Iterate over each character in the string
            for (int i = 0; i < numberString.length(); i++) {
                // Get the character at the current position
                char ch = numberString.charAt(i);

                // Convert the character to an integer
                int digit = Character.getNumericValue(ch);

                // Check if the digit is not zero and if it divides n evenly
                if (digit != 0 && n % digit == 0) {
                    count++;
                }
            }

            return count;
        }

    public static int countDigits(int n){
        // Write your code here.

        // int cnt = (int) (Math.log10(n) + 1);
        // return cnt;
        int count = 0;
        int num = n;
        while(num>0){
            num = num / 10;
            count++;
        }
        return count;

    }

        public static void main(String[] args) {
            int n = 12;
            int result = countDivisibleDigits(n);
            System.out.println("Output: " + result);  // Output: 2
            int result1 = countDigits(n);
            System.out.println("Output: " + result);  // Output: 2
        }
    }

//public class CharacterMethodsDemo {
//    public static void main(String[] args) {
//        char ch = 'a';
//
//        System.out.println("Original character: " + ch);
//        System.out.println("Uppercase: " + Character.toUpperCase(ch));
//        System.out.println("Is digit: " + Character.isDigit(ch));
//        System.out.println("Is letter: " + Character.isLetter(ch));
//        System.out.println("Is letter or digit: " + Character.isLetterOrDigit(ch));
//        System.out.println("Is whitespace: " + Character.isWhitespace(ch));
//        System.out.println("Is uppercase: " + Character.isUpperCase(ch));
//        System.out.println("Is lowercase: " + Character.isLowerCase(ch));
//        System.out.println("Numeric value: " + Character.getNumericValue(ch));
//        System.out.println("Is alphabetic: " + Character.isAlphabetic(ch));
//        System.out.println("Is defined: " + Character.isDefined(ch));
//    }
//}

