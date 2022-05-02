const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.rootValue = null;
  }

  getUnderlyingList() {
    return this.rootValue;
  }

  enqueue(value) {
    if (this.rootValue === null) {
      this.rootValue = new ListNode(value);
    } else {
      let elem = this.rootValue;
      while (elem.next !== null) {
        elem = elem.next;
      }
      elem.next = new ListNode(value);
    }
  }

  dequeue() {
    const first = this.rootValue.value;
    this.rootValue = this.rootValue.next;
    return first;
  }
}

module.exports = {
  Queue
};
