
let cap={
    name:"steve",
    lastName:"rogers",
address :{
    city: "manahttan",
    state:"new yyork",

},
age:35,
isAvenger:true,
movies: ["1st","2nd","3rd"],
sayHi: function(){
    console.log("captain complete");
}
};
//getting
console.log(cap.name);
console.log(cap.lastName);
console.log(cap.address);
console.log(cap.movies[2]);
cap.sayHi();
//set
cap.age=36;
cap.isAvenger=false;
//delete
delete cap.address;


for (let key in cap){
 console.log(key," ",cap[key])  //to access the elements of cap  
} 
