let path = require("path");
let fs = require("fs");
//****************directory******************* */
// create
fs.mkdirSync("myDirectory");
//delete
fs.rmdiSync("myDirectory");
//delete
//path -> check does it exist or not 
let doesExist = fs.existsSync("fs!.js");
console.log("This path exist?", doesExist);
//path-> belongs to a directory of file
let statsOfAPath = fs.lstatSync("dir1");
console.log("stats", statsOfAPath);
console.log("isFile?", statsOfAPath.isFile());
console.log("isDirectory?", statsOfAPath.isDirectory());
// dirctory -> content
let address = "...////path/////....."
let content = fs.raddorSync(address);
console.log("directroy content", content);