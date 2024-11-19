// next_permutation : find next lexicographically greater permutation


// Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).








//brute
//genretae all permu in sort

//linear search given array

//next index ans or the first





//optimal

// Optimal Approach to Find the Next Permutation

// Find the break-point, i: Break-point means the first index i from the back of the given array where arr[i] becomes smaller than arr[i+1].



// For example, if the given array is {2,1,5,4,3,0,0}, the break-point will be index 1(0-based indexing). Here from the back of the array, index 1 is the first index where arr[1] i.e. 1 is smaller than arr[i+1] i.e. 5.


// To find the break-point, using a loop we will traverse the array backward and store the index i where arr[i] is less than the value at index (i+1) i.e. arr[i+1].


// If such a break-point does not exist i.e. if the array is sorted in decreasing order, the given permutation is the last one in the sorted order of all possible permutations. So, the next permutation must be the first i.e. the permutation in increasing order.


// So, in this case, we will reverse the whole array and will return it as our answer.
// If a break-point exists:


// Find the smallest number i.e. > arr[i] and in the right half of index i(i.e. from index i+1 to n-1) and swap it with arr[i].


// Reverse the entire right half(i.e. from index i+1 to n-1) of index i. And finally, return the array.




// Find the longest non-increasing suffix:


// Find the rightmost successor to the pivot


// Swap the pivot with the successor:


// Reverse the suffix:





function nextGreaterPermutation(A) {
    let n = A.length; // size of the array.

    // Step 1: Find the break point:
    let ind = -1; // break point
    for (let i = n - 2; i >= 0; i--) {
        if (A[i] < A[i + 1]) {
            // index i is the break point
            ind = i;
            break;
        }
    }

    // If break point does not exist:
    if (ind == -1) {
        // reverse the whole array:
        A.reverse();
        return A;
    }

    // Step 2: Find the next greater element
    //         and swap it with A[ind]:

    for (let i = n - 1; i > ind; i--) {
        if (A[i] > A[ind]) {
            [A[i], A[ind]] = [A[ind], A[i]]; // swap A[i] and A[ind]
            break;
        }
    }

    // Step 3: reverse the right half:
    A.splice(ind + 1, n - ind - 1, ...A.slice(ind + 1).reverse());

    return A;
}

// let A = [2, 1, 5, 4, 3, 0, 0];
// let ans = nextGreaterPermutation(A);

// console.log("The next permutation is: [" + ans.join(" ") + "]");















// Time Complexity: O(n)
// which is approximately O(3N).
// Space Complexity: O(1)

function permutation(array){

    let ind = -1;
    let n = array.length;

    for (let i = n - 2; i > ind; i--){
        if(array[i] < array[i +1]){
            ind = i;
            break
        }
    }

    if(ind == -1){
        array.reverse();
        return array;
    }

    for (let i = n-1 ; i > ind; i) {
        if(ind < array[i]){
        [array[i],array[ind]] = [array[ind],array[i]]
    }}

    array.splice(ind + 1,n - ind -1, ...array.slice(ind + 1).reverse());

    return array;



}

let B = [9,2, 1, 5, 4, 3, 0, 0];
let ansB = nextGreaterPermutation(B);

console.log("The next permutation is: [" + ansB.join(" ") + "]");
