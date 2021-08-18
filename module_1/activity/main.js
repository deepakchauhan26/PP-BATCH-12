let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");
//main input
// input -> node main.js tree "path"
// Print -> tree command excauted with 'path";
// input -> node main.js organize " path"
// print -> organize command executed with "path";
// input -> node main.js help
    // print -> list of all the commands
    // 1. node main.js tree "path"
    // 2. node main.js organize "path"
    // 3. node main.js "help"