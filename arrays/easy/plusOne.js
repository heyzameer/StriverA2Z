function incrementDigits(digits) {
    // Convert array to a number
    
    let number = BigInt(digits.join(''));
    
    // Increment the number
    number++;

    console.log(number.toString())
    
    // Convert the number back to an array of digits
    return number.toString().split('').map(Number);
}

// Example usage
const digits = [1, 2, 3];
const result = incrementDigits(digits);
console.log(result);  // Output: [1, 2, 4]




function PLUSONE(digits) {
    let n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits [i]++;
            return digits;
        }
    digits[i] = 0;
    }

    let newArr = [n + 1];

    newArr[0] = 1;

    return newArr;

}

const digits1 = [1, 1, 9];
const result1 = PLUSONE(digits1);
console.log(result1);  // Output: [1, 2, 4]
