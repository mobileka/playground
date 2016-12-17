<?php

/*
 Given a sorted array of integers, return the index of the given value. Return -1 if not found.
 */

class BinarySearch
{
    /**
     * @var array
     */
    private $arr;

    /**
     * @var int
     */
    private $val;

    /**
     * BinarySearch constructor.
     *
     * @param array $arr
     * @param int $val
     */
    public function __construct($arr, $val)
    {
        $this->arr = $arr;
        $this->val = $val;
    }

    /**
     * @param int $low
     * @param int $high
     *
     * @return int
     */
    public function solve($low = 0, $high = -1)
    {
        if ($high == -1) {
            $high = count($this->arr) - 1;
        }

        if ($low > $high) {
            return -1;
        }

        $mid = $low + floor(($high - $low) / 2);

        if ($this->arr[$mid] == $this->val) {
            return $mid;
        } elseif ($this->arr[$mid] > $this->val) {
            return $this->solve($low, $high - 1);
        }

        return $this->solve($low + 1, $high);
    }

    /**
     * @return int
     */
    public function solveIteratively()
    {
        $low = 0;
        $high = count($this->arr) - 1;

        while ($low <= $high) {
            $mid = $low + floor(($high - $low) / 2);

            if ($this->arr[$mid] == $this->val) {
                return $mid;
            } elseif($this->arr[$mid] < $this->val) {
                $low = $mid + 1;
                continue;
            }

            $high = $mid - 1;
        }

        return -1;
    }
}


$solution = new BinarySearch(range(0, 30), 20);
echo $solution->solve(), "\n";
echo $solution->solveIteratively(), "\n";