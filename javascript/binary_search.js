/*
 Given a sorted array of integers, return the index of the given value. Return -1 if not found.
 */

class Solution {
    constructor(arr, val) {
        this.arr = arr;
        this.val = val;
    }

    recursive(low = 0, high = -1) {
        if (high == -1) {
            high = this.arr.length - 1;
        }

        if (low > high) {
            return -1;
        }

        let mid = low + Math.floor((high - low) / 2);

        if (this.arr[mid] == this.val) {
            return mid;
        } else if (this.arr[mid] < this.val) {
            return this.recursive((mid + 1), high);
        }

        return this.recursive(low, (mid - 1));
    };

    iterative() {
        let low = 0;
        let high = this.arr.length - 1;

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            if (this.arr[mid] == this.val) {
                return mid;
            } else if (this.arr[mid] < this.val) {
                low = mid + 1;
                continue;
            }

            high = mid - 1;
        }

        return -1;
    }
}

let arr = [...(new Array(30)).keys()];
let val = 20;
let solution = new Solution(arr, val);

console.log(solution.recursive());
console.log(solution.iterative());