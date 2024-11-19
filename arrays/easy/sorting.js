// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// console.log(array)


// let result = '';
// for (let i = 0; i < array.length; i++) {
//   result += array[i] + (i < array.lenght - 1 ? ", " : " ")
// }
// console.log(result);


// console.log(array.join(' ')); // Prints the array elements in one row, separated by spaces


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// merge sort

// let array = [2,7,67,89,1,8,3]
// let low = 0;
// let high = array.length - 1;

// mergeSort(array, low , high)
// // console.log(array)
// console.log(array.join(' '));
// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
//     }

// function mergeSort(array, low , high){
//     if(low >=  high){ 
//         return;
//         }
//         let mid = Math.floor((low + high) / 2);
//         mergeSort(array, low, mid);
//         mergeSort(array, mid + 1, high);
//         merge(array,low,mid,high)

// }

// function merge(array,low,mid,high) {
//     let tempArray = [];
//     let left = low;
//     let right = mid + 1;

//     while(left <= mid && right<= high){
//         if(array[left] <= array[right]){
//             tempArray.push(array[left]);
//             left++;
//     }else{
//         tempArray.push(array[right]);
//             right++;
//     }
//     }

//     while(left<=mid){
//         tempArray.push(array[left]);
//             left++;
//     }

//     while(right<=high){
//         tempArray.push(array[right]);
//             right++;
//     }

//     for(let i = low; i <= high; i++){
//         array[i] = tempArray[i -low];
//         // console.log(i)
//         }
// }


// *********************************************************************************
// const a = 10;
// b = a ;
// b += 11+'s'
// console.log(a,b);

// const array1 = [2,34,65,675];
// const array2 = array1;
// array2.push(1)
// console.log(array1);
// console.log(array2);

// const array1 = [2,34,65,675];
// const array2 = [5,65,34,564];

// mergedArray = [...array1,...array2];
// console.log(mergedArray);

// merging two sorted array

// let arr1 =[1,2,3,4,5,6]
// let arr2 = [8,9,11,22,44,55]
// console.log("Two sorted array:"+arr1+" and "+arr2)
// const result = merge(arr1,arr2)
// console.log("Merged sorted array:"+result.join(" "))
// console.log("Merged sorted array:"+result)

// function merge(arr1,arr2){
//     mergedArray= [];
//     let i=0;
//     let j=0;

//     while(i < arr1.length && j < arr2.length){
//         if(arr1[i] <= arr2[j]){
//             mergedArray.push(arr1[i])
//             i++;
//     }else{
//         mergedArray.push(arr2[j])
//         j++;
//     }

//     while(i< arr1.length){
//         mergedArray.push(arr1[i])
//             i++;
//     }
//     while( j < arr2.length){
//         mergedArray.push(arr2[j])
//             j++;
//     }

//     return mergedArray;

// }
// }


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// let numbers = [10, 1, 3, 20, 2];
// numbers.sort();
// console.log(numbers); // Output: [1, 10, 2, 20, 3]

// *******************************************************************************************


// quick sort

// let arr = [2,3,7,2,7,1]
// let low = 0;
// let high = arr.length - 1
// // console.log(high)
// quickSort(arr,low,high)
// console.log(arr)

// function quickSort(arr,low,high){
//     if(low<high){
//         partIndex = qSort(arr,low,high)

//         quickSort(arr,low,partIndex - 1)
//         quickSort(arr,partIndex + 1,high)

//     }
// }

// function qSort( arr,low,high){
//     let pivot = arr[low];
//     let i = low ;
//     let j= high;

//     while(i<j){
//         while(arr[i]<= pivot && i <=high -1){
//             i++;

//         }
//         while(arr[j]>= pivot && j >= low + 1){
//                 j--;
//         }
//         if(i<j){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }   
//     }
//     let temp = arr[j];
//         arr[j] = arr[low];
//         arr[low] = temp;
//     return j;
// }



// ***************************************************************
//selection sort 

// let array = [2,5,13,13,671,4]

// for(let i = 0 ; i <= array.length - 2; i++){
//     let min = i
//     for(let j = i + 1 ; j <= array.length - 1; j++){
//         if( array[min] > array[j]){
//             min = j;
//         }

//     }
//     let temp = array[min];
//     array[min] = array[i]
//     array[i] = temp;
// }


// **************************************************************************** /
