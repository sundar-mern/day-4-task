//Arrow functions.


//a Print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = (arr) => {
  arr.forEach((number) => {
    if (number % 2 !== 0) {
      console.log(number);
    }
  });
};

printOddNumbers(numbers);

//b Convert all the strings to title caps in a string array

const stringArray = ["hello world", "goodbye universe", "javascript is fun"];

const convertToTitleCase = (str) => {
  return str.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
};

const titleCaseArray = stringArray.map((str) => convertToTitleCase(str));

console.log(titleCaseArray);


//c Sum of all numbers in an array

const Numbers = [1, 2, 3, 4, 5];

const sum = (arr) => {
  let result = 0;
  arr.forEach((number) => {
    result += number;
  });
  return result;
};

console.log(sum(Numbers));

//d Return all the prime numbers in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const primeNumbers = arr.filter((arr) => isPrime(arr));

console.log(primeNumbers); 

//e Return all the palindromes in an array

const words = ["radar", "level", "hello", "world"];

const isPalindrome = (word) => {
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedWord = cleanWord.split("").reverse().join("");
  return cleanWord === reversedWord;
};

const palindromes = words.filter((word) => isPalindrome(word));

console.log(palindromes); // Output: ["radar", "level"]
