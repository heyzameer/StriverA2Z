// O(n)
// O(k)
// function leftRotateByD(array,k){
//     let rotated = array.splice(0,k);
//     array.push(...rotated);
//     console.log(array)
// }
// leftRotateByD([1,2,3,4,5],2)




// //2nd approach
// tc = o(n)
// sp = 0(n) n is size of arrray
// function rotateOpt(arr,k) {
    
//     n = arr.length;//3
//     k = k % n; // jst makingit efficient reduce unnes rotation

//     if (k < 0) {
//         k += n; // Convert negative rotation to positive rotation
//     }
 
//     let newArr = [];
//     for (let i = 0; i < n; i++) { //
//         let pos = (i - k + n) % n; // 
//         newArr[pos] = arr[i]//
//     }
//     return newArr;
// }

// console.log(rotateOpt([1,2,3,4,5],2));







// //O(n)
// //O(1)
// function rotateOptmizd(arr,k){
//        let size = arr.length;
    
//         k = k % size;
//      //If k is negative, convert it to a positive rotation This is because a left rotation by k is equivalent to a right rotation by size + k.
//      if (k < 0) {
//         k += size;
//     }
    
    
//     reverse(arr,0,k-1)
//     reverse(arr,k,size-1)
//     reverse(arr,0,size-1)
//         return arr;
//     }
    
//     function reverse(nums,left,right){
//         while(left < right){
//             const temp = nums[left];
//             nums[left++] = nums[right];
//             nums[right--] = temp;
//             } 
//     }
    
//     console.log(rotateOptmizd([1,2,3,4,5,6,7,8,9,10],1))


//practice

// function leftRotate(array,k){

//     let n = array.length;

//     if(k<n){
//         k = k % n;
//     }

//     if(k < 0){
//         k += n;
//     }
//     let newArray = new Array(n).fill(0);
//     for(let i = 0; i < n; i++){
//         let newPos = (i - k + n) % n;
//         newArray[newPos] = array[i];
//     }

//     return newArray;
// }

console.log(leftRotate([1,2,3,4,5,6],2))



function leftRotate(array,k){

    let n = array.length;

    if(k<n){
        k = k % n;
    }

    if(k < 0){
        k += n;
    }
    
    reverse(array,0,k-1);
    reverse(array,k,n-1);
    reverse(array,0,n-1);


    function reverse(array,left,right){
        while(left<right){
        let temp = array[left];
        array[left++] = array[right];
        array[right--] = temp;
    }}

    return array;
}

// console.log(leftRotate([1,2,3,4,5,6],2))