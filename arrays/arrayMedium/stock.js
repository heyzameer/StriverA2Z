// maximize the profit
// Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.s

// time complexity of 𝑂(𝑛2)



// function stock(array) {
//     let maxPro = 0; // Initialize maxPro to track the maximum profit found

//     for (let i = 0; i < array.length; i++) {
//         let buyPrice = array[i];
//         for (let j = i + 1; j < array.length; j++) {
//             let sellPrice = array[j];
//             let profit = sellPrice - buyPrice;

//             // Update maxPro if current profit is greater
//             if (profit > maxPro) {
//                 maxPro = profit;
//             }
//         }
//     }

//     return maxPro; // Return the maximum profit
// }

// const prices = [7, 1, 5, 3, 6, 4];
// const maxProfit = stock(prices);
// console.log("The maximum profit is: " + maxProfit);












function stockOpt(array) {
    let maxPro = 0; // Initialize maxPro to track the maximum profit found
    let minPrice = array[0];
    for (let i = 1; i < array.length; i++) {
        minPrice = Math.min(minPrice, array[i]);

        maxPro = Math.max(maxPro, array[i] - minPrice);
        
    }

    return maxPro; // Return the maximum profit
}
const prices = [7, 1, 5, 3, 6, 4];
const maxProfit = stockOpt(prices);
console.log("The maximum profit is: " + maxProfit);