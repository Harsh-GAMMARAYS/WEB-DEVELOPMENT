// WAP to check input a string and the output will be arranged in alaphabetical order

const sortString = (input) => {
  if (typeof input === 'string') {
    const lowerString = input.toLowerCase();
    return lowerString.split('').sort().join('');
  } else {
    return "Input is not a String";
  }
};

console.log(sortString("RaKsHiTa"));
console.log(sortString(12345));   

