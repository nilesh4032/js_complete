let array=[1,2,3,4,5];
console.log(array);
let i=0;
while(i<array.length){
    console.log("element at :",i,"is",arr[i]);
    i++;
}
array.push("ads alement at last");
array.unshift("adds at first");
array.shift();
array.pop();
array.slice(2)//works like substring return duplicate original remains unchanged returns 3,4,5
array.splice(2,3)//deletes elemnts from array from 2nd index to 3 places returns 1,2 changes original array
//index of and conatains funxtions does as the name suggests.

