function swap(i, j) {

    // let temp = i;
    // i = j;
    // j = temp;
    [i, j] = [j, i]
    return [i, j]
}

function comparison(i, j) {
    if(i > j){
        return true;
    }
    return false;
}

function bubbleSort(array) {
    for (let i = array.length - 1; i > 0 ; i--){
        for(let j = 0; j < i; j++){
            if(comparison(array[j], array[j+1])){
                let sortedArray = swap(array[j], array[j+1]);
                array[j] = sortedArray[0];
                array[j+1] = sortedArray[1]
                // [array[j], array[j+1]]=[array[j+1], array[j]]
            }
        }
    }
    return array;
}

console.log(bubbleSort([5,6,3,2,1]))
let myArr = [2,1]
let a = 1
let b = 2
swap(a, b)
console.log(a)

console.log(b)
