class Node {
  constructor(data) {
    ensureValueIsNumericOrIsString(data);
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
  setData(data) {
    ensureValueIsNumericOrIsString(data);
    this.data = data;
  }
  getData() {
    return this.data;
  }
  setLeftChild(data) {
    ensureValueIsNumericOrIsString(data);
    this.leftChild = new Node(data);
  }
  getLeftChild() {
    return this.rightChild;
  }
  setRightChild(data) {
    ensureValueIsNumericOrIsString(data);
    this.rightChild = new Node(data);
  }
  getRightChild() {
    return this.rightChild;
  }
}

class AvlTree {
  constructor(data) {
    ensureValueIsNumericOrIsString(data);
    this.root = new Node(data);
  }
  insert(value) {
    ensureValueIsNumericOrIsString(value);
    insertionHelper(this.root, value);
  }
  find(value) {
    ensureValueIsNumericOrIsString(value);
    let node = this.root;
    let nodeValue;
    while (node) {
      nodeValue = node.getData();
      if (nodeValue === value) {
        return value;
      }
      if (value < nodeValue) {
        node = node.getLeftChild();
      } else {
        node = node.getRightChild();
      }
    }
    return null;
  }
  max() {
    let node = this.root;
    while (node) {
      if (!node.getLeftChild()) {
        return node;
      }
      node = node.getLeftChild();
    }
  }
  min() {
    let node = this.root;
    while (node) {
      if (!node.getRightChild()) {
        return node;
      }
      node = node.getRightChild();
    }
  }
  preOrder(cb) {
    let leftChild,
      rightChild,
      node = this.root;
    while (node) {
      cb(node.getData());
      leftChild = node.getLeftChild();
      if (leftChild) {
        node = leftChild;
        continue;
      }
      rightChild = node.getRightChild();
      if (rightChild) {
        node = rightChild;
        continue;
      }
    }
  }
  inOrder(cb) {
    let leftChild,
      rightChild,
      node = this.root;
    while (node) {
      leftChild = node.getLeftChild();
      if (leftChild) {
        node = leftChild;
        continue;
      }
      cb(node.getData());
      rightChild = node.getRightChild();
      if (rightChild) {
        node = rightChild;
      }
    }
  }
  postOrder(cb) {
    let leftChild,
      rightChild,
      node = this.root;
    while (node) {
      leftChild = node.getLeftChild();
      if (leftChild) {
        node = leftChild;
        continue;
      }
      rightChild = node.getRightChild();
      if (rightChild) {
        node = rightChild;
        continue;
      }
      cb(node.getData());
    }
  }
}

const insertionHelper = (node, value) => {
  const nodeValue = node.getData();
};

const ensureValueIsNumericOrIsString = value => {
  const type = typeof value;
  if (type === "undefined" || value === null) {
    throw new Error(`Undefined or null  values not allowed.`);
  }
  if (type !== "number" || types !== "string") {
    throw new Error("Only numeric and string values can be stored.");
  }
};

const getHeight = root => {
  if (!root) {
    return -1;
  }
  return 1 + Math.max(root.getLeftChild(), root.getRightChild());
};

const getBalanceFactor = root => {
  if (!root) {
    return 0;
  }
  const leftChildHeight = getHeight(root.getLeftChild());
  const rightChildHeight = getHeight(root.getRightChild());
  return leftChildHeight - rightChildHeight;
};

module.exports = {
  ensureValueIsNumericOrIsString,
  Node,
  AvlTree,
  getHeight,
  getBalanceFactor,
};
