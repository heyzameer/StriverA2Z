// Spiral Traversal of Matrix

// Problem Statement: Given a Matrix, print the given matrix in spiral order.





// Time Complexity: O(m x n) { Since all the elements are being traversed once and there are total n x m elements ( m elements in each row and total n rows) so the time complexity will be O(n x m)}.

// Space Complexity: O(n) { Extra Space used for storing traversal in the ans array }.


// Define a function to print the matrix in a spiral order
function printSpiral(mat) {
    // Define ans array to store the result.
    let ans = [];
  
    // Determine the number of rows and columns
    let n = mat.length; // no. of rows
    let m = mat[0].length; // no. of columns
  
    // Initialize the pointers reqd for traversal.
    let top = 0, left = 0, bottom = n - 1, right = m - 1;
  
    // Loop until all elements are not traversed.
    while (top <= bottom && left <= right) {
      // For moving left to right
      for (let i = left; i <= right; i++)
        ans.push(mat[top][i]);
  
      top++;
  
      // For moving top to bottom.
      for (let i = top; i <= bottom; i++)
        ans.push(mat[i][right]);
  
      right--;
  
      // For moving right to left.
      if (top <= bottom) {
        for (let i = right; i >= left; i--)
         ans.push(mat[bottom][i]);
  
        bottom--;
      }
  
      // For moving bottom to top.
      if (left <= right) {
        for (let i = bottom; i >= top; i--)
          ans.push(mat[i][left]);
  
        left++;
      }
    }
    return ans;
  }
  
  // Define the main function (not necessary in JavaScript)
  
  // Matrix initialization.
  let mat = [[1, 2, 3, 4],
             [5, 6, 7, 8],
             [9, 10, 11, 12],
             [13, 14, 15, 16]];
      
  let ans = printSpiral(mat);
  
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i] + " ");
  }
  
  console.log(); // Empty console.log() to print a newline