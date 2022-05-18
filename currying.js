//currying with functions when we pass one orgument in first variable then call that variable with the secong argumant and so on for multiple times for multiple arguments

// function add(a){
//     return function(b){
//         console.log(a+b);
//     }
// }
// let addition=add(2);
// addition(3);

//currying with bind fuction

function add(a,b){
    console.log(a+b); 
        
    }
    let bind=add.bind(this,2);
    bind(3);