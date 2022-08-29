let pattern = /\d+/g; // d is a special character which means digits
let txt = "This regular expression example was made in January12a,  2020.";
let matches = txt.match(pattern);

console.log(matches); // [12,2020]

pattern = /[a].+/g; // . any character, + any character one or more times
txt = "Apple and banana are fruits";
matches = txt.match(pattern);

console.log(matches); // ['and banana are fruits']

txt = "This regular expression example was made in December 6,  2019";
pattern = /\b[^0-9]\w{4}\b/g; //  exactly four character  words without numbers
matches = txt.match(pattern);
console.log(matches); //['This', 'made']
