/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let list1 = headA
  let list2 = headB
  while (list1 != list2){
      if(list1){
          list1 = list1.next
      }
      else{
          list1 = headB
      }
      if(list2){
          list2 = list2.next
      }
      else{
          list2 = headA
      } 
  }
  return list1
  
};