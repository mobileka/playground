/*
 Merge two sorted lists together so the result is also sorted
 Duplicates are allowed
 */

class Solution {
    solve(a, b) {
        let i = 0;
        let y = 0;
        let result = [];

        while (i < a.length && y < b.length) {
            if (a[i] <= b[y]) {
                result.push(a[i]);
                i++;
            } else {
                result.push(b[y]);
                y++;
            }
        }

        while (i < a.length) {
            result.push(a[i]);
            i++;
        }

        while (y < b.length) {
            result.push(b[y]);
            y++;
        }

        return result;
    }
}

let solution = new Solution;
let a = [1, 3, 5, 6];
let b = [1, 4, 5, 7, 8];

console.log(solution.solve(a, b));