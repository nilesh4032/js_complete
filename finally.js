function test(){
    var a=1+2
    return new Promise(function(resolve,reject){
        if(a==2){
            resolve('promise reosolved')
        }else{
            reject('promise is rejected')
        }
    })
}
test().then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('experiment completed');
})