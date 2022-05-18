  // == only comapres values === cjecks for both type andf value

  if(({}||false==="")){
      console.log(1);
  }

  function test(val){
      return val ? console.log("truthy") : console.log("falsy");
  }
let arr = [3,4,5,6,7];


  test({});