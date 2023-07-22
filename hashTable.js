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
    set(key, value) {
        let adress = this._hash(key);
        console.log(adress);
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

// const myHashTable = new HashTable(40 )
// myHashTable.set('grapes', 10000);
// myHashTable.set('apples', 100);
// myHashTable.set('meat', 50);
// myHashTable.set('banana', 100);
// myHashTable.set('berry', 1000);
// myHashTable.get('apples')
// myHashTable.keys2()

// First Reccurung character 
function firstReccuringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; i < input.length; j++) {
        }
    }

}

firstReccuringCharacter([2,5,1,2,3,5,1,2,4])
