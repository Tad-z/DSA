10-- > 5-- > 16

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
        if(index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value);
        let prevNode = this.head
        for(let i = 0; i < index-1; i++) {
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
        for(let i = 0; i < index-1; i++) {
            prevNode = prevNode.next
        }
        let targetNode = prevNode.next
        let nextNode = targetNode.next
        prevNode.next = nextNode;
        targetNode.next = null;
        this.length--;
        return myLinkedList.printList()
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(8)
myLinkedList.insert(1, 20)
myLinkedList.remove(0)