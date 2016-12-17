/*
 Write a program that outputs the string representation of numbers from 1 to n.
 But for multiples of three it should output “Fizz” instead of the number  and for the multiples of five output “Buzz”.
 For numbers which are multiples of both three and five output “FizzBuzz”.

 https://leetcode.com/problems/fizz-buzz/
 */

class Solution {
    static fizzBuzz(n) {
        let result = [];

        for (let i = 1, output; i <= n; i++, output = "") {
            if (i % 3 === 0) {
                output += "Fizz";
            }

            if (i % 5 === 0) {
                output += "Buzz";
            }

            result.push(output || i.toString());
        }

        return result;
    };
}

console.log(Solution.fizzBuzz(16));