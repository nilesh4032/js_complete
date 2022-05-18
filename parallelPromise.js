const fs=require('fs').promises //let fs1=fs.promises.readFile('./f1.txt') dont have to write like this anymore if we add .promises in require


//paraller execution
let fs1=fs.readFile('./f1.txt')
let fs2=fs.readFile('./f2.txt')
let fs3=fs.readFile('./f3.txt')

fs1.then((data) => {
    console.log("data: " + data);
})

fs2.then((data) => {
    console.log("data: " + data);
})

fs3.then((data) => {
    console.log("data: " + data);
})

