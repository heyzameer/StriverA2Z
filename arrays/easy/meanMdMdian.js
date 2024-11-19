
// let a1 = [2,35,64,76];
// let a2 = [11,22,55,66,77];

// function mergedArray(ar1,ar2){
//     let result = [];
//     let i = 0;
//     let j = 0;

//     while(i < ar1.length && j < ar2.length){
//     if(ar1[i] < ar2[j]){
//         result.push(ar1[i]);
//          i++;

//     }else {
//         result.push(ar2[j]);
//         j++;
//     }
// }
//     while(i < ar1.lenght){
//         result.push(ar1[i]);
//         i++;
//     }
//     while(j < ar2.lenght){
//         result.push(ar2[j]);
//         j++;
//     }
//     return result;


// }

// function findMean(result){
//     let arr = result;
//     let finalResult = arr.reduce((acc,val) => acc + val, 0) ;
//     return finalResult / arr.length;
    
//  }

//  function findMedian(result){
//     let arr = result;
//     let length = arr.length;
//     if(length % 2 == 0){
//         return (arr[length/2 - 1] + arr[length/2]) / 2 ;
//     }
//     else {
//         return  arr[Math.floor(length/2)] 
//       }
//  }


// let result = mergedArray(a1,a2);
// console.log("merged array");
// console.log(result);

// let mean = findMean(result);
// console.log("mean: " + mean.toFixed(1));

// let median = findMedian(result);
// console.log("Median: " + median);

// let middleInd = Math.floor(result.length/2);
// console.log("Median: " + result[middleInd]);

