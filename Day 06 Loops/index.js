let randomNum= [];
let num=0;
// let isIncluded = false;
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

console.log(randomNum);