let path = require("path");
let fs = require("fs");
//****************directory******************* */
// create
//fs.mkdirSync("myDirectory");
//delete
//fs.rmdiSync("myDirectory");
//delete
// //path -> check does it exist or not 
// let doesExist = fs.existsSync("fs1.js");
// console.log("This path exist?", doesExist);
// //path-> belongs to a directory of file
// let statsOfAPath = fs.lstatSync("dirl1");
// console.log("stats", statsOfAPath);
// console.log("isFile?", statsOfAPath.isFile());
// console.log("isDirectory?", statsOfAPath.isDirectory());
// // dirctory -> content
// let address = "...////path/////....."
// // let content = fs.radorSync(address);
// console.log("directroy content", content);
let srcFilePath = "C:\\Users\\Deepak Chauhan\\OneDrive\\Desktop\\PP_batch_12__21\\revision\\object.js";
let destDir = "C:\\Users\\Deepak Chauhan\\OneDrive\\Desktop\\PP_batch_12__21\\module_1\\web dev";
let tobeCopiedFileName = path.basename(srcFilePath);
console.log(tobeCopiedFileName);
let destPath = path.join(destDir, tobeCopiedFileName);
fs.copyFileSync(srcFilePath, destPath);
console.log("file copied");