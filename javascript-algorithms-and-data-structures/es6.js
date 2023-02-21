//Using the function Object.freeeze() to prevent data mutation
const obj = {
    name: 'frecodecamp',
    review: 'awesome'
};
Object.freeze(obj);
obj.review = 'incredible';
obj.newProp = 'anotherProp';
// console.log(obj);


/* When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
const doubler = (item) => item*2; */
const doubler = (item) => {
    return item * 2;
}
// console.log(doubler(4));


//default parameters
const increment = (number, value = 3) => number + value;
// console.log(increment(5));


/* rest parameter. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.*/
const sum = (...args) => {
    return args.reduce((prev, current) => prev + current);
}
// console.log(sum(1, 2, 3, 4));


// Spread operator. ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
const arr1 = ['jan', 'feb', 'mar', 'apr', 'may'];
let arr2;
arr2 = [...arr1];
arr2.push('jun');
// console.log(arr2);


// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
/*This is the usual way to asign an object's value to a variable:
const today = HIGH_TEMPERATURES.today
const tomorrow = HIGH_TEMPERATURES.tomorrow
and this is the way using the destructuring assignment*/
const { today, tomorrow } = HIGH_TEMPERATURES;
//console.log(today); console.log(tomorrow);
/* Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value. */
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
//console.log(highToday); console.log(highTomorrow);
/* Use Destructuring Assignment to Assign Variables from Nested Objects */
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const { today: { low: todayLow, high: todayHigh } } = LOCAL_FORECAST;
//console.log(todayLow); console.log(todayHigh);


//Destructuring Assignment to Assign Variables from Arrays
/* One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables. */
let a = 8, b = 6;
//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a
[a, b] = [b, a];


// Destructuring via rest elements
function removeFirstTwo(list) {
    const [first, second, ...shorterList] = list;
    return shorterList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);


// Use Destructuring Assignment to Pass an Object as a Function's Parameters
// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
//const half = (stats) => (stats.max + stats.min) / 2.0; 
const half = ({ max, min }) => (max + min) / 2.0;
//console.log(half(stats));


// Create Strings using template literals.
const person = {
    nickName: 'Zodiac',
    age: 34,
};
const greeting = `Hello, my name is ${person.nickName}!
and I am ${person.age} years old.`;
//console.log(greeting);
//console.log(person['age'])
/*Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.*/
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arrr) {
    const failureItems = [];
    for (let i = 0; i < arrr.length; i++) {
        failureItems.push(`<li class="text-warning">${arrr[i]}</li>`);
    };
    return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList)