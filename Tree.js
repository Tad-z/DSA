class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                console.log("left", currentNode);
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left
            } else {
                console.log("right", currentNode);
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right
            }

        }
    }
    lookup(value) {
        if(!this.root) {
            return false
        }
        let currentNode = this.root;
        if(value === currentNode.value) {
            return currentNode
        }
        while(currentNode) {
            if(value < currentNode.value) {
                if (value === currentNode.value) {
                    return currentNode
                }
                currentNode = currentNode.left
            } else {
                if (value === currentNode.value) {
                    return currentNode
                }
                currentNode = currentNode.right
            }
        }
        return false;
    }
    remove(value)
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(1);
tree.insert(15);

JSON.stringify(traverse(tree.root))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
        traverse(node.left);
    tree.right = node.right === null ? null :
        traverse(node.right);
    return tree
}