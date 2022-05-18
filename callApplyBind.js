// let person1={
//     name:"nielsh",
//     age:22,
//     showDetails: function () {
//         console.log(this.name+" is "+this.age+" years old");
        
//     }
// }
// let person2={
//     name:"adam",
//     age:25
// }

// //function borrowing

// person1.showDetails.call(person2);


//another way when function is declared outside the object

// let person1={
//     name:"nielsh",
//     age:22,
  
// }

// let person2={
//     name:"adam",
//     age:25
// }
// let showDetails= function (city,car) {
//     console.log(`${this.name} is ${this.age} years old, lives in ${city} and drives ${car}`);
    
// }
// //function borrowing when argumnets are also to be passed inside function
// showDetails.call(person2,"noida","maruti");
// showDetails.call(person1);



//apply function

// let person1={
//     name:"nielsh",
//     age:22,
  
// }

// let person2={
//     name:"adam",
//     age:25
// }
// let showDetails= function (city,car) {
//     console.log(`${this.name} is ${this.age} years old, lives in ${city} and drives ${car}`);
    
// }
// //function borrowing when argumnets are also to be passed inside function
// showDetails.call(person2,  ["noida","maruti"]);
// showDetails.call(person1);


//Bind function
let person1={
    name:"nielsh",
    age:22,
  
}

let person2={
    name:"adam",
    age:25
}
let showDetails= function (city,car) {
    console.log(`${this.name} is ${this.age} years old, lives in ${city} and drives ${car}`);
    
}
//function borrowing when argumnets are also to be passed inside function
let bind=showDetails.bind(person2,"noida","maruti");// it binds the function inside the variable an dcan be called later when required
console.log(bind);
bind();// now it eill print the deatails of function
