// return the state of all promise

let p1=new Promise(function(resolve,reject){
    resolve('prmoise 1 is resolved')
})
let p2=new Promise(function(resolve,reject){
reject('promise 2 is rejected')
})
let p3=new Promise(function(resolve,reject){
    resolve('promise 3 is resolved')
})
Promise.allSettled([p1,p2,p3]).then((arr)=>{
    console.log(arr);
}).catch((err)=>{
    log.error(err);
})
 