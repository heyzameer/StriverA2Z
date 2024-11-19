// Two Sum : Check if a pair with given sum exists in Array
// Problem Statement: Given an array of integers arr[] and an integer target.

// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.


//brute force for both varient
// time complexity of O(n^2)
// function findPair(array,k){
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if(j!=i && array[i] + array[j] === k){


//                 console.log(i,j);
//                 return;

//                 // or
//                 // return true;


//             }
        
//         }        
//     }
//     return false;
// }
// findPair([5,2,3,4,5,6],10);



// good for var 1
// better
// hashing  ele ind
// O(n) time complexity and O(n) space complexity.
function findPair(array, k) {
    const numToIndex = new Map();

    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        const REM = k - num;

        if (numToIndex.has(REM)) {
            // Found the pair
            console.log(numToIndex.get(REM), i);
            return true;
        }
        
        // Store the index of the current number
        numToIndex.set(num, i);
    }

    return false;
}

// findPair([5, 2, 3, 4, 5, 6], 10);














//TWO PINTERS
// O(n) time complexity and O(1)
// O(n log n) time complexity (due to sorting) and O(1) space complexity.function 



function findPairTwoPointers(array, k) {
    // Sort the array
    // array.sort((a, b) => a - b);

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const sum = array[left] + array[right];

        if (sum === k) {
            console.log(left, right);
            return true;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

findPairTwoPointers([5, 2, 3, 4, 5, 6], 10);
