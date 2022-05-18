// when we can mutate/chnage the declared value or variable thats is called mutability 
 //mitab;e ex
//  const person1={
//      name:"adam",
//      age:32
//  }
 
//  const person2=person1;
//  person1.name="steve";
//  console.log(person1)
//  console.log(person2);
 //person 1 name is also being chnaged we do update person2(call by reference)

 //methods to solve this deep copyand shallow copy

 const person1={
    name:"adam",
    age:32
}

const person2=Object.assign({},person1); //refernce to new variabke person2 does not chnage person1
person2.name="steve";
console.log(person1)
console.log(person2);


//spread operator

const person2={...person1};
 