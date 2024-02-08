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

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
var moveZeroes = function(nums) {
    if (nums.length == 1) {
        return nums;
    }
    let p1 = 0;
    let p2 = 0;
    while (p1 < nums.length && p2 < nums.length) {
        if (nums[p2] != 0) {
            let temp = nums[p1];
            nums[p1] = nums[p2];
            nums[p2] = temp;
            p1++
        }
        p2++
    }
    return nums
};

// or

var moveZeroes = function(nums) {
    let nonZeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[nonZeroCount] = nums[i];
            nonZeroCount++;
        }
    }

    for (let i = nonZeroCount; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// Given the head of a singly linked list, reverse the list, and return the reversed list.
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
};

