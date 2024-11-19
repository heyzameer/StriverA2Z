// Rotate Image by 90 degree

// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.



// Approach: Take another dummy matrix of n*n, and then take the first row of the matrix and put it in the last column of the dummy matrix, take the second row of the matrix, and put it in the second last column of the matrix and so.

// Time Complexity: O(N*N) to linearly iterate and put it into some other matrix.

// Space Complexity: O(N*N) to copy it into some other matrix.

function rotate(matrix) {
    const n = matrix.length;
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - i - 1] = matrix[i][j];
        }
    }
    
    return rotated;
}

function main() {
    const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    const rotated = rotate(arr);
    
    console.log("Rotated Image:");
    rotated.forEach(row => {
        console.log(row.join(" "));
    });
}

main();








// Optimal Approach
// Algorithm / Intuition
// Intuition: By observation, we see that the first column of the original matrix is the reverse of the first row of the rotated matrix, so that’s why we transpose the matrix and then reverse each row, and since we are making changes in the matrix itself space complexity gets reduced to O(1).

// Approach:



// Step 1: Transpose the matrix. (transposing means changing columns to rows and rows to columns)
// output[j][i] = array[i][j];
// Step 2: Reverse each row of the matrix.
// Time Complexity: O(N*N) + O(N*N).One O(N*N) is for transposing the matrix and the other is for reversing the matrix.

// Space Complexity: O(1).



function rotate(matrix) {
    const n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse each row
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
}

function main() {
    const arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    rotate(arr);

    console.log("Rotated Image:");
    arr.forEach(row => {
        console.log(row.join(" "));
    });
}

main();
