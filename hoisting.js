//code whiich is not inside fn is global area and whic is inside a fn is executed inside execution context
//  variables are assigned memory which is undefined is called as hoisting
// function is assigned the full memory without even declaration
    console.log("varName",varName);
    var varName;
    console.log("varName",varName);
    varName="nilesh";
    console.log("varName",varName);
fn();
function fn(){
    console.log("hello from fn");
}
fn();
 //fnCon();
var fnCon= function (){
    console.log("inide anonymous");

}
fnCon();


//var has scope inside  function only outside fn it becomes global variable
 let letFruit="orange";
 var varFruit="orange";
 console.log(letFruit,varFruit)
 {
     let letFruit="apple";
    var varFruit="apple";
    console.log(letFruit,varFruit);
 }
 console.log(letFruit,varFruit)
 //temporal deadzone-- cannot acess variable before declearing in case of let and var see tabe for more info

 // functio is object, array is also objects
//  function fn(){
//      console.log("hello fn");

//  }
//  fn.prop="i am property of fn";
//  fn.myfn= function fn(){
//      console.log(" i am a method of function");
//  }
//  fn();
//  fn.myfn();
//  console.log(fn.prop);
