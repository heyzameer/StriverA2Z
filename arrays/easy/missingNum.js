//O(N)
// O(1)
//only for in sequence
// function findMisNum(array, n) {
//     let j = 1;  // Start from 1 as numbers range from 1 to n
//     let i = 0;  // Start index for the array
    
//     while (i < array.length) {  // Loop should run for the length of the array
//         if (j !== array[i]) {
//             return j;  // Return the missing number if current j is not equal to array[i]
//         } else {
//             j++;
//             i++;
//         }
//     }
    
//     // If loop completes, then the missing number is n
//     return j;
// }

// console.log(findMisNum([1, 2, 3, 4], 6));  // Output: 5









// //O(N^2)
// // O(1)
 function missingNumber(a, N) {
        // Outer loop that runs from 1 to N:
        for (let i = 1; i <= N; i++) {
          // flag variable to check if an element exists
          let flag = 0;
      
          // Search the element using linear search:
          for (let j = 0; j < N - 1; j++) {
            if (a[j] === i) {
              // i is present in the array:
              flag = 1;
              break;
            }
          }
      
          // check if the element is missing (i.e., flag === 0):
          if (flag === 0) {
            return i;
          }
        }
      
        // The following line will never execute.
        // It is just to avoid warnings.
        return -1;
      }


console.log(missingNumber([1, 3, 2, 4], 5));














// O(N) + O(N) ~ O(2*N), 
// Space Complexity: O(N)

function missingNumber(a, N) {
  const hash = new Array(N + 1).fill(0); // hash array

  // storing the frequencies:
  for (let i = 0; i < N - 1; i++) {
    hash[a[i]]++;      //Increment hash[2] by 1.      
  }

  // checking the frequencies for numbers 1 to N:
  for (let i = 1; i <= N; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }

  // The following line will never execute.
  // It is just to avoid warnings.
  return -1;
}
console.log(findNum([2,1],3));
                          




         
                  
   
          
         
// time complexity is 
// Space Complexity: O(1)

function findNum(array,n){

  // let sum = 0;
  //  for(i=0;i<=n;i++){
  //     sum += i;
  //   }

    const sum = (n * (n + 1)) / 2;
  

   let arraySum = 0;
  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }

  return sum - arraySum;

}
console.log(findNum([2,1],3));










// Time Complexity: O(N), where N = size of array+1.
// Reason: Here, we need only 1 loop to calculate the XOR. The loop runs for approx. N times. So, the time complexity is O(N).
function missingNumber(a, N) {
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < N - 1; i++) {
    xor2 = xor2 ^ a[i]; // XOR of array elements
    xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
  }
  xor1 = xor1 ^ N; // XOR up to [1...N]

  return xor1 ^ xor2; // the missing number
}

function main() {
  const N = 5;
  const a = [1, 2, 4, 5];
  const ans = missingNumber(a, N);
  console.log("The missing number is:", ans);
}
main();
