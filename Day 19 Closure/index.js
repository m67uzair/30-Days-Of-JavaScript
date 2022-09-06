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
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(outerFunction().plusOne)
console.log(outerFunction().minusOne)
console.log(innerFuncs.plusOne)
console.clear();

// Exercises: Level 1
// Create a closure which has one inner function

function closureFunction() {
    let str = 'this is outer fun variable';

    function innerFun() {
        str += 'modified by inneer fun'
        return str;
    }

    return innerFun;

}

const outerFun = closureFunction()

console.log(outerFun());

// Have to return the inner fun in the outer function after defining it.
// if two functions, return them like a object with a key assignment to their names

