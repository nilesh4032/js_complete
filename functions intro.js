function hello(param){
    console.log("hello");
return 10;
}
let val=hello();
console.log(val);

// function address can be stored in a variable
let func= function(){// if fn name is not given it is called anonymous fn
    console.log("inside function")
}
//fn call itself
// (function fn(){
//     console.log("IIFE will run on its own");
// }) ();

// arrow fn
 let fn=num => num*num;
 console.log(fn(5));
 // variable 
 function outer(){
console.log("outer");
return function inner(){
    console.log("inner");

}
 }
 
let rVal=outer();
console.log(rVal);
rVal();