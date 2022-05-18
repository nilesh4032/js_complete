//setTimeout
function greet() {
    console.log("hello");
    
}
setTimeout(greet,2000);


//setInterval

let counter=0;
let intervalId

function hi(){
    console.log("hii");
    counter++;
    if(counter>=3){
        clearInterval(intervalId);
    }
}

intervalId= setInterval(hi,2000)