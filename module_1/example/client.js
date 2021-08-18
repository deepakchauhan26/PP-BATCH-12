//import

// requrie -> path of the file from where you want to import the functions  or variables

const lib = require("./lib");
const { notTobeExported } = require("./lib");
let libExportObj = require("./lib");
console.log("Iam client file");
console.log(libExportObj.varName);
console.log(libExportObj.fxn(), libExportObj.notTobeExported());