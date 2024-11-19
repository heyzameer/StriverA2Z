

// ques2
//rotate array by k

//bruteforce

// function rotate(arr,k){
//    let size = arr.length;
//     k = k % size;
//     const rotated = arr.splice(size - k,size) // O(n)
//     // let newar = rotated.concat(arr);
//     arr.unshift(...rotated);//O(n)
//     console.log(arr)


// }
// rotate([-1,2,-3],4);


//2nd approach
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
//         let pos = (i + k) % n; // 
//         newArr[pos] = arr[i]//
//     }
//     return newArr;
// }

// console.log(rotateOpt([-1,2,-3],4));


//optimized
// tc = o(n)
// sp = 0(1) 

// function rotateOptmizd(arr,k){
//    let size = arr.length;

//     k = k % size;
//  //If k is negative, convert it to a positive rotation This is because a left rotation by k is equivalent to a right rotation by size + k.
//  if (k < 0) {
//     k += size;
// }


//     reverse(arr,0,size-1)
//     reverse(arr,0,k-1)
//     reverse(arr,k,size-1)
//     return arr;
// }

// function reverse(nums,left,right){
//     while(left < right){
//         const temp = nums[left];
//         nums[left++] = nums[right];
//         nums[right--] = temp;
//         } 
// }

// console.log(rotateOptmizd([1,2,3,4,5,6,7,8,9,10],3))
