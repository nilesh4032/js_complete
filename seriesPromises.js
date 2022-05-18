let fs=require('fs').promises;

let fs1=fs.readFile('./f1.txt')

function cb1(data) {
    console.log("data is " + data);
    let fs2=fs.readFile('./f2.txt')
    return fs2;   
}
function cb2(data) {
    console.log("data is " + data);
    let fs3=fs.readFile('./f4.txt')
    return fs3;   
}
function cb3(data) {
    console.log("data is " + data);
   
}

fs1.then(cb1).then(cb2).then(cb3).catch((err) => {
    console.log('err');
})