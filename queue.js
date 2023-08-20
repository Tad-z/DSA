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
        if(!this.first) {
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
            this.first = nextNode
            this.length--
            return this;
        }

    }
}

const myQueue = new Queue();
myQueue.enqueue(10)

// implement a queue using a stack
class Stack {
    constructor() {
        this.array = []
    }
    peek() {
        return this.array[this.array.length-1]
    }
    push(value) {
        this.array.push(value)
        return this;
    }
    pop() {
        this.array.pop()
        return this;
    }
}

const myStack = new Stack();
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')

class Queue2 {
    constructor(value) {
        this.stack = new Stack()
    }

    peek() {
        return this.stack
    }
}