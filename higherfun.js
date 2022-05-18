//map --> perform a set of instructions on all elements of given set of elments
let arr=[1,2,3,4,5];
let newArr=arr.map(function(x){
    return x*x;
})
console.log(arr)
console.log(newArr);

//filter -->filter from all given elememts for given set of instructions
//filter even numbers
let filterArr=arr.filter(function(x){
    // if(x%2==0){
    //     return x;
    // }
    return x%2==0
})
console.log(filterArr)

//reduce --> gives one valued output for all lements

let sumArr=arr.reduce(function(accumulator,x){
   return accumulator+x; 
},0)
console.log(sumArr)