// WAP to swap two numbers

const swapFunction = (a ,b) => {
    [a, b] = [b, a];
    return [a, b];
}

console.log(swapFunction(5,4));

// WAP to convert decimal to hexadecimal

// WAP to count the number of vowels in the string using functions

const countVowels = str => {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

let inputString = "Hello, World!";
let vowelCount = countVowels(inputString);
console.log("Number of vowels:", vowelCount); 



