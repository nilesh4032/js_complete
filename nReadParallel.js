const fs=require("fs").promises;

let arr=['./f1.txt','./f2.txt','./f3.txt',]

for (let i=0;i<arr.length;i++){
    let fileRead=fs.readFile(arr[i])
    fileRead.then((data)=>{
        console.log('content: '+data);
    })
}