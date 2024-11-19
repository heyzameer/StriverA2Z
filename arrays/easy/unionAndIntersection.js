// spread takes O(N+M)  TC
//Overall Space Complexity: O(n + m)

// array1 = [1,1,2,3,4,4];
// array2 =[4,4,5,6,7,8,8];
// // let array3 = Array.from(new Set([...array1,...array2]));
// //or
// let array3 = [...(new Set([...array1,...array2]))];
// //or
// // let array3 = Array.from(new Set(array1.concat(array2)));
// console.log(array3)





// const array1 = [1, 1, 2, 3, 4, 4];
// const array2 = [4, 4, 5, 6, 7, 8, 8];

// function unionUsingMap(arr1, arr2) {
//     const map = new Map();

//     // Add elements of the first array to the map
//     arr1.forEach(item => {
//         map.set(item, true);
//     });

//     // Add elements of the second array to the map
//     arr2.forEach(item => {
//         map.set(item, true);
//     });

//     // Convert the map keys to an array (the union of both arrays)
//     return Array.from(map.keys());
// }

// const array3 = unionUsingMap(array1, array2);
// console.log(array3); // [1, 2, 3, 4, 5, 6, 7, 8]

















// // Time Complexity: O(m + n)
// // Space Complexity: O(m + n)

// // optimal aproach using two pinters\
// function unionTwoPointers(arr1, arr2) {
//     // Sort the arrays if they are not already sorted
//     // arr1.sort((a, b) => a - b);
//     // arr2.sort((a, b) => a - b);

//     const result = [];
//     let i = 0, j = 0;

//     while (i < arr1.length && j < arr2.length) { 
//          if (arr1[i] < arr2[j]) {
//             if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
//                 result.push(arr1[i]);
//             }
//             i++;
//         } else if (arr1[i] > arr2[j]) {
//             if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
//                 result.push(arr2[j]);
//             }
//             j++;
//         } 
//         else {
//             if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
//                 result.push(arr1[i]);
//             }
//             i++;
//             j++;
//         }
//     }

//     // Add remaining elements from arr1
//     while (i < arr1.length) {
//         if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
//             result.push(arr1[i]);
//         }
//         i++;
//     }

//     // Add remaining elements from arr2
//     while (j < arr2.length) {
//         if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
//             result.push(arr2[j]);
//         }
//         j++;
//     }
//     return result;
// }

// const array1 = [4, 4, 5, 6, 7, 8, 8,9,10,11,12,13];
// const array2 = [1, 1, 2];
// const array3 = unionTwoPointers(array1, array2);
// console.log(array3); // [ 1,  2, 4,  5,  6, 7,  8, 9, 10, 11,12, 13]






// Intersection repiattion aloowed





// potenstial of wrong output
// const array1 = [1, 2, 3, 4,4];
// const array2 = [3, 4,4,4,5, 6];

// const set1 = new Set(array1);
// const intersection = array2.filter(element => set1.has(element));

// console.log(intersection); // [3, 4]

 



// O(n * m)

// function findIntersection(array1,array2){
//     let result= []
//     for (let index = 0; index < array1.length; index++) {
//         for (let j = 0; j < array2.length; j++) {
//            if(array1[index] === array2[j]){
//                 result.push(array1[index]);
//                 array2.splice(j,1);
//                 break;
//            }   
//            if(array2[j] > array1[index]) break 
//         }
//     }
//     return result
// }

// console.log(findIntersection([1,2,3,4],[1,2,4,,4,4,4,4,5]));



// O(n * m)
// O(m2)

// function findIntersection(array1,array2){
//     let result= [];
//     let visiter =new Array(array2.length).fill(0);

//     for (let index = 0; index < array1.length; index++) {
//         for (let j = 0; j < array2.length; j++) {
//            if(array1[index] === array2[j] && visiter[j] === 0){
//                 result.push(array1[index]);
//                 visiter[j] = 1;
//                 break;
//            }   
//            if(array2[j] > array1[index]) break ;
//         }
//     }
//     return result;
// }

// console.log(findIntersection([1,2,3,4],[1,2,4,,4,4,4,4,5]));





// optimized way
// O(n + m)
// O(1)

function intersectionOpt(array1,array2){
    let i = 0;
    let j = 0;
    let result = [];
    while(i < array1.length && j < array2.length) {
        if(array1[i] === array2[j]){
            result.push(array1[i])
            i++;
            j++;
        }
       else if(array1[i] < array2[j]){
        i++;
       } 
       else{
        j++;
       }
    }
    return result;
}

console.log(intersectionOpt([1,2,3,4,4,4,5,6],[1,2,3,3,3,4,4,5,5,6]))