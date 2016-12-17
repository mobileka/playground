/*
 You've been given a list representing the stock prices for a single day for Amazon stock. The index of the list
 represents the timestamp, so the element at index 0 is the initial price of the stock, the element at index 1 is the
 next recorded price of the stock for that day and so on.

 Your task is to find the maximum profit possible from the purchase and sale of a single share of Amazon stock
 on that day.

 For example, if you've been given the following list: [12, 3, 10, 1], then the answer is 7 (buy at 3 and sell at 10).
 */

class Solution {
    solve(prices = []) {
        if (prices.length < 2) {
            return 0;
        }

        let min_price = prices[0];
        let max_profit = 0;

        for (let price of prices) {
            if (price < min_price) {
                min_price = price;
            }

            let profit = price - min_price;

            if (profit > max_profit) {
                max_profit = profit;
            }
        }

        return max_profit;
    }
}

let solution = new Solution();

console.log(solution.solve([1, 5, 3, 11]));
console.log(solution.solve([11, 5, 3, 4]));
console.log(solution.solve([1, 5, 15]));
