const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.main = null;
  }

  root() {
    if (this.main === null) {
      return null;
    } else {
      return this.main;
    }
  }

  add(data) {
    this.main = addNewNode(this.main, data);

    function addNewNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNewNode(node.left, data);
      } else {
        node.right = addNewNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchNode(this.main, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? searchNode(node.left, data)
        : searchNode(node.right, data);
    }
  }

  find(data) {
    return findNode(this.main, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }
  }

  remove(data) {
    this.main = removeNode(this.main, data);

    function removeNode(node, data) {
     

      if (!node) {
        return null;
      }


      if (data < node.data) {
         
        node.left = removeNode(node.left, data);
        //  console.log(node);
        return node;
      } else if (data > node.data) {
        // console.log(data);
        
        node.right = removeNode(node.right, data);
        // console.log(node.rigth);
        
        return node;
      } else {
        
console.log(node.left);
        if (!node.left && !node.right) {
          
          return null;
        }

        if (!node.left) {
          
          node = node.right;
          // console.log(node);
          return node;
        }

        if (!node.right) {
          
          node = node.left;
          return node;
        }

        let minRight = node.right;
        
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        
// console.log(node);
        return node;
      }
    }
  }

  min() {
    if (!this.main) {
      return;
    }

    let node = this.main;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.main) {
      return;
    }

    let node = this.main;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
// tree.add(128);
// tree.add(13);
// tree.add(31);
// tree.add(54);
// tree.add(1);
tree.remove(14);
// tree.remove(9);
// tree.remove(31);
// tree.remove(2);

// tree.add(13);
// tree.add(15);
// tree.add(9);
// tree.add(20);
// tree.add(18);
// tree.add(32);
// tree.add(25);

console.log(tree);
// console.log(tree.has(31));

// console.log(tree.max());
