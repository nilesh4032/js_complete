function createInterval() {
    let intervalId=0;
    let intervalMap={};
    
    function setIntervalPol(callback,delay=0,...args) {
        var id=intervalId++;
        function repeat() {
            intervalMap[id]=setTimeout(()=>{
                callback(...args)
                if(intervalMap[id]){
                    repeat();
                }
            },delay
            );
        }
        repeat()
        return id;
    }
    function clearIntervalPol(intervalId) {
        clearTimeout(intervalMap[intervalId])
        delete intervalMap(intervalId)
        
    }

    return {
        setIntervalPol,
        clearIntervalPol
    }

}
const{ 
    setIntervalPol,
    clearIntervalPol
}=createInterval
let counter=0;
let intervalID
function greet(){
     counter++;
     console.log("hii");
     if(counter>=3){
         clearIntervalPol(intervalID);
     }
}
intervalID=setIntervalPol(greet,2000)