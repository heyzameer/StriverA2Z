function findSecLar(array){
let largest = 0;
let secLargest = 0;
for (let index = 0; index < array.length; index++) {
    if( array[index] > largest){
        secLargest = largest;
        largest = array[index];
    }
    else if(secLargest < array[index] && largest != array[index]){
        secLargest = array[index];
    }
    
}
console.log(secLargest);
    console.log(largest);
}

findSecLar([10,9,2,3,4,5,6]);