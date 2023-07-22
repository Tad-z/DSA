// const nemo = ["nemo"];
// const everyone = ["billy", "mandy", "ben", "emma", "abdul", "kwest", "david", "nemo"]

// function findNemo(array) {
//     let t0 = performance.now()
//     for(i=0; i < array.length; i++) {
//         if (array[i] === 'nemo') {
//             console.log("found nemo");
//         }
//     }
//     let t1 = performance.now()
//     console.log(t1-t0 + "milliseconds");
// }

// findNemo(everyone);

// const boxes = [1,2,3,4,5];

// function pairBoxes(array) {
//     for(let i = 0; i < array.length; i++) {
//         for(j = 0; j < array.length; j++){
//             console.log(array[i],array[j]);
//         }
//     }
// }

// pairBoxes(boxes);

// function printAndSum(numbers) {
//     console.log("numbers:")
//     numbers.forEach(number => {
//         console.log(number);
//     }); 

//     console.log("sums:");
//     numbers.forEach(firstNumber => {
//         numbers.forEach(secondNumber => {
//             console.log(firstNumber + secondNumber);
//         })
//     })
// }

// printAndSum([1,2,3,4,5]) 

// classes in js
class Player {
    constructor(name) {
        this.name = name
    }
   introduce() {
        console.log(`Hi my name is ${this.name}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name)
        this.type = type      
    }
    play() {
        console.log(`My name is ${this.name} and i am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Dave', 'Almighty')
console.log(wizard1.introduce());
console.log(wizard1.play());