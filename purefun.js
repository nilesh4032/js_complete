//impure function
//sum will gte chnages everytime w echange a so function is dependent on a even wyen function is being called on b only everytime
let a=4;
function addnnum(b){
    console.log("the sum is",a+b);
}
addnnum(2);

//pure function

function addnum(a,b){
   // console.log("the sum is",a+b); //side effect of pure function because of staate mutation instead use return
    return a+b;

} 
console.log(addnum(2,3));
//a pure will always retrn the same result for the same set of arguments