// // 0(n)
// // 0(n)
// function removeDup(array){
//     array= Array.from(new Set(array));
     
//     console.log(array)
//     console.log(array.length)

// }
// removeDup([1,1,12,3,3,1,12])




// The function findDup is designed to remove duplicates from a sorted array and return the length of the array with the unique elements. 
// // 0(n)
// // 0(1)

function findDup(array){
    let i = 0;
    for (let j = 1; j < array.length; j++) {
       if(array[i] != array[j]){
        i++;
        array[i] = array[j]
       }
    }
    return array;
}
console.log(findDup([1,1,3,3,12,12]))
