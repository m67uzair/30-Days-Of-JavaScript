// Develop a small script which generate array of 5 random numbers and the numbers must be unique

let randomNum = [];
let num = 0;
let index = 1;

while (index < 6) {
  num = Math.floor(Math.random() * 100 + 1);

  if (randomNum.includes(num)) {
    continue;
  } else {
    randomNum.push(num);
    index++;
  }
}

// console.log(randomNum);

// Develop a small script which generate a six characters random id:
let strKey = "";
for (let i = 0; i <= 5; i++) {
  strKey += String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
}
// console.log(strKey);

let strKey1 = "";
let range = Math.floor(Math.random() * 100 + 1);
for (let i = 0; i <= range; i++) {
  strKey1 += String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
}
// console.log(strKey1);

// Exercises: Level 2
//1. Develop a small script which generate any number of characters random id:

//48 to 57 digits
//97 to 122 small abc
// 65 to 90 capital abc
let smallAbc = [];
let capitalAbc = [];
let digits = [];
let allChars = [];
let char;

for (let i = 97; i <= 122; i++) {
  char = String.fromCharCode(i);
  smallAbc.push(char);
}
for (let i = 65; i <= 90; i++) {
  char = String.fromCharCode(i);
  capitalAbc.push(char);
}
for (let i = 48; i <= 57; i++) {
  char = String.fromCharCode(i);
  digits.push(char);
}

allChars = smallAbc.concat(capitalAbc, digits);

let strKey2 = "";
let range2 = Math.floor(Math.random() * 100 + 1);
for (let i = 0; i <= range; i++) {
  strKey2 += allChars[Math.floor(Math.random() * 62 + 1)];
}

// console.log(strKey2);

//2. Write a script which generates a random hexadecimal number.

let hex = "#";
let hexArray = digits.concat(smallAbc.slice(0, 6));
let range3 = Math.floor(Math.random() * 10 + 1);

for (let i = 0; i < range3; i++) {
  hex += hexArray[Math.floor(Math.random() * 16 + 1)];
}

// console.log(hex);

//3. Write a script which generates a random rgb color number.

let rgbArray = [];
let rgb = "rgb(";

for (let i = 0; i < 3; i++) {
  rgbArray[i] = Math.floor(Math.random() * 250 + 1);
  rgb += rgbArray[i];

  if (i != 2) {
    rgb += ", ";
  }
}
rgb += ")";
// console.log(rgb);
document.querySelector("h1").style.color = rgb;

// 4.Using the above countries array, create the following new array.

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let countriesUppercase = [];

for (let i = 0; i < countries.length; i++) {
  countriesUppercase.push(countries[i].toUpperCase());
}
// console.log(countriesUppercase);

// 5. Using the above countries array, create an array for countries length'.

let countriesLength = [];

for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
// console.log(countriesLength);

// 6. Use the countries array to create the following array of arrays:

// [
// ['Albania', 'ALB', 7],
// ['Bolivia', 'BOL', 7],
// ['Canada', 'CAN', 6],
// ['Denmark', 'DEN', 7],
// ['Ethiopia', 'ETH', 8],
// ['Finland', 'FIN', 7],
// ['Germany', 'GER', 7],
// ['Hungary', 'HUN', 7],
// ['Ireland', 'IRE', 7],
// ['Iceland', 'ICE', 7],
// ['Japan', 'JAP', 5],
// ['Kenya', 'KEN', 5]
// ]

let countriesMain = [];
let countriesInner = [];

for (let i = 0; i < countries.length; i++) {
  countriesInner.push(countries[i]);
  countriesInner.push(countries[i].slice(0, 3));
  countriesInner.push(countriesLength[i]);

  countriesMain.push(countriesInner);
  countriesInner = [];
}

// console.table(countriesMain);

let countriesEndingWithLand = [];
let countriesNotEndingWithLand = [];

for (let i = 0; i < countries.length; i++) {

  if (countries[i].includes("land")) {
    countriesEndingWithLand.push(countries[i]);
  } else {
    countriesNotEndingWithLand.push(countries[i]);
  }

}
// console.table(countries);
// console.table(countriesEndingWithLand);
// console.table(countriesNotEndingWithLand);

str = str.slice(0,1);