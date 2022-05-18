function car(brand,model,color){
    this.Brand=brand;
    this.Model=model;
    this.Color=color;
this.drive=function () {
    console.log("i am driving "+this.Model);
    
}
}
let car1=new car("bmw","x5","red")
let car2=new car("mercedez","s class","white");
console.log(car1);
console.log(car2);
console.log(car1.Model);
car1.Brand="jaguar";
console.log(car1);
car1.drive()