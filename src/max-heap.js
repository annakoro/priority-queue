const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		this.node = new Node(data, priority);
		this.insertNode(this.node);
		this.shiftNodeUp(this.node);
	}

	pop() {

	}

	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	isEmpty() {
		return this.root === null;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if(this.isEmpty) this.root = node;
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
