let person1={
    name:"nilesh",
    age:22,
    details: function(){
        console.log(this.name+" "+this.age);
    }
}
person2={
    name:"steve"
}
person2.__proto__=person1;
//protoype of person1 is assigned to person2 so all the missing details will be fetched from person1
person2.details();
