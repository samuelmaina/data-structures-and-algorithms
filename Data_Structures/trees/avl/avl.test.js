const Node = require('./node');
const AvlTree = require('./avl');

describe('avl', () => {
	describe('Node Tests', () => {
		it('should be able to create node', () => {
			const data = {
				key: 1,
				value: 'The rot',
			};

			const node = new Node(data);
			expect(node.key).toBe(data.key);
			expect(node.value).toBe(data.value);
		});
		describe('After creation', () => {
			const root = {
				key: 2,
				value: 'This is the root value',
			};
			let node;

			beforeEach(() => {
				node = new Node(root);
			});
			afterEach(() => {
				node = undefined;
			});
			describe('setter and getter for key and value', () => {
				describe('key', () => {
					it('setKey', () => {
						const newKey = 3;
						node.setKey(newKey);
						expect(node.key).toBe(newKey);
					});
					it('getKey', () => {
						expect(node.getKey()).toBe(root.key);
					});
				});
				describe('value', () => {
					it('setValue', () => {
						const newValue = 'The new value';
						node.setValue(newValue);
						expect(node.value).toBe(newValue);
					});
					it('getValue', () => {
						expect(node.getValue()).toBe(root.value);
					});
				});
			});
			it('should check if node is leaf', () => {
				expect(node.isLeaf()).toBeTruthy();
			});
			describe('Should be able to set and get the children  and the parent and also see test if they exist', () => {
				describe('left', () => {
					let left;
					beforeEach(() => {
						left = new Node({
							key: 1,
							value: 'This is the left child',
						});
					});
					it('set', () => {
						node.setLeft(left);
						ensureNodeHasLeft(node, left);
					});
					it('get', () => {
						node.setLeft(left);
						const leftChild = node.getLeft();
						ensureNodeHasLeft(node, leftChild);
					});
					it('has', () => {
						node.setLeft(left);
						expect(node.hasLeft()).toBeTruthy();
					});
				});
				describe('right', () => {
					let right;
					beforeEach(() => {
						right = new Node({
							key: 3,
							value: 'This is the right child',
						});
					});
					it('set', () => {
						node.setRight(right);
						ensureNodeHasRight(node, right);
					});
					it('get', () => {
						node.setRight(right);
						const rightChild = node.getRight();
						ensureNodeHasRight(node, rightChild);
					});
					it('has', () => {
						node.setRight(right);
						expect(node.hasRight()).toBeTruthy();
					});
				});

				describe('parent', () => {
					let parent;
					beforeEach(() => {
						parent = new Node({
							key: 4,
							value: 'This is the parent',
						});
					});
					it('set', () => {
						node.setParent(parent);
						ensureHasParent(node, parent);
					});
					it('get', () => {
						node.setParent(parent);
						const retreved = node.getParent();
						ensureHasParent(node, retreved);
					});
					it('has', () => {
						node.setParent(parent);
						expect(node.hasParent()).toBeTruthy();
					});
				});
			});
		});
	});
	describe('Avl Tree', () => {
		it('should be able to insert', () => {
			const root = {
				key: 2,
				value: 'This is the value that was supposed to be there.',
			};
			const left = {
				key: 1,
				value: 'This is the left child',
			};
			const avlTree = new AvlTree();
			avlTree.insert(root);
			avlTree.insert(left);
			const treeRoot = avlTree.root();
			ensureNodeHasLeft(treeRoot, left);
		});

		describe('After insertion', () => {
			let tree;
			beforeEach(() => {
				tree = new AvlTree();
			});
			it('Should be able to get the height', () => {
				const trials = 100000;
				tree = generateTreeWithKeyUpto(trials);
				const treeHeight = tree.root().getHeight();
				//the worst case height for an avl tree is 1.44 * log(number_of_nodes_in_the_tree)
				expect(treeHeight).toBeLessThanOrEqual(1.44 * Math.log2(trials));
			});
			describe('Should  rotate', () => {
				describe('should be able to insert and rotate', () => {
					const left = {
						key: 1,
						value: 'This is the left child',
					};
					const root = {
						key: 2,
						value: 'This is the value that was supposed to be there.',
					};
					const right = {
						key: 3,
						value: 'The right value',
					};
					it('left rotation', () => {
						tree.insert(right);
						tree.insert(root);
						tree.insert(left);

						const treeRoot = tree.root();
						ensureNodeHasValues(treeRoot, root);
						ensureNodeHasChildren(treeRoot, left, right);
						ensureIsBalanced(treeRoot);
					});
					it('right rotation', () => {
						tree.insert(left);
						tree.insert(root);
						tree.insert(right);

						const treeRoot = tree.root();
						ensureNodeHasValues(treeRoot, root);
						ensureNodeHasChildren(treeRoot, left, right);
					});
					it('left right rotation', () => {
						tree.insert(right);
						tree.insert(left);
						tree.insert(root);

						const treeRoot = tree.root();
						ensureNodeHasValues(treeRoot, root);
						ensureNodeHasChildren(treeRoot, left, right);

						// expect(treeRoot.getHeight()).toBe(1);
					});
					it('right left rotation', () => {
						tree.insert(left);
						tree.insert(right);
						tree.insert(root);
						const treeRoot = tree.root();
						ensureNodeHasValues(treeRoot, root);
						ensureNodeHasChildren(treeRoot, left, right);
						// expect(treeRoot.getHeight()).toBe(1);
					});

					/*
                      80
                     /  \
      (balance = 2) 50  90
                   /
                  40
                 /
                30

              right-rotation of 50 to ==>

                80
               /  \
              40  90
             /  \
            30  50
      */

					it('complex rotation', () => {
						const eighty = { key: 80, value: 'n1' },
							fifty = { key: 50, value: 'n2' },
							ninety = { key: 90, value: 'n3' },
							fourty = { key: 40, value: 'n4' },
							thirty = { key: 30, value: 'n5' };
						tree.insert(eighty);
						tree.insert(fifty);
						tree.insert(ninety);
						tree.insert(fourty);
						tree.insert(thirty);

						const treeRoot = tree.root();
						ensureNodeHasValues(treeRoot, eighty);
						ensureNodeHasChildren(treeRoot, fourty, ninety);
						ensureNodeHasChildren(treeRoot.getLeft(), thirty, fifty);
						ensureIsBalanced(treeRoot);
					});
				});
			});
			describe('min, max, find', () => {
				const trials = 100000;
				beforeEach(() => {
					tree = generateTreeWithKeyUpto(trials);
				});
				it('get the node with min key', () => {
					const min = tree.min();
					ensureNodeHasValues(min, { key: 1, value: 'n1' });
				});
				it('get the node with max key', () => {
					const max = tree.max();
					ensureNodeHasValues(max, {
						key: trials,
						value: `n${trials}`,
					});
				});
				describe('Finds a node with a given key', () => {
					it('the first', () => {
						const first = 1;
						ensureNodeHasValues(tree.find(first), {
							key: first,
							value: `n${first}`,
						});
					});
					it('the last', () => {
						const last = trials;
						ensureNodeHasValues(tree.find(last), {
							key: last,
							value: `n${last}`,
						});
					});
					it('the middle value', () => {
						const mid = Math.ceil(trials / 2);
						ensureNodeHasValues(tree.find(mid), {
							key: mid,
							value: `n${mid}`,
						});
					});
					it('returns null if the value is not in the tree', () => {
						//trial +1  and 0 keys are not in the tree.
						expect(tree.find(trials + 1)).toBeNull();
						expect(tree.find(0)).toBeNull();
					});
				});
			});
			describe('Should remove a node from the tree and balance it', () => {
				const trials = 100000;
				beforeEach(() => {
					tree = generateTreeWithKeyUpto(trials);
				});
				it('a node with both the right and the left child.', () => {
					//the key trial/4 will have a right and a left child
					const midValue = Math.ceil(trials / 4);
					removeAndEnsureNodeDoesNotExistAndTreeBalanced(tree, midValue);
				});
				it('a leaf', () => {
					//key 1 is a leaf
					removeAndEnsureNodeDoesNotExistAndTreeBalanced(tree, 1);
				});
			});
			describe('Traversal', () => {
				const trials = 7;
				beforeEach(() => {
					tree = generateTreeWithKeyUpto(trials);
				});
				it('in Order', () => {
					const results = [];
					const cb = node => {
						results.push(node.key);
					};
					tree.traverseInOrder(cb);
					for (let i = 1; i < trials; i++) {
						//read i-1 th value since the array index start at 0 while
						//the read values start at 1
						expect(results[i - 1]).toBe(i);
					}
				});
				it('Pre Order', () => {
					const results = [];
					const cb = node => {
						results.push(node.key);
					};
					tree.traversePreOrder(cb);
					const expected = [4, 2, 1, 3, 6, 5, 7];
					expect(results).toEqual(expected);
				});
				it('Post Order', () => {
					const results = [];
					const cb = node => {
						results.push(node.key);
					};
					tree.traversePostOrder(cb);
					const expected = [1, 3, 2, 5, 7, 6, 4];
					expect(results).toEqual(expected);
				});
			});
		});
	});
});
function ensureNodeHasLeft(node, left) {
	ensureNodeHasValues(node.left, left);
}
function ensureNodeHasRight(node, right) {
	ensureNodeHasValues(node.right, right);
}
function ensureNodeHasChildren(node, left, right) {
	ensureNodeHasLeft(node, left);
	ensureNodeHasRight(node, right);
}
function ensureHasParent(node, parent) {
	ensureNodeHasValues(node.parent, parent);
}
function ensureNodeHasValues(node, keyValuePairs) {
	expect(node).toHaveProperty('key', keyValuePairs.key);
	expect(node).toHaveProperty('value', keyValuePairs.value);
}
function generateTreeWithKeyUpto(trials) {
	const tree = new AvlTree();
	for (let i = 1; i <= trials; i++)
		tree.insert({
			key: i,
			value: `n${i}`,
		});
	return tree;
}

function removeAndEnsureNodeDoesNotExistAndTreeBalanced(tree, key) {
	expect(tree.find(key)).not.toBeNull();
	tree.remove(key);
	ensureIsBalanced(tree.root());
	expect(tree.find(key)).toBeNull();
}

function ensureIsBalanced(node) {
	const heightDifference = Math.abs(
		getHeight(node.getLeft()) - getHeight(node.getRight())
	);
	expect(heightDifference).toBeLessThanOrEqual(1);
}

function getHeight(node) {
	if (!node) return -1;
	return Math.max(getHeight(node.getLeft()), getHeight(node.getRight())) + 1;
}
