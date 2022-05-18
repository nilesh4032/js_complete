// // synchoronous callback
// function greet(personName,age,callback,callback1){

// let agePerson=age;
// let msg="hello "+personName;
// callback(msg);
// callback1(agePerson);

// }
// function showage(age){
//     console.log(age);
// }
// function logGreeting(greeting) {
//     console.log(greeting);
    
// }

// greet('steve',25,showage,logGreeting)
    

// //synchoronous callbacks
//  console.log("hello");

//   setTimeout(() => {
//     console.log("i am st1");  
//   }, 2000);

//   setTimeout(() => {
//       console.log("i am st2");
//   }, 1000);

//   // refer to image for explanation
//   console.log("bye");



//   // parallel callbacks

//   let fs=require('fs');
//   console.log("before");
//   fs.readFile("f1.txt",cb);
//   fs.readFile("f2.txt",cb1);
//   fs.readFile("f3.txt",cb2);

//   function cb(err,content) {
//       if(err){
//           console.log(err);
//       }else{
//           console.log(content.toString());
//       }
//     }

//   function cb1(err,content) {
//       if(err){
//           console.log(err);
//       }else{
//           console.log("conetent of file is : "+content);
//       }
//     }

//   function cb2(err,content) {
//       if(err){
//           console.log(err);
//       }else{
//           console.log("conetent of file is : "+content);
//       }
      
//   }
//   console.log("after");



  //series callbaack
  let fs=require('fs');
  console.log("before");
  fs.readFile("f1.txt",cb);
 

  function cb(err,content) {
      if(err){
          console.log(err);
      }else{
          console.log(content.toString());
      }
      fs.readFile("f2.txt",cb1);

      function cb1(err,content) {
        if(err){
            console.log(err);
        }else{
            console.log("conetent of file is : "+content);
        }
        fs.readFile("f3.txt",cb2);
        function cb2(err,content) {
            if(err){
                console.log(err);
            }else{
                console.log("conetent of file is : "+content);
            }
            
        }
        console.log("after");
        
      }
    }

  

  