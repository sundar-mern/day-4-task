//Using an Anonymous Function

//a Print odd numbers in an array

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

printOddNumbers(Numbers);


//b Convert all the strings to title caps in a string array

const stringArray = ["hello world", "javascript is awesome", "title case"];

const convertToTitleCaps = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  return arr;
};

const titleCapsArray = convertToTitleCaps([...stringArray]);
console.log(titleCapsArray);


//c Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

console.log(sum(numbers));

//d Return all the prime numbers in an array

const argarr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = function(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const primeNumbers = function(arr) {
  return arr.filter(isPrime);
};

console.log(primeNumbers(argarr));

//e Return all the palindromes in an array

const words = ["racecar", "hello", "level", "world", "deified"];

const isPalindrome = function(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
};

const palindromeWords = function(arr) {
  return arr.filter(isPalindrome);
};

console.log(palindromeWords(words));


//f Return median of two sorted arrays of the same size

const findMedian = function(arr1, arr2) {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      return merged[mid];
    }
  };
  
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  
  console.log(findMedian(arr1, arr2));

  //g Remove duplicates from an array

  const removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  };
  
  const parseint = [1, 2, 2, 3, 4, 4, 5];
  
  console.log(removeDuplicates(parseint));
  
  //h Rotate an array by k times

  const rotateArray = function(arr, k) {
    k = k % arr.length;
    const rotated = [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
    return rotated;
  };
  
  const originalArray = [1, 2, 3, 4, 5];
  const k = 2;
  
  console.log(rotateArray(originalArray, k));
  