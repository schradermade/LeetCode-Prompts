function isPalindromeLL(head) {

  let frontPointer = head;
  return recursivelyCheck(head);

function recursivelyCheck(currentNode) {
  if (currentNode != null) {
    if (!recursivelyCheck(currentNode.next)) return false;
    if (currentNode.val != frontPointer.val) return false;
    frontPointer = frontPointer.next;
  }
  return true;
}
};

// var isPalindrome = function(head) {
//   let frontPointer = head;
//   return recursivelyCheck(head);

// function recursivelyCheck(currentNode) {
//   if (currentNode != null) {
//     if (!recursivelyCheck(currentNode.next)) return false;
//     if (currentNode.val != frontPointer.val) return false;
//     frontPointer = frontPointer.next;
//   }
//   return true;
// }
// };

module.exports = isPalindromeLL;