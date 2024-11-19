//brute
// Time Complexity: O(N2), 
// Space Complexity: O(1) 


// function once(array) {
//     for (let i = 0; i < array.length; i++) {
//         let num = array[i];
//         let count = 0;
//         for (let j = 0; j < array.length; j++) {
//             if (array[j] == num) {
//                 count ++
//             }
//         }
//         if (count == 1) {
//             return num;
//         }
//     }
// }
// console.log(once([1,1,2,3,3,4,4]));






// Time Complexity: O(N)+O(N)+O(N), 
// Space Complexity: O(maxElement+1) 
// function onceHash(array) {

//     let maxVal = Math.max(...array);

//     let hash = new Array(maxVal + 1).fill(0);
   
//     for (let i = 0; i < array.length; i++) {
//         hash[array[i]]++;  
//     }
    
//     for (let i = 0; i < array.length; i++) {
//         if(hash[array[i]] == 1) {
//             return array[i];
//         }
//     }

// }
// console.log(onceHash([1,1,2,3,3,4,4]));







// time complexity will be O(N) + O(M).
// Space Complexity: O(M) 
function getSingleElement(arr) {
    // Size of the array:
    const n = arr.length;

    // Declare the hashmap.
    // And hash the given array:
    const hashmap = new Map();
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }

    // Find the single element and return the answer:
    for (const [num, count] of hashmap) {
        if (count === 1) {
            return num;
        }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
}

function main() {
    const arr = [4, 1, 2, 1, 2];
    const ans = getSingleElement(arr);
    console.log("The single element is:", ans);
}

main();




// optimal using xor


// Time Complexity: O(N), 
// Space Complexity: O(1) 
function getSingleElement(arr) {
    // XOR all the elements:
    let xorr = 0;
    for (let i = 0; i < arr.length; i++) {
        xorr = xorr ^ arr[i];
    }
    return xorr;
}

function main() {
    let arr = [4,4,2, 5,1,1,2];
    let ans = getSingleElement(arr);
    console.log("The single element is:", ans);
}

main();





