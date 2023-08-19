class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
                this.data.length
        }
        return hash;
    }
    // implement this function with a linked
    // list not array later
    set(key, value) {
        let adress = this._hash(key);
        console.log(this.data[adress]);
        if (!this.data[adress]) {
            this.data[adress] = [];
        }
        this.data[adress].push([key, value])
        console.log(this.data);
        return this.data

    }

    get(key) {
        let adress = this._hash(key);
        const currentBucket = this.data[adress]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined

    }
    // without considering collison
    keys() {
        const keysArray = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
    // considering collison
    keys2() {
        const keysArray2 = []
        // loop through all elements
        for (let i = 0; i < this.data.length; i++) {
            // if it is not an empty memory cell
            if (this.data[i]) {
                // if an occupied cell has more than one array
                // / key-value pair
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keysArray2.push(this.data[i][j][0])
                    }
                } else {
                    keysArray2.push(this.data[i][0][0])
                }
            }
        }
        return keysArray2
    }
}

const myHashTable = new HashTable(40 )
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 100);
myHashTable.set('meat', 50);
myHashTable.set('banana', 100);
myHashTable.set('berry', 1000);
myHashTable.get('apples')
myHashTable.keys2()

// First Reccurung character 
function firstReccuringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];   
            }
        }   
    }
    return undefined;
}
firstReccuringCharacter([2,3,4,2,5])

// optimised way
function firstReccuringCharacter2(input) {
    // Step 1: Initialize an empty object named 'map'.
    let map = {}

     // Step 2: Iterate through each element of the 'input' array.
    for (let i = 0; i < input.length; i++) {
        // Step 3: Check if the current element exists as a key in the 'map' object.
        if(map[input[i]] !== undefined) {
             // Step 4: If the element already exists in the 'map', return it as the first recurring character.
            return input[i]
        } else {
            // Step 5: If the element doesn't exist in the 'map', add it as a key with its index as the value.
            map[input[i]] = i
        }
        // Step 6: Print the current state of the 'map' object during each iteration.
        console.log(map);
    }
    // Step 7: If no recurring character is found, return 'undefined'.
    return undefined
}

// firstReccuringCharacter2([2,3,4,2,5]);

function containsCommonItem (arr1, arr2) {
    let map = {}
    for( let i=0; i<arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i]
            map[item] = true
        }
    }

    for( let j=0; j<arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false
}

containsCommonItem([1,4,5,3,2], [2,3,4,5,6])


