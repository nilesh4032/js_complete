class person{
constructor(name,age){
    this.name=name,
    this.age=age
}
    details(){
      return  this.name;

    }

}
//classical inheritence

// class child extends person{
//     constructor(){
//         super('steve')
//     }
// }
let person1=new person("nilesh",23)
 console.log(person1.details());
// let person2=new child();
// console.log(person2.details());