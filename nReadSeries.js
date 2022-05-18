const fs=require("fs").promises;

let arr=['./f1.txt','./f2.txt','./f3.txt',]
let fs1=fs.readFile(arr[0]);
for (let i=1;i<arr.length;i++){
fs1=fs1.then(function(data){
    console.log("data is " +data);
    return fs.readFile(arr[i])
})
}

fs1.then(function(data){
    console.log("data is"+data)
})