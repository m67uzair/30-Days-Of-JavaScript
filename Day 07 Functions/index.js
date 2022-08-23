//6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

let array = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  let temp;
  let lastIndex = arr.length - 1;

  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[lastIndex];
    arr[lastIndex--] = temp;
  }
  return arr;
}

// console.log(reverseArray(array));

//7. write a function to generate a random ip address

function randomIp() {
  let ip = [];

  for (let i = 0; i < 4; i++) {
    ip.push(Math.floor(Math.random() * 250 + 1));
  }

  return ip.join(".");
}

// console.log(randomIp());

// factorial

function factorial(n) {

  if (n < 2) {
    return 1;
  }

  return n * factorial( n - 1 );
}

// console.log(factorial(5));

// unique numbers in an array

function uniqueArray(arr){

    for (let i = 0; i < arr.length; i++) {

        for (let j = i+1; j < arr.length; j++) {

            if(arr[i]==arr[j]){
                return false;
            }
        }
    }
    return true;
}

// console.log(uniqueArray([1,2,3,4,5,6]));

// return 7 unique random numbers

function sevenRandomNumbers() {

    let arr = [];
    let num;
    let count = 1;

    while (count!=7) {

       num = Math.floor( Math.random() * 9 +1 );

       if(arr.includes(num)){
        continue;
       }

        arr.push(num);
        count++;
    }

    return arr;
    
}

console.log(sevenRandomNumbers());

