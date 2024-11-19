// // 0(n) +0(x)+O(n-x) === O(2n)
// // O(n)
// function moveZerosToEnd(arr) {
//     let temp = [];  // Temporary array to store non-zero elements
//     let zeroCount = 0;  // To count the number of zeros

//     // Loop through the array and store non-zero elements in temp
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             temp.push(arr[i]);
//         } else {
//             // zeroCount++;
//         }
//     }

//     // Transfer non-zero elements back to the original array
//     for (let i = 0; i < temp.length; i++) {
//         arr[i] = temp[i];
//     }

//     // Fill the remaining positions with zeros
//     for (let i = temp.length; i < arr.length; i++) {
//         arr[i] = 0;
//     }

//     return arr;
// }

// console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]





// Time Complexity: O(n)
// Space Complexity: O(1)
function moveZerosToEnd(arr) {
    let index = 0; // Pointer to place the next non-zero element

    // Traverse the array and move non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index++] = arr[i];
        }
    }

    // Fill the remaining positions with zeros
    while (index < arr.length) {
        arr[index++] = 0;
    }

    return arr;
}

console.log(moveZerosToEnd([1,0,0,0,0,1, 0, 3, 12,0])); // Output: [1, 3, 12, 0, 0]
