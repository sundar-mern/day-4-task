//using IIFE

//a Print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(numbers);

//b Convert all the strings to title caps in a string array

const stringArray = ["hello world", "javascript is awesome", "title case"];

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
})(stringArray);

console.log(stringArray);

//c Sum of all numbers in an array

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const total = (function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
})(numbers);

console.log(total);

//d Return all the prime numbers in an array

const argarr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (function(arr) {
  const isPrime = function(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  };

  return arr.filter(isPrime);
})(argarr);

console.log(primeNumbers);

//e Return all the palindromes in an array

const words = ["racecar", "hello", "level", "world", "deified"];

const palindromeWords = (function(arr) {
  const isPalindrome = function(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  };

  return arr.filter(isPalindrome);
})(words);

console.log(palindromeWords);

//f Return median of two sorted arrays of the same size.

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = (function(arr1, arr2) {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
})(arr1, arr2);

console.log(median);

//g Remove duplicates from an array

const passed = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = (function(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
})(passed);

console.log(uniqueNumbers);

//h Rotate an array by k times

const originalArray = [1, 2, 3, 4, 5];
const k = 2;

const rotatedArray = (function(arr, k) {
  k = k % arr.length;
  const rotated = [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
  return rotated;
})(originalArray, k);

console.log(rotatedArray);
