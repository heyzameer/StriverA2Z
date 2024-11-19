//bryte force
// Time Complexity: O(N2),
// Space Complexity: O(1) /

function majorityElementBrute(arr) {
    // Size of the given array
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Selected element is arr[i]
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            // Counting the frequency of arr[i]
            if (arr[j] === arr[i]) {
                cnt++;
            }
        }

        // Check if frequency is greater than n/2
        if (cnt > Math.floor(n / 2)) {
            return arr[i];
        }
    }

    return -1;
}

// let arr = [2, 2, 1,1,1, 1, 1, 2, 2];
// let ans = majorityElementBrute(arr);
// console.log("The majority element is:", ans);












//better
// worst case, it will be O(N2).

// Space Complexity: O(N) as we are using a map data structure.


function finMajority(arr){
    const n = arr.length ;

    const map = new Map();

    for (let i = 0; i < array.length; i++) {
        const num = arr[i];
        if(map.has(num)){
            map.set(num,map.get(num) + 1);
        }
        else{
            map.set(num,1);
        }
        
    }


    for (const [num,count] of map) {
        if(count > Math.floor(n/2)){
            return num
        }
    }
}

// const arr = [2, 2, 1, 1, 1, 2, 2];
// const ans = majorityElement(arr);
// console.log("The majority element is:", ans);













// optimal
// Moore's Voting Algorithm 

// Time Complexity: O(N) + O(N)
// Space Complexity: O(1)

function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;
    let cnt = 0; // Count
    let el; // Element

    // Applying the algorithm
    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = arr[i];
        } else if (el === arr[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    // Checking if the stored element is the majority element
    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}

let arr = [2, 2, 1, 1, 1, 2, 2];
let ans = majorityElement(arr);
console.log("The majority element is:", ans);

