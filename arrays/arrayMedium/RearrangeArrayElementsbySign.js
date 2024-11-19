// Rearrange Array Elements by Sign
// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

// Note: Start the array with positive elements.

// O(N+N/2)
// O(N/2 + N/2) = O(N) 
//brute

function Rearrange(array){

    let pos = [];
    let neg = [];

    for (let i = 0; i < array.length; i++) {
      if(array[i] > 0){
        pos.push(array[i]);
      }
      else{
        neg.push(array[i])
      }
    }

    for (let i = 0; i < array.length / 2; i++) {
        
        array[i * 2] = pos[i];
        array[i * 2 + 1] = neg[i];
 }

 return array;
}

let A = [1, 2, -4, -5];


let ansA = Rearrange(A)
console.log(ansA);
// console.log(ans.join(" "));












// Time Complexity: O(N)
// Space Complexity:  O(N) 
// Define a function to rearrange an array of integers by sign.
function RearrangebySign(A) {

    let n = A.length;
  
    // Define an array for storing the answer separately.
    let ans = new Array(n).fill(0);
  
    // Positive elements start from 0 and negative from 1.
    let posIndex = 0, negIndex = 1;
    for (let i = 0; i < n; i++) {
  
      // Fill negative elements in odd indices and increment by 2.
      if (A[i] < 0) {
        ans[negIndex] = A[i];
        negIndex += 2;
      }
  
      // Fill positive elements in even indices and increment by 2.
      else {
        ans[posIndex] = A[i];
        posIndex += 2;
      }
    }
  
    return ans;
  }
  
  // Define an array and call the RearrangebySign function.
  let B = [1, 2, 2, -4, -5];
  
  let ansB = RearrangebySign(B);
  
  // Print the result.
  console.log(ansB);
//   console.log(ansB.join(" "));







// Variety-2
// Problem Statement:
// There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal). Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values. The leftover elements should be placed at the very end in the same order as in array A.

// Time Complexity: O(2*N)
// Space Complexity:  O(N/2 + N/2) = O(N)
// not equal positive and negative
// function RearrangebySignVar2(A) {
    
//     let n = A.length;
    
//     // Define 2 arrays, one for storing positive 
//     // and other for negative elements of the array.
//     let pos = [];
//     let neg = [];
    
//     // Segregate the array into positives and negatives.
//     for(let i=0;i<n;i++){
        
//         if(A[i]>0) pos.push(A[i]);
//         else neg.push(A[i]);
//     }
    
//     // If positives are lesser than the negatives.
//     if(pos.length < neg.length){
        
//       // First, fill array alternatively till the point 
//       // where positives and negatives are equal in number.
//       for(let i=0;i<pos.length;i++){
        
//         A[2*i] = pos[i];
//         A[2*i+1] = neg[i];
//       }
      
//       // Fill the remaining negatives at the end of the array.
//       let index = pos.length*2;
//       for(let i = pos.length;i<neg.length;i++){
          
//           A[index] = neg[i];
//           index++;
//       }
//     }
    
//     // If negatives are lesser than the positives.
//     else{
        
//         // First, fill array alternatively till the point 
//         // where positives and negatives are equal in number.
//         for(let i=0;i<neg.length;i++){
        
//         A[2*i] = pos[i];
//         A[2*i+1] = neg[i];
//     }
      
//       // Fill the remaining positives at the end of the array.
//       let index = neg.length*2;
//       for(let i = neg.length;i<pos.length;i++){
          
//           A[index] = pos[i];
//           index++;
//       }
//     }
//     return A;
      
//   }
  
//   // Array Initialisation.
//   let c = [1,2,-4,-5,3,4];
  
//   let ans = RearrangebySignVar2(c);
//   console.log(ans);

// //   for (let i = 0; i < ans.length; i++) {
// //       console.log(ans[i]);
// //   }












//practice
function relative(array){
    let pos= [];
    let neg= [];

    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) pos.push(array[i])
            else neg.push(array[i])
        
    }


    if(pos.length > neg.length){

        for (let i = 0; i < neg.length; i++) {
            array[i * 2] = pos[i];
            array[i * 2 + 1] = neg[i];
        }

        let index = neg.length * 2;
        for (let i = neg.length; i < pos.length; i++) {
            array[index] = pos[i]
            index++;
        }


    }else{

        for (let i = 0; i < pos.length; i++) {
            array[i * 2] = pos[i];
            array[i * 2 + 1] = neg[i];
        }

        let index = pos.length * 2;
        for (let i = pos.length; i < neg.length; i++) {
            array[index] = neg[i]
            index++;
        }
    }
    return array;

}
let c = [1,2,-4,-5,3,4];
  
  let ans = relative(c);
  console.log(ans);