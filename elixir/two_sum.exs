# Given an array of integers, return indices of the two numbers such that they add up to a specific target.
# You may assume that each input would have exactly one solution.
#
# https://leetcode.com/problems/two-sum/


defmodule Solution do
  def two_sum([head|tail], target) do
    map = Map.new()
    two_sum(tail, target, Map.put(map, head, 0), 0)
  end

  def two_sum([head|tail], target, map, i) do
    i = i + 1
    c = target - head

    cond do
      Map.has_key?(map, c) -> [Map.fetch!(map, c), i]
      true -> two_sum(tail, target, Map.put(map, head, i), i)
    end
  end

  def two_sum([], _, _, _) do
    "no matches"
  end
end

IO.inspect(Solution.two_sum([1, 11, 3, 0], 12))
IO.inspect(Solution.two_sum([1, 11, 3, 0], 3))
IO.inspect(Solution.two_sum([1, 0, 3, 0], 12))