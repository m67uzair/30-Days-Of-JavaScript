let pattern = /\d+/g; // d is a special character which means digits
let txt = "This regular expression example was made in January12a,  2020.";
let matches = txt.match(pattern);

// console.log(matches); // [12,2020]

pattern = /[a].+/g; // . any character, + any character one or more times
txt = "Apple and banana are fruits";
matches = txt.match(pattern);

// console.log(matches); // ['and banana are fruits']

txt = "This regular expression example was made in December 6,  2019";
pattern = /\b[A-Za-z]{4}\b/g; //  exactly four character  words without numbers // /\b[^\d ]{4}\b/g
matches = txt.match(pattern);
// console.log(matches); //['This', 'made']

txt = "This regular expression example was made in December 6,  2019.";
pattern = /\b\w{4}\b/g; //  exactly four character words
matches = txt.match(pattern);
// console.log(matches)  //['This', 'made', '2019']

txt = "This regular expression example was made in December 6,  2019.";
pattern = /^This/g; // ^ means starts with
matches = txt.match(pattern);
// console.log(matches)  // ['This']

// Calculate the total annual income of the person from the following text.
txt =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

pattern = /\d{1,}.+?(,|\.)/g;

matches = txt.match(pattern);

function calculateSalary(array) {
  let salaryPattern = /per month(,|\.)$/g;
  let annualPattern = /annaul bonus(,|\.)$/g;
  let getIncome = /\d{1,}/g;
  let monthlyIncome = 0,
    annualIncome = 0;

  for (const string of array) {
    if (salaryPattern.test(string)) {
      monthlyIncome += string.match(getIncome)[0] * 12;
    } else {
      annualIncome = string.match(getIncome)[0];
    }
  }
  return parseInt(monthlyIncome) + parseInt(annualIncome);
}

// console.log("The annual income is: "+calculateSalary(matches));

txt =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";

pattern = /-?\d/g;

matches = txt.match(pattern);

matches = matches.map((number) => parseInt(number)).sort((a, b) => a - b);

console.log(matches);

// Write a pattern which identify if a string is a valid JavaScript variable

function isVariable(varr) {
  let varPattern = /^[a-zA-Z$_]+[\w_]*$/g;
  if (varPattern.test(varr)) {
    return `${varr} is allowed as an variable name`;
  } else {
    return `${varr} is not allowed as an variable name`;
  }
}

// console.log(isVariable("firstname"));
function mostFrequentWords(text, count) {
  txt = text;

  pattern = /\w+/g;

  matches = txt.match(pattern);
  let wordCount = [];
  matches.forEach((word) => {
    let index = wordCount.findIndex((wordObject) => wordObject.word === word);

    if (index == -1) {
      wordCount.push({ word: word, count: 1 });
    } else {
      wordCount[index].count++;
    }
  });
  wordCount.sort((a, b) => b.count - a.count);
  for (let i = 0; i < count; i++) {
    console.log(wordCount[i]);
  }
}
let para =   "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.";
// mostFrequentWords(para,10);