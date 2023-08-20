class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const lastNode = this.last;
            lastNode.next = newNode
            this.last = newNode;
        }
        this.length++
        return this;
    }
    dequeue() {
        if (this.length === 1) {
            this.last = null;
            this.first = null;
            this.length--
            return this
        } else {
            const firstNode = this.first;
            const nextNode = firstNode.next;
            this.first = nextNode
            this.length--
            return this;
        }

    }
}

const myQueue = new Queue();
myQueue.enqueue(10)