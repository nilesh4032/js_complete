
// let sports =['cricket','football','swimming',{a:'hockey',b:'tennis'}]

// let sportsCopy=JSON.parse(JSON.stringify(sports))
// sportsCopy[1] ='baseball';
// sportsCopy[3]['a']='basketball'; 
// console.log(sportsCopy);
// console.log(sports);   

//for objects

let obj={
    name:"adam",
    age:24,
    arr:[1,2,3,4,5,6,7,8]

}

let obj2=JSON.parse(JSON.stringify(obj))  //objects are converted to string with json.stringify and after use of json.parse they are reconstructedfrom the string back to an object
//or
let obj3={...obj,arr:{...obj.arr}} //ake different  sprerad for every nested object
obj2.arr[3] =12;

console.log(obj);
console.log(obj2);
console.log(obj3);