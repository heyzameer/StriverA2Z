function leftRotate(array){
    // first empty the fisrt place
    let temp = array[0]
    for (let index = 1; index < array.length; index++) {
       array[index - 1] = array[index]
    }
    array[array.length-1] = temp;
    return array;
}
console.log(leftRotate([1,2,3,4,5]))



