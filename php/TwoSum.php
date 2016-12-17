<?php

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution.

https://leetcode.com/problems/two-sum/
*/

class TwoSum
{
    /**
     * @param array $arr
     * @param int $target
     *
     * @return int|string
     */
    public function solve($arr, $target)
    {
        $map = [];

        foreach ($arr as $k => $el) {
            $c = $target - $el;

            if (array_key_exists($c, $map)) {
                return [$map[$c], $k];
            }

            $map[$el] = $k;
        }

        return "No matches";
    }
}

$solution = new TwoSum;
print_r($solution->solve([0, 5, 11, 4], 9));
print_r($solution->solve([0, 5, 11, 4], 1));
