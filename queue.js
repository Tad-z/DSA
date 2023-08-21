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
        if (!this.first) {
            return null
        }
        if (this.length === 1) {
            this.last = null;
            this.first = null;
            this.length--
            return this
        } else {
            const firstNode = this.first;
            const nextNode = firstNode.next;
            firstNode.next = null
            this.first = nextNode
            this.length--
            return this;
        }

    }
}

const myQueue = new Queue();
myQueue.enqueue(10)

// implement a queue using a stack
class Queue2 {
    constructor() {
        this.pushStack = [];
        this.popStack = []
    }

    push(value) {
        // just push inside the push stack
        while (this.popStack.length) {
            this.pushStack.push(this.popStack.pop())
        }
        this.pushStack.push(value)
        return this
    }
    pop() {
        // if the pop stack is empty
        if (!this.popStack.length) {
            // while there are elements in the push stack
            while (this.pushStack.length) {
                // pour all the items in the push stack to the pop stack
                this.popStack.push(this.pushStack.pop())
            }
        }
        // pop the last item in the pop stack which is the first item in the queue
        return this.popStack.pop()
    }
    peek() {
        if (!this.popStack.length) {
            // while there are elements in the push stack
            while (this.pushStack.length) {
                // pour all the items in the push stack to the pop stack
                this.popStack.push(this.pushStack.pop())
            }
        }
        // return the last item in the popstack which is the first item in the queue
        return this.popStack[this.popStack.length - 1]
    }
    empty() {
        return !this.popStack.length && !this.pushStack.length
    }
}

const myQueue2 = new Queue2
myQueue2.push(10)