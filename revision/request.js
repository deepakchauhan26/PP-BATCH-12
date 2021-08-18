//npm i request 
let request = require("request");
console.log("Before");
request("http://www.google.com",cb);
function cb(error, response,html){
    //console.lerroe('error:',error)// Print the error if one occurred
    // console.log('body:',html); //print the HTML for the Google homepage.
    if (error){
        console.log(error);// print the error if one occurred

    }else if (response.statusCode== 404){
        console.log("page not found")
    }else {
       // console.log(html);// Print the HTML for the request made 
        //console.log("html:", );
        dataExtracter(html);
    }
    function dataExtracter(html){
        //search tool
        let searchTool = cheerio.load(html);
        //css selector -> elem
        let elemPep = searchTool("#readme>h1");

        //text
        let moduleName = elemRep.text().trim();
        console.log("moduleName", moduleName);
    }
}
console.log("After");