function isAnagram(s, t) {

  // Immediately disqualify if lengths arent equal
  if (s.length !== t.length) {
    return false;
  }

  const sCharCounts = {};

  // Add to sCharCounts
  // for of loop
  for (const sChar of s) {
    if (sChar in sCharCounts) {
      sCharCounts[sChar] += 1
    } else {
      sCharCounts[sChar] = 1;
    }
  }

  // Check with AND subtract from SCharCounts
  for (const tChar of t) {
    if (!(tChar in sCharCounts) || sCharCounts[tChar] === 0) {
      return false
    } else {
      sCharCounts[tChar] -= 1;
    }
  }

  return true
}

module.exports = isAnagram;
