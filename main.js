// age
const myAge = 34;

// creates variable for early years of dog
let earlyYears = 2

earlyYears *= 10.5;

// variable for later years of dog
let laterYears = myAge - 2;

// calculate later years in dog years
laterYears *= 4

console.log(earlyYears);
console.log(laterYears);

// takes our early dog years and later years and gives us total age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// returns my name in lower case.
const myName = 'Lyndsey'.toLowerCase()
console.log(myName);

console.log('My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years');
