const {
  ensureValueIsNumericOrIsString,
  Node,
  AvlTree,
  getHeight,
  getBalanceFactor,
} = require("./avl");

const TRIALS = 100000;

//the non-primitives are
//compound data types
//that are made from the primitive types
//.E.g arrays,objects,trees,
//graphs etc.
const errorMessage = `Null,undefined or non-primitive
                      values are not allowed.`;

describe.skip("AvlTest", () => {
  describe("Node", () => {
    it(`can be
   initialized in the constructor
   and left and the right child
   are null.`, () => {
      const nodeData = 4;
      const node = new Node(nodeData);
      expect(node.data).toEqual(nodeData);
      expect(node.leftChild).toBeNull();
      expect(node.rightChild).toBeNull();
    });
    it(`rejects initilization
    with values that are not numeric 
    or are  not strings
    `, () => {
      let undefinedValue;
      let node;
      expect(() => {
        node = new Node(undefinedValue);
      }).toThrow(errorMessage);
    });
    it("setters works", () => {
      let root = 5,
        left = 4,
        right = 7,
        newRoot = 6;
      let node = new Node(root);
      node.setData(newRoot);
      node.setLeftChild(left);
      node.setRightChild(right);
      expect(node.data).toEqual(newRoot);
      expect(node.leftChild.getData()).toEqual(left);
      expect(node.rightChild.getData()).toEqual(right);
      settersRejectValuesThatAreNotNumericOrStrings();
    });
    it("getters works", () => {
      let root = 5,
        left = 4,
        right = 7;
      let newRoot = 6;
      let node = new Node(root);
      node.setData(newRoot);
      node.setLeftChild(left);
      node.setRightChild(right);
      let actualLeft, actualRight, actualRoot;
      actualRoot = node.getData();
      actualLeft = node.getLeftChild();
      actualRight = node.getRightChild();
      expect(actualRoot).toEqual(newRoot);
      expect(actualLeft.getData()).toEqual(left);
      expect(actualRight.getData()).toEqual(right);
    });
  });
  describe("avl tree", () => {
    it("creation is possible", () => {
      const root = 5;
      let avl = new AvlTree(root);
      expect(avl.root.getData()).toEqual(root);
      //rejects if value is non-numeric.
      expect(() => {
        avl = new AvlTree(null);
      }).toThrow(errorMessage);
    });
    describe("insert inserts values", () => {
      let tree;
      it(`can handle normal values
        insertions 
        that do not alter tree balance. `, () => {});
      tree = new AvlTree(4);
      tree.insert(2);
      tree.insert(5);
      chectThatTreeIsBalanced(tree);
      it(`can handle 
    right heavy insertions`, () => {
        tree = new Avl(0);
        const trial = 30;
        for (let i = 0; i < trial; i++) {
          tree.insert(i);
        }
        chectThatTreeIsBalanced(tree);
      });
      it(`can handle 
    left heavy insertions`, () => {
        tree = new Avl(0);
        const trial = 30;
        for (let i = trial - 1; i >= 0; i--) {
          tree.insert(i);
        }
        chectThatTreeIsBalanced(tree);
      });
    });
    it("finds searching values", () => {
      let tree = createTreeAndInsertValueFrom0toN(TRIALS);
      let foundValue;
      for (let i = 0; i < trials; i++) {
        foundValue = tree.find(i);
        expect(foundValue).not().toBeNull();
        expect(found).toBeGreaterThanOrEqual(0);
      }
    });
    it(`max returns node with
     the maximum value`, () => {
      let tree = createTreeAndInsertValueFrom0toN(TRIALS);
      const max = tree.max();
      expect(max.getData()).toEqual(trials);
    });
    it(`min returns node with
     the minimum value`, () => {
      let tree = createTreeAndInsertValueFrom0toN(TRIALS);
      const min = tree.min();
      expect(min.getData()).toEqual(0);
    });
    it(`delete deletes node with the 
   given value `, () => {
      let tree = createTreeAndInsertValueFrom0toN(TRIALS);
      tree.delete(TRIALS);
      const deletedValue = tree.find(TRIALS);
      expect(deletedValue).toBeNull();
    });
    it(`inOrder traverses the tree in
    the inOrder traversal`, () => {
      let tree = createTreeAndInsertValueFrom0toN(TRIALS);
      const producedValues = [];
      const cb = value => {
        producedValues.push(value);
      };
      tree.inOrder(cb);
      for (let i = 0; i < TRIALS; i++) {
        expect(i).toEqual(producedValues[i]);
      }
    });
    it(`preOrder traverses the tree in
    the preOrder traversal`, () => {});
    it(`postOrder traverses the tree in
    the postOrder traversal`, () => {});
  });
});

const chectThatTreeIsBalanced = tree => {
  const isBalanced = Math.abs(getBalanceFactor(tree)) <= 1;
  expect(isBalanced).toBeTruthy();
};

const createTreeAndInsertValueFrom0toN = N => {
  const tree = new AvlTree(0);
  for (let i = 1; i < N; i++) tree.insert(i);
  return tree;
};
const createRightHeavyTreeByInsertValues0toN = N => {
  let node = new Node(0);
  for (let index = 1; index < N; index++) {
    node.setLeftChild(index);
    node = node.getLeftChild();
  }
  return node;
};

const createLeftHeavyTreeByInsertValuesNto0 = N => {
  let node = new Node(0);
  for (let index = N - 1; index >= 0; index--) {
    node.setRightChild(index);
    node = node.getRightChild();
  }
  return node;
};

/**
 * we can not create fromm 0 upto N
 * since that will require
 * some rotations or
 * some very complicated mathematics,
 * so we create an explicit tree.
 * @returns -tree ,its height and its balance factor
 */

const createBalancedTree = () => {
  //              3
  //            /    \
  //           1       5
  //         /  \     /  \
  //        0    2    4   6
  const node = new Node(3);
  node.setLeftChild(1);
  node.setRightChild(5);
  const left = node.getLeftChild();
  const right = node.getRightChild();

  left.setLeftChild(0);
  left.setRightChild(2);
  right.setLeftChild(4);
  right.setRightChild(6);
  return {
    tree: node,
    height: 2,
    balance: 0,
  };
};

const settersRejectValuesThatAreNotNumericOrStrings = () => {
  rejectsNullValues();
  rejectsUndefinedValues();
  rejectsNonPrimitives();
};

const rejectsNullValues = () => {
  let root = 4,
    left = null,
    right = null,
    newRoot = null;
  let node = new Node(root);
  ensureSettingNodeValuesThrowsErrors(node, newRoot, left, right);
};
const rejectsUndefinedValues = () => {
  let root = 4,
    left,
    right,
    newRoot;
  let node = new Node(root);
  ensureSettingNodeValuesThrowsErrors(node, newRoot, left, right);
};

const rejectsNonPrimitives = () => {
  let root = 4,
    left = {some: 2, array: [1, 2, 3]},
    right = {data: 3},
    newRoot = [2, 3, 4];
  let node = new Node(root);
  ensureSettingNodeValuesThrowsErrors(node, newRoot, left, right);
};
const ensureSettingNodeValuesThrowsErrors = (node, newRoot, left, right) => {
  expect(() => {
    node.setData(newRoot);
  }).toThrow(errorMessage);

  expect(() => {
    node.setLeftChild(left);
  }).toThrow(errorMessage);
  expect(() => {
    node.setRightChild(right);
  }).toThrow(errorMessage);
};
