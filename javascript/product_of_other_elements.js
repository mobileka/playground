/*
 Given a list of integers, write a function that will return a list, in which for each index the element will be the
 product of all integers except for the element at that index.

 For example, an input of [1, 2, 3, 4] would return [24, 12, 8, 6] by performing:
 [2 * 3 * 4, 1 * 3 * 4, 1 * 2 * 4, 1 * 2 * 3]
 */

class Solution {
    solve(list) {
        let result = [];
        let len = list.length - 1;
        let product = 1;
        let i = 0;

        while (i <= len) {
            result[i] = product;
            product *= list[i];
            i++;
        }

        product = 1;

        while (len >= 0) {
            result[len] *= product;
            product *= list[len];
            len--;
        }

        return result;
    }
}

let solution = new Solution();
let input = [1, 2, 3, 4];

console.log(solution.solve(input));
