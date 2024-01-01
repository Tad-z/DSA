function twoSums(array, target) {
    const output = []
    for(let i = 0; i <= array.length-1; i++) {
       for(let j = i + 1; j <= array.length-1; j++){
        console.log(array[i] + array[j]);
        if (array[i] + array[j] === target) {
            output.push(i,j);
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
        if(output.has(complement)) {
             // If found, return the indices of the two numbers
            return [output.get(complement), i]
        }
         // If the complement is not in the map, add the current number and its index
        output.set(nums[i], i)
    
    }
    console.log(output)
    return []
}

twoSums([2,7,11,15], 9)

// return true for numbers like 121, 131 becuase they are the same backwards and forward
//  false for numbers like 20, 30 e.t.c

function isPalindrome (x) {
    let s = x.toString();
    let array = []
    let length = s.length - 1
    for (let i = length; i>=0; i--) {
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
        let next = conversion[s[i+1]]

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
       if(list1.val < list2.val) {
           current.next = list1
           list1 = list1.next
       } else {
           current.next = list2
           list2 = list2.next
       }
       current = current.next
   }

   if(list1 !== null) {
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

var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1,1)
            i--
        }
    }

    return nums.length
};

// or

function removeDuplicates(nums) {
    let k = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
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

 
var strStr = function(haystack, needle) {
    if(needle.length > haystack.length) {
        return -1;
    } 
    if(haystack === needle) return 0

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i
        }
    }
    return -1
};


// or

var strStr = function(haystack, needle) {
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
var searchInsert = function(nums, target) {
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

var searchInsert = function(nums, target) {
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

var addTwoNumbers = function(l1, l2) {
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

var lengthOfLongestSubstring = function(s) {
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
        console.log("right",right)
        ans = Math.max(ans, right - left + 1)
    }
    console.log(set)
    return ans;
};

// Example usage:
const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));



