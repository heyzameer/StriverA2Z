// Longest Consecutive Sequence in an Array

// Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.





 
// Time Complexity: O(N2), N = size of the given array.
// Reason: We are using nested loops each running for approximately N times.

// Space Complexity: O(1), as we are not using any extra space to solve this problem.

function linearSearch(arr, num) {
    let n = arr.length; // size of array
    for (let i = 0; i < n; i++) {
        if (arr[i] === num)
            return true;
    }
    return false;
}

function longestSuccessiveElements(arr) {
    let n = arr.length; // size of array
    let longest = 1;
    // pick an element and search for its
    // consecutive numbers:
    for (let i = 0; i < n; i++) {
        let x = arr[i];
        let cnt = 1;
        // search for consecutive numbers
        // using linear search:
        while (linearSearch(arr, x + 1) === true) {
            x += 1;
            cnt += 1;
        }

        longest = Math.max(longest, cnt);
    }
    return longest;
}

let arr = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElements(arr);
console.log("The longest consecutive sequence is", ans);





















// Time Complexity: O(NlogN) + O(N), N = size of the given array.
// Reason: O(NlogN) for sorting the array. To find the longest sequence, we are using a loop that results in O(N).

// Space Complexity: O(1), as we are not using any extra space to solve this problem.






function longestSuccessiveElements(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    // sort the array:
    arr.sort((a, b) => a - b);
    let lastSmaller = -Infinity;
    let cnt = 0;
    let longest = 1;

    // find longest sequence:
    for (let i = 0; i < n; i++) {
        if (arr[i] - 1 === lastSmaller) {
            // arr[i] is the next element of the
            // current sequence.
            cnt += 1;
            lastSmaller = arr[i];
        } else if (arr[i] !== lastSmaller) {
            cnt = 1;
            lastSmaller = arr[i];
        }
        longest = Math.max(longest, cnt);
    }
    return longest;
}

let arr1 = [1,1,1,1,1,1, 2,2, 3, 4];
let ans1 = longestSuccessiveElements(arr1);
console.log("The longest consecutive sequence is", ans1);


//practice
// function finds(a){
//     a.sort((a,b)=>a-b);
//     let n = a.length;
//     let lastSm = Number.NEGATIVE_INFINITY;
//     let cnt = 0;
//     let longest = 1;

//     for (let i = 0; i < n; i++) {
//         if(a[i] - 1 === lastSm){
//             cnt += 1;
//             lastSm=a[i]
//         }
//         else if(a[i] != lastSm){
//             cnt = 1;
//             lastSm = a[i]
//         }

//         longest = Math.max(cnt,longest);  
//     }
//     return longest;
// }
// console.log(longestSuccessiveElements([1,1,1,1,1,1, 2,2, 3, 4]));













// Time Complexity: O(N) + O(2*N) ~ O(3*N), where N = size of the array.
// Space Complexity: O(N), as we are using the set data structure to solve this problem.


function longestSuccessiveElements(a) {
    let n = a.length;
    if (n === 0)
        return 0;

    let longest = 1;
    let st = new Set();
    
    // put all the array elements into set
    for (let i = 0; i < n; i++) {
        st.add(a[i]);
    }

    // Find the longest sequence
    for (let it of st) {
        // if 'it' is a starting number
        if (!st.has(it - 1)) {
            // find consecutive numbers
            let cnt = 1;
            let x = it;
            while (st.has(x + 1)) {
                x = x + 1;
                cnt = cnt + 1;
            }
            longest = Math.max(longest, cnt);
        }
    }
    return longest;
}

let b = [100, 200, 1, 2, 3, 4];
let ans2 = longestSuccessiveElements(b);
console.log("The longest consecutive sequence is", ans2);