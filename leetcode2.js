// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// To find the single number in the array with linear runtime complexity and constant extra space, 

// you can use the bitwise XOR operation. The XOR of two identical numbers is 0, and XOR of any number with 0 is the number itself.

var singleNumber = function(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
};


// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    let lcount = 1 + maxDepth(root.left);
    let rcount = 1 + maxDepth(root.right);

    let result = Math.max(lcount, rcount);
    return result;
};

