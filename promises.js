let fs=require("fs");
console.log("before")
let promise=fs.promises.readFile("f1.txt");
console.log(promise);
promise.then(function (data) {
    console.log(""+data);
    
})
//if rejected
promise.catch(function (err) {
    console.log(err);
    
})
console.log("after")