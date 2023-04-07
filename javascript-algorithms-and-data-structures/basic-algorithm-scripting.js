//Reverse a string
/* Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh". */
/*function reverseString(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString("hello"));
*/

//Factorialize as number
/* Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function. */
/*function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}
console.log(factorialize(5));
*/

//Find the longest word in a string
/* Return the length of the longest word in the provided sentence.
Your response should be a number. */
/*function findLongestWordLength(str) {
    let arr = str.split(' ');
    let track = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > track.length) {
            track = arr[i];
        };
    }
    return track.length;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
*/

//Return largest numbers in arrays
/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */
/*function largestOfFour(arr) {
    let largestArr = [];
    for (let i = 0; i < arr.length; i++) {
        let track = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > track) {
                track = arr[i][j];
            }
        }
        largestArr.push(track);
    }
    return largestArr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
*/


// Repeat a String Repeat a String
/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method. */
/*function repeatStringNumTimes(str, num) {
    let newStr = '';
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
}
console.log(repeatStringNumTimes('abc', 4))
*/


// Truncate a string
/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */
/*function truncateString(str, num) {
    if(str.length > num){
      return str.slice(0, num) + "..."
    }else{
      return str
    }
  }
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  */


// Finders keepers
/* Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined. */


// Title Case a Sentence
/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of. */
/*function titleCase(str) {
    let thisArr = str.split(' ')
    let newArr = [];
    let newStr = '';
    for (let i = 0; i < thisArr.length; i++) {
        newArr.push(thisArr[i][0].toUpperCase() + thisArr[i].slice(1).toLowerCase());
    }
    newStr = newArr.join(' ');
    return newStr;
}
console.log(titleCase('sHoRt AnD sToUt'))*/


//Falsy Bouncer
/* Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */
/*function bouncer(arr) {
    let trueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            trueArr.push(arr[i]);
        };
    }
    return trueArr;
}
console.log(bouncer([7, "ate", "", false, 9]));*/


//Mutations
/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien. */
function mutation(arrMut) {
    let arrStr1 = arrMut[0].toLowerCase().split("");
    let arrStr2 = arrMut[1].toLowerCase().split("");

    for (let i = 0; i < arrStr2.length; i++) {
        if (arrStr1.indexOf(arrStr2[i]) < 0) {
            return false;
        }; 
    };
    return true;
};
console.log(mutation(["hello", "Hello"]))