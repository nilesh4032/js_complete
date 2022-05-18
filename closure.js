// a child rocess has acess to its parent data and variables een after it has been return as its stack storage has been destroyed
// function sum(){
//     let a=4;
//     function child(){
    
//         console.log(a+5)
//     }
//     return child;
// }

// let addChild=sum();
// console.log(addChild);
// addChild() 


// for (var i=0;i<=5;i++){

// }


function createIncrement() 
{
 let count=0;   
 function increment() {
     count++;
     console.log(count);
     
 }
 return [increment]
}
const[increment]=createIncrement()
increment();
increment();
increment();
