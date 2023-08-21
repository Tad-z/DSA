// Implementing with linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const topNode = this.top;
            this.top = newNode;
            newNode.next = topNode;
        }
        this.length++
        return this;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.length === 1) {
            this.bottom = null;
            this.top = null;
            this.length--
            return this
        } else {
            const topNode = this.top;
            const nextNode = topNode.next;
            this.top = nextNode
            this.length--
            return this;
        }

    }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(15);
myStack.peek()
myStack.pop();

// implementing with arrays
class Stack2 {
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

const myStack2 = new Stack2();
myStack2.push('google')
myStack2.push('udemy')
myStack2.push('discord')

// implement stack using queue
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
        return this.first.value;
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
    }
    dequeue() {
        if (!this.first) {
            return null
        }
        if (this.length === 1) {
            this.last = null;
            this.first = null;
            this.length--
            return this.first.value
        } else {
            const firstNode = this.first;
            const nextNode = firstNode.next;
            firstNode.next = null
            this.first = nextNode
            this.length--
            return firstNode.value;
        }

    }
    empty() {
        return this.length === 0;
    }
}

class Stack3 {
    constructor() {
        this.queue = new Queue();
    }

    push(value) {
        let rotate = this.queue.length;
        this.queue.enqueue(value);

        while (rotate) {
            this.queue.enqueue(this.queue.dequeue())
            rotate--
        }
    }
    pop() {
        return this.queue.dequeue();
    }

    top() {
        return this.queue.peek()
    }

    empty() {
        this.queue.empty;
    }
}

const myStack3 = new Stack3();
myStack3.push('google')
myStack3.push('udemy')
myStack3.push('discord')