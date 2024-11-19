//ques 1 
// largest numbeer in aray

// brute force

// function secodnLargest(arr){
//  const uniqArr = Array.from(new Set(arr));//O(n)
//  // onlly uniq usnig new Set
//   console.log(uniqArr)
//  uniqArr.sort((a,b)=>b - a);

//  if(uniqArr.length >= 2) { // O(nlogn)
//     return uniqArr[1];
//  }else {
//     const err = new Error("arrsy length is 1")
//     return err;
//  }
// }

// console.log(secodnLargest([1,233,234,54,1,54,54,1234]));
// has O(nlogn)



//optimal aproach
// O(n)
// O(1)

// function secondLargestOpt(arr){
//     let largest = Number.NEGATIVE_INFINITY;
//     let secLargest = Number.NEGATIVE_INFINITY;

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > largest){
//             secLargest = largest;
//             largest = arr[i];
//         } else if(arr[i] != largest && arr[i] > secLargest){
//             secLargest = arr[i];
//         }
        
//     }
//     return secLargest;
// }

// console.log(secondLargestOpt([1,3,-42,-43,22,12,34]));




// ques largest element in array

// brute force
// O(nlogn)
// function findLargest(array){
//     let size = array.length;

//     if(size === 0 ) return 0

//     array.sort((a,b) => a - b)

//     return array[size - 1]
//  }
// console.log(findLargest([1,2,3,4,5,6]))


// optimal
// O(n)
// // O(1)
// function findLargest(array){
//     largest = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(largest < array[i]){
//             largest = array[i]
//         }       
//     }
//     return largest;
// }
// console.log(findLargest([1,3,23,4,554,55,2]))





// function checkSorted(array){
  
//     for (let i = 1; i < array.length; i++) {
//         if(array[i] < array[i-1]){
//             return false;
//         }
//     }
//     return true
// }
// console.group(checkSorted([1,2,3,4,5,65]));