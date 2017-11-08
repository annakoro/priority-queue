class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
		} else if (!this.right) {
			this.right = node;
		}
		node.parent = this;
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
			node.parent = null;
		} else
			if (this.right == node) {
				this.right = null;
				node.parent = null;
			} else throw new Error("passed node is not a child of this node");
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent) {
			// var temp;
			// this.temp = this.parent;
			// this.parent = this;
			// this = this.temp;
		}
	}
}

module.exports = Node;
