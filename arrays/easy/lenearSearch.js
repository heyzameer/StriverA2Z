// for both
// Best Case: O(1) - The element is the first element in the array.
// Worst Case: O(n) - The element is the last element or not in the array, requiring the traversal of 

// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// const arr = [1, 2, 3, 4, 5];
// const index = arr.indexOf(3); // 2
// if (index !== -1) {
//     console.log("Element found at index:", index);
// } else {
//     console.log("Element not found");
// }


function lenearSerch(array,num){
for (let index = 0; index < array.length; index++) {
       if(array[index] === num){
        return index;
       } 
}
return -1;
}
console.log(lenearSerch([1,2,3,4,5,6],0))