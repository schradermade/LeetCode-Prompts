function groupAnagrams(strs) {
  let grouped = {};

  for (const word of strs) {
    const key = word
      .split('')
      .sort()
      .join('');

    if (key in grouped) {
      grouped[key].push(word)
    } else {
      grouped[key] = [word]
    }
  }

  return Object.values(grouped);
}

module.exports = groupAnagrams;
