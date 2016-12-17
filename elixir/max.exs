#
# Find the biggest element of a non-empty array
#

defmodule Solution do
  def max(list), do: Enum.reduce(list, fn(a, b) -> if a > b, do: a, else: b end)
end

defmodule Manual do
  def max([head|tail]), do: get_max(tail, head)
  defp get_max([], max), do: max

  defp get_max([head|tail], max) do
    cond do
      head > max -> get_max(tail, head)
      true -> get_max(tail, max)
    end
  end
end

IO.inspect(Solution.max([1, 5, 3, 10]))
IO.inspect(Manual.max([1, 5, 3, 10]))