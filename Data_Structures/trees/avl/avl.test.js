const Node = require('./node');

describe('avl', () => {
	describe('Node Test', () => {
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
