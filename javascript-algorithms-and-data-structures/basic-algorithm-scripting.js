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