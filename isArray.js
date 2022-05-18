// function, object or array will all show as object when used with typeof fun so for arrays we have
// isArray to specifically check if it is array or not

let num =5;
console.log(typeof(num));

array=[1,2,3,4]
let test=Array.isArray(array)
console.log(test);