// let p1=new Promise(function(resolve,reject){
//     reject('prmoise 1 is rejected')
// })
// let p2=new Promise(function(resolve,reject){
// resolve('promise 2 is resolved')
// })
// let p3=new Promise(function(resolve,reject){
//     resolve('promise 3 is resolved')
// })
// Promise.race([p1,p2,p3]).then((val)=>{   //  doesn't wait for resolving of all promises returnsd the first promise that gets resolved/rejected doesn't check further
//     console.log(val);
// }) .catch((err)=>{
//     console.log(err);
// })

// race

let p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('prmoise 2 is resolved');
    },1000)
})

let p2=new Promise(function(resolve,reject){
    setTimeout(() => {
       resolve('prpmise 1 is resolved'); 
    }, 2000);
})

Promise.race([p1,p2]).then((val)=>{
    console.log(val);
})