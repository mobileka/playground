/*
 Merge two sorted lists together so the result is also sorted
 Duplicates are allowed
*/

class Solution {
  func merge(a: [Int], b: [Int]) -> [Int] {
    var ai = 0, bi = 0, result = [Int]()

    while ai < a.count && bi < b.count {
      if a[ai] < b[bi] {
        result.append(a[ai])
        ai += 1
      } else {
        result.append(b[bi])
        bi += 1
      }
    }

    while ai < a.count {
      result.append(a[ai])
      ai += 1
    }

    while bi < b.count {
      result.append(b[bi])
      bi += 1
    }

    return result
  }
}

let s = Solution()
print(s.merge(a: [1, 3, 4, 5, 6], b: [2, 6, 7]))
