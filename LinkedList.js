// singly linked list

class Node {
    constructor(value) {
        this.value = value,
            this.next = null
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value);
        let prevNode = this.head
        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.next
        }
        let nextNode = prevNode.next;
        prevNode.next = newNode
        newNode.next = nextNode
        this.length++
        return myLinkedList.printList()
    }
    remove(index) {
        if (index === 0) {
            let nextNode = this.head.next;
            this.head.next = null
            this.head = nextNode
            return myLinkedList.printList()
        }
        let prevNode = this.head
        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.next
        }
        let targetNode = prevNode.next
        let nextNode = targetNode.next
        prevNode.next = nextNode;
        targetNode.next = null;
        this.length--;
        return myLinkedList.printList()
    }
    reverse() {
        // CONFUSING WAY
        // if(!this.head.next) {
        //     return this.head;
        // }
        // let first = this.head;
        // this.tail = this.head;
        // console.log(first);
        // let second = first.next;
        // console.log(second);
        // while (second) {
        //     const temp = second.next;
        //     console.log(temp);
        //     second.next = first
        //     console.log(first, second);
        //     first = second;
        //     console.log(first, second);
        //     second = temp;
        //     console.log(second, temp);
        // }
        // this.head.next = null
        // console.log(this.head);
        // this.head = first
        // console.log(first);
        // return this

        // Simple way
        if (!this.head.next) {
            return this.head;
        }
        let current = this.head;
        this.tail = this.head;
        let prev = null;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(8)
myLinkedList.insert(1, 20)
myLinkedList.remove(1)
myLinkedList.reverse()


// Doubly linked list

class Node {
    constructor(value) {
        this.value = value,
            this.prev = null,
            this.next = null
    }
}
class DLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            prev: null,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value);
        let prevNode = this.head
        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.next
        }
        let nextNode = prevNode.next;
        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = nextNode
        nextNode.prev = newNode
        this.length++
        console.log(this);
        return myDLinkedList.printList()
    }
    remove(index) {
        if (index === 0) {
            let nextNode = this.head.next;
            nextNode.prev = null;
            this.head.next = null
            this.head = nextNode
            return myDLinkedList.printList()
        }
        else if (index === this.length - 1) {
            let prevNode = this.head
            for (let i = 0; i < index - 1; i++) {
                prevNode = prevNode.next
            }
            let nextNode = prevNode.next;
            nextNode.prev = null;
            prevNode.next = null;
            return myDLinkedList.printList()
        }

        let prevNode = this.head
        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.next
        }
        let targetNode = prevNode.next
        let nextNode = targetNode.next
        prevNode.next = nextNode;
        nextNode.prev = prevNode
        targetNode.next = null;
        targetNode.prev = null;
        this.length--;
        return myDLinkedList.printList()
    }
}

const myDLinkedList = new DLinkedList(10)
myDLinkedList.append(2);
myDLinkedList.append(15);
myDLinkedList.prepend(5);
myDLinkedList.insert(1, 20)
myDLinkedList.remove(3);