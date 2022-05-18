let arr=[1,2,3,4,5];
// let newArr=arr.map(function(x){
//     return x*x;
// })
console.log(arr)
// console.log(newArr);


//poluphill

function polyMap(arr,cb){
    let newArr=[]
    for( let i=0;i<arr.length;i++){
       
       newArr.push(cb(arr[i]));
    }
   return newArr;
}
function sqaure(x){
    return x*x;
}
// console.log(polyMap(arr,sqaure));


// filter
let fArr=[2,4,6,7,9,,3]
let evenArr =fArr.filter(function(x){
    return x%2==0
})
// console.log(evenArr);

//polliphill for filter

function polFilter(fArr,cb){
    let filArr=[];
    for(let i=0;i<arr.length;i++){
        if(cb(fArr[i])){
            filArr.push(fArr[i])
        }
    }
    return filArr;
}
function even(x){
if(x%2==0){
    return x;
}
}
// console.log(polFilter(fArr,even))

//reduce

let sumArr=arr.reduce(function(accumulator,x){
    return accumulator+x; 
 },0)
//  console.log(sumArr)

 //reduce polyphills

 function polyReduce(arr){
     let reArr=0;
     let sum=0;
     for(i=0;i<arr.length;i++){
       sum=sum+arr[i];
     }
reArr=sum;
     return reArr;

 }
 console.log(polyReduce(arr))