// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
const charMap = {};
// index position starts at "0"
let windowStart = 0;
// max length of longest substring
let maxLength = 0;

// for loop to iterate through string
for (let i = 0; i < s.length; i++) {
  const endChar = s[i];
  if (charMap[endChar] >= windowStart) {
    windowStart = charMap[endChar] + 1;
  }

  charMap[endChar] = i;
  maxLength = Math.max(maxLength, i - windowStart + 1)
}

return maxLength;
}

module.exports = lengthOfLongestSubstring;
