//this keyword 

//non-strict mode in node

//1.when scope is global in nodeJs
//console.log(this); //return empty object

//2. inside function
// function showThis() {
//     console.log(this);
    
// }
// showThis();//return global object

//fumction inside object
// let obj={
//     name:"adam",
//     f: function () {
// console.log(this);        
//     }
// }
// obj.f();//return object itself  

//4. fnction inside function inside object

// let obj={
//     name:"adam",
//     f: function () {
//         function g() {
//             console.log(this);
//         }
// g();
//     }
// }
// obj.f()//return global object



// in node js for strict mode

// 1 in globall scope
// 'use strict'
//console.log(this);//return empty object

//2. insode function
// function f(){
//     console.log(this);
// }
// f();//returns undefined

//3. function inside obejct
// let obj={
//     name:"nielsh",
//     f: function(){
//         console.log(this);
//     }

// }
// obj.f();//return object itself

//4. funcion inside function inside object

// let obj1={
//     name:"nilesh",
//     f: function(){
//         function g(){
//             console.log(this);
//         }
//         g();
//     }

// }
// obj1.f();//return undefined


// "strict" mode in browser

//1 for global scope
//console.log(this);//returns window object(which is the skeleton  of the program)

//2 inside function
// function f(){
//     console.log(this);
// }
// f();//return undefined

//3. function inside object
// let obj={
//     name:"nilesh",
//     f: function(){
//         console.log(this)
//     }
// }
// obj.f()//returns object itself

//4. function inside function inside object
// let obj={
//     name:"nilesh",
//     f: function(){
//         function g(){
//             console.log(this)

//         }
//         g();
//     }
// }
// obj.f()//returns undefined


//non strict moe in browser

//1. global scope

//console.log(this) //returns window object

//2. inside function
// function f(){
//     console.log(this);
// }
// f() //alseo return window object

//3 function inside object
// let obj={
//     name:"nilesh",
//     f: function () {
//         console.log(this)
        
//     }
// }
// obj.f()//returns object itself

//4. function inside function  inside object
let obj={
    name:"nilesh",
    f: function () {
        function g(){
        console.log(this)
        }
        g()
    }
}
obj.f()//returns window object