let p1=new Promise(function(resolve,reject){
    resolve('prmoise 1 is resolved')
})
let p2=new Promise(function(resolve,reject){
reject('promise 2 is rejected')
})
let p3=new Promise(function(resolve,reject){
    resolve('promise 3 is resolved')
})

let prmoiseAll=Promise.all([p1,p2,p3])// prmoise.All also returns a promise, needs all promises to be resolved otherwise it will show the rejected promise
prmoiseAll.then((PromiseArray)=>{
    console.log(PromiseArray);
}) .catch((err)=>{
    console.log(err);
})
