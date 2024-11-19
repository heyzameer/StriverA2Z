// tc O(n)
// sp O(1)


function maxOnes(array){
    let count = 0;
    let max = 0;
    for (let i = 0; i < array.length; i++) {
       if(array[i] === 1){
            count++;
            // if(count > max){
            //  max = count;
            //  }
            // or
            max = Math.max(count,max);
       }else{
        count = 0;
        }
 
}
return max;
}
console.log(maxOnes([1,1,1,0,1,1,0,1,1,1,1]));