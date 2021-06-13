const Node = require('./node');

class AvlTreeNode extends Node {
	constructor(keyValue) {
		super(keyValue);
		this.height = 1;
	}
	rotateLeft() {
		const right = this.right; // this.right will be re-assigned

		// set the node as a left child of its right child
		if (right !== null) {
			if (right.hasLeft()) {
				right.getLeft().setParent(this);
			}

			// rebase right child to node's right left child.
			this.right = right.getLeft();

			right.setLeft(this);
			right.setParent(this.parent);
		}

		// rebase parent's child to node's right child
		if (this.hasParent() && right !== null) {
			if (this.parent.getKey() < right.getKey()) {
				this.parent.setRight(right);
			} else {
				this.parent.setLeft(right);
			}
		}

		// rebase parent to node's right child
		this.parent = right;

		this.updateHeight();
		if (this.hasParent()) {
			this.parent.updateHeight();
		}

		return this;
	}

	rotateRight() {
		const left = this.left; // this.left will be re-assigned

		// set the node as a right child of its left child
		if (left !== null) {
			if (left.hasRight()) {
				left.getRight().setParent(this);
			}

			// rebase left child to node's left right child.
			this.left = left.getRight();

			left.setRight(this);
			left.setParent(this.parent);
		}

		// rebase parent's child to node's left child
		if (this.hasParent() && left !== null) {
			if (this.parent.getKey() > left.getKey()) {
				this.parent.setLeft(left);
			} else {
				this.parent.setRight(left);
			}
		}

		// rebase parent to node's left child
		this.parent = left;

		this.updateHeight();
		if (this.hasParent()) {
			this.parent.updateHeight();
		}

		return this;
	}

	rotateLeftRight() {
		if (this.hasLeft()) {
			this.left.rotateLeft();
		}
		this.rotateRight();
		return this;
	}

	rotateRightLeft() {
		if (this.hasRight()) {
			this.right.rotateRight();
		}
		this.rotateLeft();
		return this;
	}

	getLeftHeight() {
		return this.hasLeft() ? this.getLeft().getHeight() : 0;
	}
	getRightHeight() {
		return this.hasRight() ? this.getRight().getHeight() : 0;
	}

	updateHeight() {
		this.height = Math.max(this.getLeftHeight(), this.getRightHeight()) + 1;
		return this;
	}

	getHeight() {
		return this.height;
	}

	getBalance() {
		return this.getLeftHeight() - this.getRightHeight();
	}

	isBalanced() {
		const balance = this.getBalance();
		return balance >= -1 && balance <= 1;
	}
}

module.exports = AvlTreeNode;
