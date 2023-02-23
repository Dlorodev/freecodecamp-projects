// Using the test method
/* Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.
JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not. */
let myString = 'Hello World!';
let myRegex = /Hello/;
//console.log(myRegex.test(myString));

// Ignore case while matching
/* Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.
You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase. */
let myString2 = 'FreeCodeCamp';
let fccRegex = /freecodecamp/i;
//console.log(fccRegex.test(myString2));

// Extract Matches
/* So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.
To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let resultExtract = extractStr.match(codingRegex);
//console.log(resultExtract);

// Find More Than the First Match
// To search or extract a pattern more than once, you can use the global search flag: g.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let resultMultiple = twinkleStar.match(starRegex);
//console.log(resultMultiple);

// Match Anything with Wildcard Period
/*Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .
The wildcard character . will match any one character. The wildcard is also called dot and period.*/
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let resultPeriod = unRegex.test(exampleStr);
//console.log(resultPeriod);

// Match Single Character With Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let resultCharacterClase = vowelRegex.test(quoteSample);
//console.log(resultCharacterClase);
//console.log(quoteSample.match(vowelRegex));

//Match Letters of the Alphabet
/* You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
Inside a character set, you can define a range of characters to match using a hyphen character: -. */
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let resultHyphen = quoteSample2.match(alphabetRegex);
//console.log(resultHyphen);

//Match Numbers And Letters of The Alphabet
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let numberLetterRegex = /[h-s2-6]/ig;
let resultNumber = quoteSample3.match(numberLetterRegex);
//console.log(resultNumber);

// Match Single Characters Not Specified
/* So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.
To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match. */
let quoteSample4 = "3 blind mice.";
let negativeRegex = /[^3aeiou]/ig;
let resultNegative = quoteSample4.match(negativeRegex);
console.log(resultNegative);