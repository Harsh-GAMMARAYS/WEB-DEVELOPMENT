// WAP to find the maximum number using reduce

const arr = [2,5,7,9,22,64];

const maxNum = arr.reduce((acc, current) => {
  return acc > current ? acc : current;
}, arr[0]);

console.log(maxNum);

// WAP to find weather the number is palindrome or not -- also for string
// WAP to take input a string and output should be arranged in alaphabetical order
// WAP to input an sentence and make first letter of each word in the sentence capital.
// Take input a string and display all the possible combinations of that string. 

