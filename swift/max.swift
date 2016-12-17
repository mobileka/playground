// Find the biggest element of an array of positive integers

class Solution {
  func max(arr: [Int], m:Int = 0) -> Int {
    let count = arr.count

    if count == 0 {
      return m
    }

    let newArr = Array(arr[1..<count])

    if arr[0] > m {
      return max(arr: newArr, m: arr[0])
    }

    return max(arr: newArr, m: m)
  }
}

let s = Solution()
print(s.max(arr: [1, 5, 1, 89, 4]))
