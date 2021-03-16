function isPalindrome(s) {
  // Sanitize input string w/REGEX
  s = s.toLowerCase().replace(/[\W_]/g, "");

  let left = 0;
  let right = s.length -1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++;
    right--;
  }

  return true;
}

// Time complexity: O(N)
// Space complexity: O(1) Left and Right Pointers take up constant space
  // Unless .toLowerCase() is considered to add to space complexity, since
  // it makes a temporary copy of string in memory - in which case O(N) space compl.

module.exports = isPalindrome;
