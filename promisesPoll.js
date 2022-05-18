const pending=0;
const fulfilled=1;
const rejected=2;
function customPromise(executor){
    let state=pending;
    let value=null;
    let handlers=[];
    let ctachers=[];

    function resolve(result) {
    if(state !== pending)
    return;
    state=fulfilled
    value=result;
    handlers.forEach((h)=>h(value))    
}

function reject(){
if(state !== pending) return;

state=rejected; 
value=err;
ctachers.forEach((c)=> c(value)) 
}
this.then=function(successCallback){
    if(state==fulfilled){
        successCallback(value)
    }else{
        handlers.push(successCallback)
}
}
this.catch=function(failureCallback){
    if(state===rejected){
        failureCallback(value) 

    }else{
        ctachers.push(failureCallback)
    }
}

    executor(resolve,reject)
}

const doWork=(res,rej)=>{
    if(2==2){
        setTimeout(()=>{res('promise resolved');
        },1000);
    }else{
        setTimeout(() => {
            rej('promise rejected'); 
        }, 1000);
    }
}

let greetings =new customPromise(doWork)
greetings.then((value)=>{
    console.log("then log",value);
})

greetings.catch((value)=>{
    console.log( 'catch log',value);
})