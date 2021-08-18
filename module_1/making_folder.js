let path = require("path");

let fs = require("fs");

let inputArr = process.argv.slice(2);

let mainDir = inputArr[0];
let firstModule = inputArr[1];
let secondModule = inputArr[2];
let thirdModule = inputArr[3];

let currentpath = process.cwd();
//console.log("currentpath",currentpath);
let mainDirPath = path.join(currentpath, mainDir);
let firstModulePath = path.join(currentpath, mainDir, firstModule);
let secondModulePath = path.join(currentpath, mainDir, secondModule);
let thirdModulePath = path.join(currentpath, mainDir,thirdModule);

// console.log(mainDirPath);
// console.log(firstModulePath);
// console.log(secondModulePath);
// console.log(thirdModulePath);

let isMainModulePresent = fs.existsSync(mainDirPath);
if (isMainModulePresent){
    console.log('Directory is already created');
}else {
    console.log(mainDir," created");
    fs.mkdirSync(mainDirPath);
    let topicFromInput = inputArr.slice(1, 4);
    for (let i = 0; i < topicFromInput.length; i++){
        let cTopicPath = path.join(currentpath, mainDir, topicFromInput[i]);
        console.log(topicFromInput[i], "created");
        fs.mkdirSync(cTopicPath);
    for(let j = 1; j<=5; j++){
        let modulePath= path.join(cTopicPath,"Module" + j);
        fs.mkdirSync(modulePath);
        console.log('module'+ j, 'created inside', topicFromInput[i]);
        let filepath = path.join(modulePath, "content.md");
        fs.writeFileSync(filepath, "#hello");
    }
    }
}