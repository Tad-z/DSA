// Creating an array and some of it's operations from scratch
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    pop() {
        delete this.data[this.length-1];
        this.length--;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item
    }
    shiftItems(index) { [1,2,3,4,5,6]
        for(let i = index; i < this.length -1; i++) {
             this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// console.log(newArray);

// Reversing a string
function reverse(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        console.log('PROBLEM');
        return 'Input is not accepted'
    }

    const backwards = []
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards.join(''))
    return backwards.join('')
    
}

function reverse2(str) {
    console.log(str.split('').reverse().join(''))
}

const reverse3 = str => console.log(str.split('').reverse().join(''))

const reverse4 = str => console.log([...str].reverse().join(''))

// reverse4('i am way too fucking good')

// Merge sorted arrays

function mergeSortedArrays(array1, array2) {
    if(array1.length === 0) {
        return array2
    }
    if(array2.length === 0) {
        return array1
    }
    const mergedArray = []
   
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 1;
    let j = 1;

    while (array1Item || array2Item) {
        console.log(array1Item, array2Item)
        if(!array2Item || array1Item < array2Item) {         
            mergedArray.push(array1Item)
            array1Item = array1[i]      
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = array2[j]
            j++
        }
    }
    console.log(mergedArray)
    return mergedArray
}

mergeSortedArrays([0,5,10], [4,7,11, 17])


