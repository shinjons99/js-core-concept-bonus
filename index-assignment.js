//* Problem 1: Let's play a mind game
//* This function takes a number as an argument and returns the result of a mathematical expressions after checking if the input is a positive number. If the input is not a number, it returns the message "Provide a number". If the input is a negative number, it returns the message "Your input number is negative. Please provide a positive number"
function mindGame(number) {
  if (typeof number !== 'number') {
    return 'Provide a number';
  } else if (number < 0) {
    return 'Your input number is negative. Please provide a positive number';
  } else {
    const multiply = number * 3;
    const addition = multiply + 10;
    const division = addition / 2;
    const subtraction = division - 5;
    return subtraction;
  }
}
const mindGameResult = mindGame(5);
console.log(mindGameResult);
//* Problem 2: Finding even or odd
//* The evenOdd function takes a string as an argument and returns "even" if the length of the string is even or "odd" if the length of the string is odd. If the argument passed is not a string, the function returns the message "Provide string"
function evenOdd(string) {
  if (typeof string !== 'string') {
    return 'Provide string';
  } else if (string.length % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
const evenOddResult = evenOdd('Phero');
console.log(evenOddResult);
//* Problem 3: Is Less or Greater than seven
//* This function takes a number as input and returns either the input minus 7, the input multiplied by 2 if the result of the subtraction is greater than or equal to 7, or a string "Provide a number" if the input is not a number
function isLGSeven(number) {
  if (typeof number !== 'number') {
    return 'Provide a number';
  }
  const result = number - 7;
  if (result < 7) {
    return result;
  } else {
    return number * 2;
  }
}
const isLGSevenResult = isLGSeven(6);
console.log(isLGSevenResult);
//* Problem 4: Finding Bad data
//* This function takes an array as input and returns the number of negative numbers in the array. If the input is not an array, it returns a string "Please Provide Array"
let arr = [-4, -9, -5, -33, -55];
function findingBadData(arr) {
  let negativeCount = 0;
  if (!Array.isArray(arr)) {
    return 'Please Provide Array';
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negativeCount++;
      }
    }
    return negativeCount;
  }
}
const badDataResult = findingBadData(arr);
console.log(badDataResult);
//* Problem 5: Convert your gems into diamond
//* This function calculates the total number of diamonds for three friends based on their gem counts. If the total number of diamonds exceeds 2000, the result is the total minus 2000
function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
  if (
    typeof firstFriend !== 'number' ||
    typeof secondFriend !== 'number' ||
    typeof thirdFriend !== 'number'
  ) {
    return 'Please provide number';
  }

  const firstFriendsDiamond = firstFriend * 21;
  const secondFriendsDiamond = secondFriend * 32;
  const thirdFriendsDiamond = thirdFriend * 43;
  const totalDiamond =
    firstFriendsDiamond + secondFriendsDiamond + thirdFriendsDiamond;
  if (totalDiamond > 1000 * 2) {
    return totalDiamond - 2000;
  } else {
    return totalDiamond;
  }
}
const gemsToDiamondResult = gemsToDiamond(1, 1, 1);
console.log(gemsToDiamondResult);