// implementation -> files / folder interact
// /dorectory
//files -> read /write / update delete
let fs = require("fs");
let content = fs.readFileSync("f1.txt");
//buffer -> video, audio, text
console.log("content: ", content);
// +-> conactinate -> string => text
console.log("content :"+ content);
//write -> writeFileSync
//file doesn't exist -> file create , content put
// file does exist -> content override 
fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai");
// update
fs.appendFileSync( "abc.txt", "Bhai khush kyu nhi hai");
//delete a file by passing it's path
fs.unlinkSync("abc.txt");
console.log("file removed");
