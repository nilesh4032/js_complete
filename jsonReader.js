let xlsx=require("xlsx"); 
let fs=require("fs");
// let buffer=fs.readFileSync("./ex.json");
// console.log(buffer);
// let data=JSON.parse(buffer);
// console.log(data);
let data=require("./ex.json");
// console.log(data);
// data.push({
//     "name":"lodu",
//     "last name":"kumar",
//     "rnames":[
//         "ram",
//         "shyam",
//         "ganshyam"
//     ],
//     "age":"22",
//     "address":{
//         "city":"drabhanga",
//         "state":"bihar"
//     }
// });
// let strData=JSON.stringify(data);
// fs.writeFileSync("ex.json",strData);

  //move to xlsx file
function excelWriter(filePath,json,sheetName) {
    let newWB=xlsx.utils.book_new();
let newWS=xlsx.utils.json_to_sheet(json);
xlsx.utils.book_append_sheet(newWB,newWS,sheetName);
xlsx.writeFile(newWB,filePath);
}

function excelRedaer(filePath,sheetName) {
    //workbook get
    if(fs.existsSync(filePath)==false){
        return [];  
    }
let wb=xlsx.readFile(filePath);
let excelData=wb.Sheets[sheetName];
let ans=xlsx.utils.sheet_to_json(excelData);
return ans;
}
