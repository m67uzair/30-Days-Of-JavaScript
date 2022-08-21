// Develop a small script which generate array of 5 random numbers and the numbers must be unique

let randomNum= [];
let num=0;
let index = 1;

while(index<6){

   num = Math.floor( Math.random() * 100 + 1 );

   if( randomNum.includes(num) ){
    continue
   }else{
    randomNum.push(num);
    index++;
   }
}

// console.log(randomNum);

// Develop a small script which generate a six characters random id:
let strKey='';
for (let i = 0; i <= 5; i++) {

   strKey += String.fromCharCode(Math.floor(Math.random()*(122-97)) + 97);

}
// console.log(strKey);

let strKey1='';
let range = Math.floor( Math.random()*100 + 1 );
for (let i = 0; i <= range; i++) {

   strKey1 += String.fromCharCode(Math.floor(Math.random()*(122-97)) + 97);

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

 allChars = smallAbc.concat(capitalAbc,digits);

 let strKey2='';
let range2 = Math.floor( Math.random()*100 + 1 );
for (let i = 0; i <= range; i++) {

   strKey2 +=  allChars[ Math.floor(Math.random()*62 + 1) ];

}

console.log(strKey2);


