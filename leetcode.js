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


class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
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



// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
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



