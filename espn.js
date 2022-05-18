const request=require('request');
const cheerio=require("cheerio");
const chalk=require("chalk");
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary",cb);
function cb(error,response,html) {
    if(error){
        console.error('error',error);
    }else{
        handlehtml(html); 
    }
}
function handlehtml(html){
let $ =cheerio.load(html);
let arr=$(".ci-html-content");
let text= $(arr[10]).text();
let htmldata= $(arr[10]).html();
console.log("text data: ", text);
console.log("html data: ",htmldata);
} 