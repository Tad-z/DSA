// Edge List
// This simply shows the connection;
// 0 is connected to 2 and vice versa, 
// 2 is connected to 3 and vice versa,
// e.t.c.
const graph = [[0,2], [2,3], [2,1], [1,3]];

// Adjacent List
// The index of the array is the value of 
// the actual graph node
// index 0 which is now treated like value 0
// is connected to 2
// 1 is connected to 2 and 3
// 2 is connected to 0,1 and 3
// and 3 is connected to 1 and 2

// can use objects if the node value is 
// not an index.

const graph2 = [[2], [2,3], [0,1,3], [1,2]]
const graph3 = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,2],
}

// Adjacent matrix
// 0 is onnected to 2
// 1 is connected to 2 and 3 e.t.c.
const graph4 = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]
const graph5 = {
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0]
}