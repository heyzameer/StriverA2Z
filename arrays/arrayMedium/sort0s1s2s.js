// bruteforce
// mergesort nlogn     O(n)



// better
// O(n)
// O(1)
function sortColors(arr) {
    // Step 1: Initialize count variables
    let count0 = 0, count1 = 0, count2 = 0;

    // Step 2: Traverse the array and count occurrences
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count0++;
        } else if (arr[i] === 1) {
            count1++;
        } else if (arr[i] === 2) {
            count2++;
        }
    }

    // Step 3: Reconstruct the array based on counts
    let index = 0;
    
    // Place 0s
    while (count0 > 0) {
        arr[index++] = 0;
        count0--;
    }
    
    // Place 1s
    while (count1 > 0) {
        arr[index++] = 1;
        count1--;
    }
    
    // Place 2s
    while (count2 > 0) {
        arr[index++] = 2;
        count2--;
    }
}

// Example usage
let colors = [2, 0, 2, 1, 1, 0];
sortColors(colors);
console.log(colors); // Output: [0, 0, 1, 1, 2, 2]









// optimal
// This problem is a variation of the popular Dutch National flag algorithm. 

// O(N), where N = size of the given array.
// Space Complexity: O(1) as we are not using any extra space.


function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid] using a temporary variable
            let temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // Move to the next element
            mid++;
        } else { // nums[mid] === 2
            // Swap nums[mid] and nums[high] using a temporary variable
            let temp = nums[high];
            nums[high] = nums[mid];
            nums[mid] = temp;
            high--;
        }
    }
}

// Example usage
const nums = [2, 0, 1, 2, 1, 0];
sortColors(nums);
console.log(nums); // Output: [0, 0, 1, 1, 2, 2]