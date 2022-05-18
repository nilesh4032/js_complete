const request=require('request');
const cheerio=require("cheerio");
const chalk=require("chalk");
request("https://www.worldometers.info/coronavirus");
function cb(error,response,html) {
    if(error){
        console.error('error',error);
    }else{
        handlehtml(html); 
    }
}
function handlehtml(html){
let seltool=cheerio.load(html);
let conArr=seltool("#maincounter-wrap span");
// for(i=0;i<conArr.length;i++){
//     let data=seltool(conArr[i]).text;
//     console.log("data",data);
// }
let cases=seltool(conArr[0]).text()
let deaths=seltool(conArr[1]).text()
let recov=seltool(conArr[2]).text()
 console.log(chalk.grey("total cases"+cases));
 console.log(chalk.red("deaths"+deaths));
 console.log(chalk.green("recovered"+recov));

}