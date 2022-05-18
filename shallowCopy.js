//spread 

//shallow copy willl only work with 1st/upper layerr not with nested items

// let sports =['cricket','football','swimming',{a:'hockey',b:'tennis'}]

// let sportsCopy=[...sports];
// sportsCopy[1] ='baseball';
// sportsCopy[3]['a']='basketball'; //this gets chnages in original array too in shallow copy
// console.log(sportsCopy);
// console.log(sports);

//another shallow copy method

// let sports =['cricket','football','swimming',{a:'hockey',b:'tennis'}]

// let sportsCopy=Array.from(sports)
// sportsCopy[1] ='baseball';
// sportsCopy[3]['a']='basketball'; 
// console.log(sportsCopy);
// console.log(sports);

//another shallow copy method .slice method


// let sports =['cricket','football','swimming',{a:'hockey',b:'tennis'}]

// let sportsCopy=sports.slice(0)
// sportsCopy[1] ='baseball';
// sportsCopy[3]['a']='basketball'; 
// console.log(sportsCopy);
// console.log(sports);

//for objects shallow copy

let obj={
    name:"adam",
    age:24,
    arr:[1,2,3,4,5,6,7,8]

}

let obj2=obj; 

let obj3={...obj}
obj3.arr[3]=12;
obj2.name="nilesh";
obj3.name="sumit"

let obj4=Object.assign({}, obj)
obj4.age=26;
obj4.arr[4]=13;
console.log(obj2);
console.log(obj);
console.log(obj3);
console.log(obj4 );