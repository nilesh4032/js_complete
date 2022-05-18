function flatten(obj,parent,res={}) {
    for(key in obj){
        let propName=parent?parent+'_'+key:key;
        if(typeof obj[key]=='object'){
            flatten(obj[key],propName,res);
        }else{
            res[propName]=obj[key];
        }
    }
    return res;
    
}

obj={
    name:"adam",
    age:23,
    address:{
        city:"noida",
        state:"up"
    }


}
console.log(flatten(obj));
