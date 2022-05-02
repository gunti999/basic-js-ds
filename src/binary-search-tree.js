const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootValue = null;
  }

  root() {
    return this.rootValue;
  }

  add(data) {

    let newNode = new Node(data);

    if (this.rootValue === null) {
      this.rootValue = newNode;
    } else {
      this.addNode(this.rootValue, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    let a = this.findNode(this.rootValue, data);
    if (!a) {
      return false;
    } else {
      return true;
    }
  }

  findNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  find(data) {
    return this.findNode(this.rootValue, data)
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minData = node.right;
      while (minData.left) {
        minData = minData.left;
      }
      node.data = minData.data;
      node.right = this.removeNode(node.right, minData.data);
      return node;
    }
  }

  remove(data) {
    this.rootValue = this.removeNode(this.rootValue, data)
  }

  min() {
    if (!this.rootValue) {
      return null;
    }
    let node = this.rootValue;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootValue) {
      return null;
    }

    let node = this.rootValue;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};