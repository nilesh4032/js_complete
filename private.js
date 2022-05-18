let myFunctions =(function () {
    let name=''
    getName=function () {
        return name;        
    }
    setName=function (newName){
        name=newName;
    }
    return{
        getName:getName,
        setName:setName
    }
}())

myFunctions.setName('adam')
console.log(myFunctions.getName())

console.log(myFunctions.name);