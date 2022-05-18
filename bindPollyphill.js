let person1={
    name:"nilesh",
    age:22
}
let details= function (city,state) {
    console.log(this.name+" "+this.age+" "+city+" "+state);
    
}
let showDetails=details.bind(person1, "noida");
showDetails("up")

Function.prototype.myBind=function (...args1) {
    let obj=this;
    param=args1.slice(1);
    return function (...agrs2) {
        obj.apply(args1[0],[...param,...agrs2]);
        
    }
    
}
let bindDetails= details.myBind(person1,"puri")
bindDetails("odisha");    