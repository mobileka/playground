/* Find the biggest element of a non-empty array */

class Solution {
    static max(arr) {
        return arr.reduce((a, b) => {
            return a > b ? a : b;
        });
    }

    static recursive(arr, m) {
        if (m === undefined)
            m = arr[0];

        if (arr.length === 0)
            return m;

        return this.recursive(arr.slice(1), arr[0] > m ? arr[0] : m);
    }
}

let list = [0, 24, 13, 101, 7, 13, 77];

console.log(Solution.max(list));
console.log(Solution.recursive(list));
