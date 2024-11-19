

// Ques 3 -
// Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once. The relative order of the elements should be kept
// the same. Then return the number of unique elements
// in nums.
// Input: [1,1,2]
// Input:
// Output: 2,
// ----->>>>> Output: 5,






// o(n^2) tc
// o(1) sc
// function removeDup(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//           if(arr[i] === arr[j])  {
//             arr.splice(j,1)
//             j--
//           } 
//         }
//     }
//     return arr.length
// }
// console.log(removeDup([1,2,3,3,1]))





//2nd
// console.log(Array.from(new Set([1,1,2,3,3,3,3,44,44,44,])));






//3rd
// TC: 
// 𝑂(𝑛)due to iterating over the array and adding elements to the set.
// SC:O(n) for storing unique elements in the set.

// function removeDup(arr) {
//     let uniqueElements = new Set(arr); // Using Set to automatically remove duplicates
//     console.log(uniqueElements);
//     return uniqueElements.size; // set has size property

// }

// console.log(removeDup([1, 2, 3, 3, 1])); // Output: 3





// 4Th
// o(n^2)
// o(1)
// function removeDup(array){
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]===array[i+1]){
//             array.splice(i+1,1)
//             i--
//         }
        
//     }
//     console.log(array);
//     return array.length
// }
// console.log(removeDup([1,1,1,2,3,4,1,2,3])) // not work properly






// optimizewd without js function
// O(n)
// O(1)
function findDupOpt(array){
    if(array.length === 0) return 0
    let i = 0;

    for (let j = 1; j < array.length; j++) {
        if(array[i] != array[j]){
            i++; // till here it gives the count
            array[i] = array[j];
            console.log(array)
        }
    }
    return i + 1;
}

console.log(findDupOpt([1,1,2,2,3,3]))





// O(n)
// // // O(1)
// function findDupOpt(array) {
//     if (array.length === 0) return 0; // If the array is empty, return 0

//     let uniqueCount = 1; // Start with 1 because the first element is always unique

//     for (let j = 1; j < array.length; j++) {
//         if (array[j] !== array[j - 1]) { // Compare current element with the previous one
//             uniqueCount++; // Increment count for unique elements
//         }
//     }
    
//     return uniqueCount; // Return the count of unique elements
// }

// console.log(findDupOpt([1, 1,1,1,1,1, 3, 3, 4])); // Output: 3
       