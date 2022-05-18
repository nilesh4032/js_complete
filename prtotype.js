Array.prototype.myMap=function (cb) {
    let newArr=[];
    for(i=0;i<this.length;i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
}
function sqaure(x) {
    return x*x;
    
}
arr=[1,2,3,4];
let mappedArr=arr.myMap(sqaure);
console.log(mappedArr);