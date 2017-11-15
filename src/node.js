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
				var granddad = this.parent.parent;
				var dad = this.parent;
				var node;
				var leftSon = this.left;
				var rightSon = this.right;
	
				if (granddad) {
					if (this.parent === granddad.left) {
						granddad.left = this;
					} else if (this.parent === granddad.right) {
						granddad.right = this;
					}
				}
	
				if (this === dad.left){
					node = this.parent.right;
					this.right = node;
					this.left = dad;
				} else if (this === dad.right){
					node = this.parent.left;
					this.left = node;
					this.right = dad;
				}
	
				this.parent = granddad;
	
				if (node) { node.parent = this };
				dad.parent = this;
				dad.left = leftSon;
				dad.right = rightSon;
				if (leftSon) { leftSon.parent = dad };
				if (rightSon) { rightSon.parent = dad };
			}
		}
	}

module.exports = Node;
