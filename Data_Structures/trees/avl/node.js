class BinarySearchTreeNode {
	constructor(keyValuePair) {
		this.key = keyValuePair.key;
		this.value = keyValuePair.value;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	/**
	 * @public
	 * @param {number|string}
	 * @returns {BinarySearchTreeNode}
	 */
	setKey(key) {
		this.key = key;
		return this;
	}

	/**
	 * @public
	 * @return {number|string}
	 */
	getKey() {
		return this.key;
	}

	/**
	 * @public
	 * @param {any} value
	 * @returns {BinarySearchTreeNode}
	 */
	setValue(value) {
		this.value = value;
		return this;
	}

	/**
	 * @public
	 * @return {any}
	 */
	getValue() {
		return this.value;
	}

	/**
	 * @public
	 * @param {BinarySearchTreeNode|null} left
	 * @returns {BinarySearchTreeNode}
	 */
	setLeft(left) {
		if (left && !(left instanceof BinarySearchTreeNode)) {
			throw new Error('setLeft expects a BinarySearchTreeNode or null');
		}

		this.left = left || null;
		return this;
	}

	/**
	 * @public
	 * @return {BinarySearchTreeNode}
	 */
	getLeft() {
		return this.left;
	}

	/**
	 * @public
	 * @return {boolean}
	 */
	hasLeft() {
		return this.left instanceof BinarySearchTreeNode;
	}

	/**
	 * @public
	 * @param {BinarySearchTreeNode|null} right
	 * @returns {BinarySearchTreeNode}
	 */
	setRight(right) {
		if (right && !(right instanceof BinarySearchTreeNode)) {
			throw new Error('setRight expects a BinarySearchTreeNode or null');
		}

		this.right = right || null;
		return this;
	}

	/**
	 * @public
	 * @return {BinarySearchTreeNode}
	 */
	getRight() {
		return this.right;
	}

	/**
	 * @public
	 * @return {boolean}
	 */
	hasRight() {
		return this.right instanceof BinarySearchTreeNode;
	}

	/**
	 * @public
	 * @param {BinarySearchTreeNode} parent
	 * @returns {BinarySearchTreeNode}
	 */
	setParent(parent) {
		if (parent && !(parent instanceof BinarySearchTreeNode)) {
			throw new Error('setParent expects a BinarySearchTreeNode or null');
		}

		this.parent = parent || null;
		return this;
	}

	/**
	 * @public
	 * @return {BinarySearchTreeNode}
	 */
	getParent() {
		return this.parent;
	}

	/**
	 * @public
	 * @return {boolean}
	 */
	hasParent() {
		return this.parent instanceof BinarySearchTreeNode;
	}

	/**
	 * @public
	 * @return {boolean}
	 */
	isRoot() {
		return this.parent === null;
	}

	/**
	 * @public
	 * @return {boolean}
	 */
	isLeaf() {
		return !this.hasLeft() && !this.hasRight();
	}
}

module.exports = BinarySearchTreeNode;
