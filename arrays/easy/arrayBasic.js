// *************************************************************************

// ere are different ways to create an array in JavaScript:

// const fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// const fruits = new Array("Apple", "Banana", "Cherry");
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]


// const fruits = Array.of("Apple", "Banana", "Cherry");
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// const fruits = new Array(3).fill("Apple");
// console.log(fruits); // Output: ["Apple", "Apple", "Apple"]


// const fruits = new Array(3)
// console.log(fruits);

// const fruits = new Array(3).fill(null)
// console.log(fruits);
// console.log(fruits.length);


// ARRAY FUNCTIONAS


// const numbers = [1,2,3,4,5,6];

// numbers.map((item,index,array) => {
//     if(index % 2 == 0){
//         return item + 3;
//     }else return item
// })



// numbers.filter((item,ind,array) =>{
// return item % 2 == 0;
// })


//  numbers.reduce((acc,item,ind,array) =>{
// return acc + item;
// },0)

// true or false
// let numbers = [1, 2, 3];
//  let newNum = numbers.some((item,index,array) => {
//     return item >= 3; // any ele greater then 3
// })
// console.log(newNum)

// const numbers = [1, 2, 3];
// const newNu =  numbers.every((item,index,array) => {
//     return item < 100; // ytrue
// })
// console.log(newNu)

// const numbers = [1, 2, 3];
// let newNum = numbers.find((item,index,array) => {
//     return item > 1; // first satisfied values
// })
// console.log(newNum)


// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
// const arr = [1, 2, 3, 4, 5];
// const index = arr.findIndex(el => el === 3); // 2
// if (index !== -1) {
//     console.log("Element found at index:", index);
// } else {
//     console.log("Element not found");
// }



// // spead and rest
// console.log(newNum)

// const array1 = [2,34,65,675];
// const array2 = [5,65,34,564];

// mergedArray = [...array1,...array2];
// console.log(mergedArray);



// function sum(x, y, z) {
//     return x + y + z;
//   }
  
//   const number = [1, 2, 3];
//   console.log(sum(...number)); // Output: 6
  


// more methods in aray


// concat
// const num1 = [1,2];
// const num2 = [3,4];

// let newNum = num1.concat(num2);
// console.log(newNum);



// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]



// // sile wanty some part of the array
// const num1 = [1,2,4,6,4];
// const num2 = [3,4];
// // doent modify orignal
// let newNum = num1.slice(1,2);//(start endingindex )
// console.log(newNum);



// //spice
// array.splice(index, 0, element);
// index: The position where the new element should be added.
// 0: The number of elements to remove (in this case, none).
// element: The element you want to add to the array.

const num1 = [1,2,4,6,4];
const num2 = [1,2,4,6,4];
// // it remores in place 

num1.splice(1,3)
console.log(num1);
// if we return it gives deleteed ele
let newNum = num2.splice(1,3)
console.log(newNum);




// const num1 = [1,2,4,6,4];
// const num2 = [1,2,4,6,4];
// // it remores in place 
// // start from 1 fill  3
// num1.fill(1,3)
// console.log(num1);
// // if we return it gives deleteed ele
// let newNum = num2.fill(0)
// console.log(newNum);



//FLAT

// const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
// const flatArray = nestedArray.flat(2);
// console.log(flatArray); // Output: [1, 2, 3, 4, 5, [6, 7]]







//REVERSE ARRAY
// const num1 = [1,2,4,6,4];
// num1.reverse();
// console.log(num1);

// sort
// const num1 = [144,2,443,6,4.0];
// num1.sort((a,b) => a - b);
// console.log(num1);





let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10
console.log(numbers);