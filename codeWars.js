// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let list = [];

  for (let i = 0; i < a.length; i++) {
    let found = false;

    for (let j = 0; j < b.length; j++) {
      console.log(a[i], b[j])
      if (a[i] === b[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      list.push(a[i]);
    }
  }

  console.log(list);
  return list;
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// can also use sorting algorithms

function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}



//   In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.

function nbYear(p0, percent, aug, p) {
  percent = percent / 100;
  let n = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * percent + aug)
    n++
  }
  return n
}

// You are going to be given a word. 
// Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  const length = s.length;

  function isEven(len) {
    return len % 2 === 0;
  }

  const result = isEven(length);
  const array = s.split("");

  if (result) {
    const halfLength = length / 2;
    return `${array[halfLength - 1]}${array[halfLength]}`;
  } else {
    const halfLength = Math.ceil(length / 2);
    return `${array[halfLength - 1]}`;
  }
}



