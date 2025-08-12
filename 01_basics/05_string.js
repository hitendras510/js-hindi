// A JavaScript String is a sequence of characters, typically used to represent text.
// In JavaScript, you can choose single quotes ('),
//  double quotes ("), or backticks (`) to wrap your
//  strings in. All of the following will work:
// Strings declared using backticks are a special
//  kind of string called a template literal.
//A better way to break a string is by using the string addition.



const name = "hitendra"
const repocount = 50

// console.log(name + repocount + "value "); it is outdated

// use this below one , {placeholder used}
console.log(` Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String(`hitendra`)
console.log(gamename[0]);


console.log(gamename.length);
//Convert a string to uppercase and lowercase using toUpperCase() and toLowerCase() methods.
console.log(gamename.toUpperCase());
console.log(gamename.charAt());
console.log(gamename.indexOf('d'));

// const newString = gamename.slice(-8,4)
// console.log(anotherstring); this is another way of describing the sentences
// you can even enter negative value it will assign in reverse order

// another method trim or replace
const newstringone = " hitendra   "
console.log(newstringone);
console.log(newstringone,trim());
 
const url = "https://hitendra.com%69singh"
console.log(url.replace('%69', '-'))

// means does it include or not 
// console.log(url.includes('sundar')) false