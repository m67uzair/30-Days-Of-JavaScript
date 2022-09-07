// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }
// const innerFunc = outerFunction()

// console.log(innerFunc())
// console.log(outerFunction())
// console.log(innerFunc())

console.clear();
// function outerFunction() {
//     let count = 0;
//     function plusOne() {
//         count++
//         return count
//     }
//     function minusOne() {
//         count--
//         return count
//     }

//     return {
//         plusOne:plusOne(),
//         minusOne:minusOne()
//     }
// }
// const innerFuncs = outerFunction()

// console.log(outerFunction().plusOne)
// console.log(outerFunction().minusOne)
// console.log(innerFuncs.plusOne)
// console.clear();

// // Exercises: Level 1
// // Create a closure which has one inner function

// function closureFunction() {
//     let str = 'this is outer fun variable';

//     function innerFun() {
//         str += 'modified by inneer fun'
//         return str;
//     }

//     return innerFun;

// }

// const outerFun = closureFunction()

// console.log(outerFun());

// Have to return the inner fun in the outer function after defining it.
// if two functions, return them like a object with a key assignment to their names

// Exercises: Level 2
// Create a closure which has three inner functions

function funWith3Closures() {
  let str = "Hi, ";
  function name() {
    str += "I'm M Uzair";
    return str;
  }
  function education() {
    return (str += ", a software engineer");
  }
  function location() {
    return (str += ", from Pakistan.");
  }

  return {
    name: name(),
    education: education(),
    location: location(),
  };
}
const meFun = funWith3Closures();
console.log(meFun.name);
console.log(meFun.education);
console.log(meFun.location);

function personAccountOut(params) {
  let firstName, lastName, incomes = [], expenses;

  function totalIncome() {
    let totalPay = 0;
    incomes.forEach(income => totalPay+=income);
  }
  function totalExpense() {
    let totalDamage = 0;
    incomes.forEach(damage => totalDamage+=damage);
  }
  function accountInfo() {}
  function addIncome(obj) {
    incomes.push(obj);
    return `added ${obj}`
  }
  function addExpense() {}
  function accountBalance() {}

  return {
    addIncome: addIncome(obj),
    totalIncome: totalIncome(),
  }

}

const inners = personAccountOut();

console.log(inners.addIncome({'pado':'gado'}));
