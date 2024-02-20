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

// Given a string columnTitle that represents the column title as appears in an Excel sheet, 
// return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 

var titleToNumber = function(s) {
    let conversion = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    }

    let result = 0
    for (let i = 0; i < s.length; i++) {
        if (s.length == 1) {
            return conversion[s[i]]
        } else {
            result += conversion[s[i]] * 26**(s.length - i - 1)
        }
    }
    return result
};

// or

var titleToNumber = function (columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let charValue = columnTitle.charCodeAt(i) - 64;
        console.log(charValue)
        result = result * 26 + charValue;
    }
    return result;
};


// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 

// You may assume that the majority element always exists in the array.

// boyer-moore-majority-voting-algorithm
var majorityElement = function (nums) {
    let count = 1;
    let currElement = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == currElement) {
            count++;
        } else {
            count--;
        }
        if (count < 0) {
            currElement = nums[i];
            count = 1;
        }
    }

    return currElement;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next
};
