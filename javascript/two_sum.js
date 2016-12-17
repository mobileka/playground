/*
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 You may assume that each input would have exactly one solution.

 https://leetcode.com/problems/two-sum/
 */

class Solution {
    static twoSum(nums = [], target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let c = target - nums[i];

            if (map.has(c)) {
                return [map.get(c), i];
            }

            map.set(nums[i], i);
        }

        return "No matches";
    }
}

console.log(Solution.twoSum([0, 5, 3, 11], 8));
console.log(Solution.twoSum([0, 5, 3, 11], 1));