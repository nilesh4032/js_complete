  const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
  const request=require("request");
  const cheerio= require ("cheerio");
  request(url,cb);
  function cb(err,response,html){
       if(err){
           console.log(err)
       }
       else{
          extractLink(html);
       }
  }
  function extractLink(html){
      let $= cheerio.load(html);
      let anchorElem=$("a[href='/series/ipl-2020-21-1210595/match-results']");
      let link=anchorElem.attr("href");
      let fullLink="www.espncricinfo.com"+link;
         getAllMatches(fullLink);
  }
  function getAllMatches(url){
    request(url,function(err,response,html){
        if(err){
            console.log(err)
        }
        else{
            extractAllLink(html);
        }
    })
  } 