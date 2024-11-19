// Set Matrix Zero


// 643

// 12
// Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.



// Time Complexity: O((N*M)*(N + M)) + O(N*M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
// Reason: Firstly, we are traversing the matrix to find the cells with the value 0. It takes O(N*M). Now, whenever we find any such cell we mark that row and column with -1. This process takes O(N+M). So, combining this the whole process, finding and marking, takes O((N*M)*(N + M)).
// Another O(N*M) is taken to mark all the cells with -1 as 0 finally.

// Space Complexity: O(1) as we are not using any extra space.


function markRow(matrix, n, m, i) {
    for (let j = 0; j < m; j++) {
        matrix[i][j] = -1;
        
    }
  
  }
  
  function markCol(matrix, n, m, j) {
    for (let i = 0; i < n; i++) {
        matrix[i][j] = -1;   
    }
    
  }
  
  function zeroMatrix(matrix, n, m) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
         if(matrix[i][j] === 0){
            markCol(matrix,n,m,i)
            markRow(matrix,n,m,j)
        }
    }   
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
        if(matrix[i][j] === -1){
            matrix[i][j] = 0; 
        }
    }
    }
    return matrix;
  }
  
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  
  const n = matrix.length;
  const m = matrix[0].length;
  
  const ans = zeroMatrix(matrix, n, m);
  
  console.log("The Final matrix is: ");
  for (let i = 0; i < n; i++) {
    console.log(ans[i].join(" "));
  }









//   Time Complexity: O(2*(N*M)), where N = no. of rows in the matrix and M = no. of columns in the matrix.
//   Reason: We are traversing the entire matrix 2 times and each traversal is taking O(N*M) time complexity.
  
//   Space Complexity: O(N) + O(M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
//   Reason: O(N) is for using the row array and O(M) is for using the col array.
  
function zeroMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const row = new Array(n).fill(0); // row array
    const col = new Array(m).fill(0); // col array

    // Traverse the matrix:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // mark ith index of row with 1:
                row[i] = 1;

                // mark jth index of col with 1:
                col[j] = 1;
            }
        }
    }

    // Finally, mark all (i, j) as 0
    // if row[i] or col[j] is marked with 1.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

const matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const ans1 = zeroMatrix(matrix1);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}    

















// Time Complexity: O(2*(N*M)),
// Space Complexity: O(1) 
function zeroMatrix3(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    let col0 = 1;
    // Step 1: Traverse the matrix and mark 1st row & col accordingly:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // Mark i-th row:
                matrix[i][0] = 0;

                // Mark j-th column:
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

    // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] !== 0) {
                // Check for col & row:
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // Step 3: Finally mark the 1st col & then 1st row:
    if (matrix[0][0] === 0) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

const matrix3 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const ans3 = zeroMatrix3(matrix3);

console.log("The Final matrix is:");
for (const row of ans3) {
    console.log(row.join(" "));
}    

