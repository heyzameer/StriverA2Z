// Leaders in an Array

// Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.





// Time Complexity: O(N^2) { Since there are nested loops being used, at the worst case n^2 time would be consumed }.

// Space Complexity: O(N) { There is no extra space being used in this approach. But, a O(N) of space for ans array will be used in the worst case }.


function printLeadersBruteForce(arr, n) {

    let ans = [];
  
    for (let i = 0; i < n; i++) {
      let leader = true;
  
      //Checking whether arr[i] is greater than all 
      //the elements in its right side
      for (let j = i + 1; j < n; j++)
        if (arr[j] > arr[i]) {
  
          // If any element found is greater than current leader
          // curr element is not the leader.
          leader = false;
          break;
        }
  
      // Push all the leaders in ans array.
      if (leader)
        ans.push(arr[i]);
  
    }
  
    return ans;
  }
  
  // Array Initialization.
  let n = 6;
  let arr = [10, 22, 12, 3, 0, 6];
  
  let ans = printLeadersBruteForce(arr, n);
  
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
  
  




















  
//   Time Complexity: O(N) { Since the array is traversed single time back to front, it will consume O(N) of time where N = size of the array }.

//   Space Complexity: O(N) { There is no extra space being used in this approach. But, a O(N) of space for ans array will be used in the worst case }.

function printLeaders(arr, n) {

    let ans = [];
  
    // Last element of an array is always a leader,
    // push into ans array.
    let max = arr[n - 1];
    ans.push(arr[n - 1]);
  
    // Start checking from the end whether a number is greater
    // than max no. from right, hence leader.
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > max) {
        ans.push(arr[i]);
        max = arr[i];
      }
    }
  
    return ans;
  }
  
  // Array Initialization.
  let n1 = 6;
  let arr1 = [10, 22, 12, 3, 0, 6];
  
  let ans1 = printLeaders(arr1, n1);
  
  for (let i = ans1.length - 1; i >= 0; i--) {
    console.log(ans1[i]);
  }
  
  