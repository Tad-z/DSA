const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// Bubble sort
function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                // swap
                let temp = array[j]
                console.log("1", array);
                array[j] = array[j + 1]
                console.log("2", array);
                array[j + 1] = temp
                console.log("3", array);
            }
        }
    }
}

bubbleSort(numbers)
console.log(numbers)

// selection sort
function selectionSort(array) {
    let length = array.length;
    let position = 0
    for (let i = 0; i < length; i++) {
        let smallest = array[i]
        for (let j = i + 1; j < length; j++) {
            if (array[j] < smallest) {
                smallest = array[j]
                position = j
            }
        }
        let temp = smallest
        console.log("1", array);
        array[position] = array[i]
        console.log("2", array);
        array[i] = temp
        console.log("3", array);
    }
}

selectionSort(numbers)
console.log(numbers)

// Insertion sort
// function insertionSort(array) {
//   const length = array.length;
// 	for (let i = 0; i < length; i++) {
// 		if (array[i] < array[0]) {
//       //move number to the first position
//       array.unshift(array.splice(i,1)[0]);
//     } else {
//       // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
//       if (array[i] < array[i-1]) {
//         //find where number should go
//         for (var j = 1; j < i; j++) {
//           if (array[i] >= array[j-1] && array[i] < array[j]) {
//             //move number to the right spot
//             array.splice(j,0,array.splice(i,1)[0]);
//           }
//         }
//       }
//     }
// 	}
// }

// insertionSort(numbers);
// console.log(numbers);

function insertionSort(arr) {
    const length = arr.length;

    for (let i = 1; i < length; i++) {
        let currentElement = arr[i];
        console.log("curr", currentElement);

        let j = i - 1;

        // Iterate backwards through the sorted portion of the array
        // and shift elements greater than the current element to the right
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            console.log("j1", arr[j + 1])
            j--;
            console.log(j);
        }

        arr[j + 1] = currentElement;
        console.log("j1", arr[j + 1]);
        console.log("arr", arr);
    }


    return arr;
}

const unsortedArray = [5, 2, 9, 1, 5, 6];

const sortedArray = insertionSort(unsortedArray);

console.log(sortedArray);

const numberss = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
function mergeSort(array) {
    if(array.length === 1) {
        return array
    }

    let left = array.slice(0, array.length / 2);
    let right = array.slice(array.length / 2, array.length);
    // console.log(left, right);


    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    console.log({result})
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    

}

const answer = mergeSort(numberss)
console.log({answer})

