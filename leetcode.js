function twoSums(array, target) {
    const output = []
    for (let i = 0; i <= array.length - 1; i++) {
        for (let j = i + 1; j <= array.length - 1; j++) {
            console.log(array[i] + array[j]);
            if (array[i] + array[j] === target) {
                output.push(i, j);
                break
            }

        }
    }
    console.log(output);
}

// twoSums([2,7,11,15], 13);

// optimised for speed
function twoSums(nums, target) {
    // Create a map to store the elements and their indices
    const output = new Map()
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement (the number needed to reach the target)
        let complement = target - nums[i];

        // Check if the complement is already in the map
        if (output.has(complement)) {
            // If found, return the indices of the two numbers
            return [output.get(complement), i]
        }
        // If the complement is not in the map, add the current number and its index
        output.set(nums[i], i)

    }
    console.log(output)
    return []
}

twoSums([2, 7, 11, 15], 9)

// return true for numbers like 121, 131 becuase they are the same backwards and forward
//  false for numbers like 20, 30 e.t.c

function isPalindrome(x) {
    let s = x.toString();
    let array = []
    let length = s.length - 1
    for (let i = length; i >= 0; i--) {
        array.push(s[i])
    }
    const reverse = parseInt(array.join(""))
    return x === reverse
};

// An algorithm to convert roman numerals to integers
function romanToInt(s) {
    const conversion = {
        'I': 1,
        'V': 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let sum = 0
    for (let i = 0; i < s.length; i++) {
        let current = conversion[s[i]];
        let next = conversion[s[i + 1]]

        if (next && next > current) {
            sum += next - current
            i++
        } else {
            sum += current
        }
    }

    return sum
};

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


function longestCommonPrefix(strings) {
    if (!strings || strings.length === 0) {
        return "";
    }

    let commonPrefix = strings[0];

    for (let i = 1; i < strings.length; i++) {
        const currentString = strings[i];
        let j = 0;

        // Compare characters of the common prefix and the current string
        while (j < commonPrefix.length && j < currentString.length && commonPrefix[j] === currentString[j]) {
            j++;
            console.log(commonPrefix.substring(0, j))
        }

        // Update the common prefix based on the comparison
        commonPrefix = commonPrefix.substring(0, j);

        if (commonPrefix === "") {
            break;
        }
    }

    return commonPrefix;
}

// Example usage:
const array_of_strings = ["flower", "flow", "flight"];
const result = longestCommonPrefix(array_of_strings);
console.log(result);

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i];

        if (currentBracket in brackets) {
            // It's an opening bracket, push to the stack
            stack.push(currentBracket);
        } else {
            // It's a closing bracket
            const lastOpenBracket = stack.pop();

            // Check if the corresponding opening bracket matches
            if (brackets[lastOpenBracket] !== currentBracket) {
                return false;
            }
        }
    }

    // The stack should be empty if all brackets are properly closed
    return stack.length === 0;
}



// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0)
    let current = dummy

    console.log(list1)
    while (list1 != null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    if (list1 !== null) {
        current.next = list1
    } else {
        current.next = list2
    }

    return dummy.next
}

// Helper function to create a linked list from an array
// function arrayToList(arr) {
//     let dummy = new ListNode(-1);
//     let current = dummy;
//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }
//     return dummy.next;
// }

// Helper function to convert a linked list to an array
// function listToArray(head) {
//     let result = [];
//     while (head !== null) {
//         result.push(head.val);
//         head = head.next;
//     }
//     return result;
// }

// const list1 = arrayToList([1, 2, 4]);
// const list2 = arrayToList([1, 3, 4]);

// const mergedList = mergeTwoLists(list1, list2);
// console.log(listToArray(mergedList));



// Given an integer array nums sorted in non-decreasing order, 

// remove the duplicates in-place such that each unique element appears only once. 

// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 

// The remaining elements of nums are not important as well as the size of nums.
// Return k.

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1)
            i--
        }
    }

    return nums.length
};

// or

function removeDuplicates(nums) {
    let k = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};


// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.


function removeElement(nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack.


var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) {
        return -1;
    }
    if (haystack === needle) return 0

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i
        }
    }
    return -1
};


// or

var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) {
        return -1;
    }

    if (haystack === needle) {
        return 0;
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        for (let j = 0; j < needle.length && haystack[i + j] === needle[j]; j++) {
            if (j === needle.length - 1) {
                return i;
            }
        }
    }

    return -1;
};

// Given a sorted array of distinct integers and a target value, 

// return the index if the target is found. 

// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


// o(n)
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
        if (nums[i] > target) {
            return i
        }
        if (target > nums[nums.length - 1]) {
            return nums.length
        }
    }
};

// o(log n)

var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left; // Return the index where the target would be inserted
};

// You are given two non-empty linked lists representing two non-negative integers. 

// The digits are stored in reverse order, and each of their nodes contains a single digit. 

// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        const x = (l1 !== null) ? l1.val : 0;
        const y = (l2 !== null) ? l2.val : 0;

        const sum = x + y + carry;
        carry = sum > 9 ? 1 : 0

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
};



// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let map = {};
    let result = 0

    for (let end = 0; end < s.length; end++) {
        let currentChar = s[end];

        // If the current character is already in the substring,
        // increment the start pointer based on it's previous index 
        if (map[currentChar] !== undefined && map[currentChar] >= start) {
            start = map[currentChar] + 1
        }

        // Update the character's last index in the map
        map[currentChar] = end

        result = Math.max(result, end - start + 1)

    }

    return result

}

// or

var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let ans = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left += 1;
            console.log("left", left)
        }
        set.add(s[right]);
        console.log("right", right)
        ans = Math.max(ans, right - left + 1)
    }
    console.log(set)
    return ans;
};

// Example usage:
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

// Given a string s, return the longest palindromic substring in s.function isPalindrome(str) {
function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var longestPalindrome = function (s) {
    let ans = ""
    if (s.length <= 1) {
        return s
    }
    if (isPalindrome(s)) {
        return s
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub = s.substring(i, j)
            let isPandi = isPalindrome(sub)
            if (sub.length > ans.length && isPandi) {
                ans = sub
            }
        }
    }
    return ans
};

// or


var longestPalindrome = function (s) {
    if (s === [...s].reverse().join('')) {
        return s;
    }

    if (s.length <= 1) {
        return s
    }

    let max = "";

    for (let i = 0; i < s.length; i++) {
        let max1 = match(i, i);
        let max2 = match(i, i + 1)
        if (max1.length > max.length) {
            max = max1
        }
        if (max2.length > max.length) {
            max = max2
        }
    }

    return max;

    function match(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right)
    }

};

console.log(longestPalindrome("babad"))

// Given a signed 32-bit integer x, return x with its digits reversed. 

// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
var reverse = function (x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    let res = 0;
    let flag = x < 0 ? -1 : 1;

    x *= flag;

    while (x != 0) {
        let rem = x % 10;
        x = Math.floor(x / 10);


        if (res > (INT_MAX - rem) / 10) {
            return 0;
        }

        res = res * 10 + rem;
    }

    return flag * res;

};

var intToRoman = function (num) {
    let str = "";
    const conversion = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }


    for (key in conversion) {
        str += key.repeat(Math.floor(num / conversion[key]));
        num = num % conversion[key];
    }

    return str
};

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 

// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
var threeSum = function (nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
        let target = -nums[i]

        while (left < right) {
            let sum = nums[left] + nums[right]
            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate values for the second element
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                // Skip duplicate values for the third element
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }


                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result
};

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.


var threeSumClosest = function (nums, target) {
    let closest = Infinity;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum === target) {
                return sum

            } else if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }
    return closest
};

var letterCombinations = function (digits) {
    if (!digits) {
        return [];
    }

    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    function backtrack(index, path) {
        if (index === digits.length) {
            combinations.push(path.join(''))
            return
        }

        let letters = map[digits[index]];

        for (let letter of letters) {
            path.push(letter)
            backtrack(index + 1, path)
            path.pop()
        }
    }

    let combinations = []
    backtrack(0, [])
    return combinations
};

var isValidBST = function (root) {
    if (!root) {
        return true
    }
    return traverse(root, -Infinity, Infinity)
}

function traverse(node, min, max) {
    if (!node) {
        return true
    }

    if (node.val <= min || node.val >= max) {
        return false
    }

    return (
        traverse(node.left, min, node.val) &&
        traverse(node.right, node.val, max)
    )

}

// You are a professional robber planning to rob houses along a street. 

// Each house has a certain amount of money stashed, 

// the only constraint stopping you from robbing each of them is that 

// adjacent houses have security systems connected and it will automatically contact the police 

// if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house,

// return the maximum amount of money you can rob tonight without alerting the police.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
var rob = function (nums) {
    let prev1 = 0;
    let prev2 = 0;
    for (let num of nums) {
        let temp = prev1
        prev1 = Math.max(prev2 + num, prev1)
        prev2 = temp
    }
    return prev1
};

var rob = function (nums) {
    const n = nums.length;
    if (n == 1) return nums[0];

    let memo = new Array(n + 1);
    memo[0] = 0;
    memo[1] = nums[0];
    for (let i = 2; i < nums.length; i++) {
        let val = nums[i];
        memo[i + 1] = Math.max(memo[i], memo[i - 1] + val)
    }
    return memo[nums.length];
};

var rob = function (nums) {
    if (nums.length === 1) return nums[0]
    const dp = [nums[0]];
    dp[1] = nums[1]
    for (let i = 2; i < nums.length; i++) {
        let max = Math.max(dp[i - 2], dp[i - 3] || 0)
        console.log(nums[i], max)
        dp[i] = nums[i] + max;
    }
    return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
};

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
    let maxProfit = 0;
    let cheapest = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (cheapest > prices[i]) {
            cheapest = prices[i]
        } else {
            maxProfit = Math.max(prices[i] - cheapest, maxProfit)
        }
    }
    return maxProfit
};

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function (n) {
    if (n == 1) {
        return 1
    }

    if (n == 2) {
        return 2
    }

    const steps = new Array(n + 1).fill(0)

    steps[1] = 1;
    steps[2] = 2;

    for (let i = 3; i <= n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2]
    }
    return steps[n]
};

// or 

function climbStairs(n) {
    return memo(n, {})

}

function memo(n, cache) {
    if (n in cache) {
        return cache[n]
    } else {
        if (n == 1) {
            return 1
        }

        if (n == 2) {
            return 2
        }

        cache[n] = memo(n - 1, cache) + memo(n - 2, cache)
        return cache[n]
    }
}
