//if the squre is even or not
//imperativr way
// const x=4;
// const xsqaure=x*x;
// let iseven;
// if(xsqaure%2==0){
// iseven=true;
// }else{
//     iseven =false;
// }
// console.log(iseven); 

//declarative way
const isSqaure=(x)=>((x*x)%2==0?true:false);

console.log(isSqaure(4));