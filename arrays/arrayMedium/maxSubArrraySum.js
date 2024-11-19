// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.
  



// Brute Force Approach
// Time Complexity: O(N3), 
// Space Complexity: O(1) 
// function maxSubarraySum(arr, n) {
//     let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
//         console.log(maxi)
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             // subarray = arr[i.....j]
//             let sum = 0;

//             //add all the elements of subarray:
//             for (let k = i; k <= j; k++) {
//                 sum += arr[k];
//             }

//             maxi = Math.max(maxi, sum);
//         }
//     }

//     return maxi;
// }

// const arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
// const n = arr.length;
// const maxSum = maxSubarraySum(arr, n);
// console.log(`The maximum subarray sum is: ${maxSum}`);


















// Time Complexity: O(N2), 
// Space Complexity: O(1
// function maxSubarraySum(arr, n) {
//     let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

//     for (let i = 0; i < n; i++) {
//         let sum = 0;
//         for (let j = i; j < n; j++) {
//             // current subarray = arr[i.....j]

//             //add the current element arr[j]
//             // to the sum i.e. sum of arr[i...j-1]
//             sum += arr[j];

//             maxi = Math.max(maxi, sum); // getting the maximum
//         }
//     }

//     return maxi;
// }

// let arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
// let n = arr.length;
// let maxSum = maxSubarraySum(arr, n);
// console.log("The maximum subarray sum is: " + maxSum);




















// Kadane's Algorithm |
// Time Complexity: O(N), where N = size of the array.
// Reason: We are using a single loop running N times.

// Space Complexity: O(1) as we are not using any extra space.

// carry a sub array sum as lonmg as gives posive sum

// function maxSubarraySum(arr, n) {
//     let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
//     let sum = 0;

//     for (let i = 0; i < n; i++) {
//         sum += arr[i];

//         if (sum > maxi) {
//             maxi = sum;
//         }

//         // If sum < 0: discard the sum calculated
//         if (sum < 0) {
//             sum = 0;
//         }
//     }

//     // To consider the sum of the empty subarray
//     // uncomment the following check:

//     //if (maxi < 0) maxi = 0;

//     return maxi;
// }

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const n = arr.length;
// const maxSum = maxSubarraySum(arr, n);
// console.log("The maximum subarray sum is: " + maxSum);









function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
    let sum = 0;

    let start = 0;
    let ansStart = -1, ansEnd = -1;
    for (let i = 0; i < n; i++) {

        if (sum == 0) start = i; // starting index

        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;

            ansStart = start;
            ansEnd = i;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    //printing the subarray:
    console.log("The subarray is: [");
    for (let i = ansStart; i <= ansEnd; i++) {
        console.log(arr[i] + " ");
    }
    console.log("]n");

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length;
let maxSum = maxSubarraySum(arr, n);
console.log("The maximum subarray sum is: " + maxSum);


