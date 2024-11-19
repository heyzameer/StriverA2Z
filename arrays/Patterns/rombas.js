// *****************************************************************
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// function printRhombus(n) {
//     let rhombus = '';

//     // Upper part of the rhombus
//     for (let i = 1; i <= n; i++) {
//         // Print leading spaces
//         for (let j = 1; j <= n - i; j++) {
//             rhombus += ' ';
//         }
//         // Print stars
//         for (let k = 1; k < 2 * i ; k++) {
//             rhombus += '*';
//         }
//         rhombus += '\n';
//     }

//     // Lower part of the rhombus
//     for (let i = 1; i < n; i++) {
//         // Print leading spaces
//         for (let j = 1; j <= i; j++) {
//             rhombus += ' ';
//         }
//         // Print stars
//         for (let k = 1; k <= 2 * n- (2*i+1); k++) {
//             rhombus +=  '*';
//         }
//         rhombus += '\n';
//     }

//     console.log(rhombus);
// }

// let n = 5; // Size of the rhombus
// printRhombus(n);

