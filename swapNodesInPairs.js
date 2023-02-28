/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let LL = new ListNode(0)
  let prev = LL, curr = head

  if(!curr || !curr.next){
      return head
  }

  while(curr && curr.next){
      let newPair = curr.next.next
      let second = curr.next

      second.next = curr
      curr.next = newPair
      prev.next = second

      prev = curr
      curr = newPair
  }
  return LL.next
  
};