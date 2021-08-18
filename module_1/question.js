// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
for(name in contacts && prop in contacts){
    if(name==contacts[firstName] && prop==contacts[prop]){
        return(firstName, prop);
    }
    else if(name==contacts[firstName] && prop != contacts[prop]){
        return("No Such property");
    }
    else{
        return("No Such contact");
    }
}
  // Only change code above this line

}

lookUpProfile("Akira", "likes");
console.log(lookUpProfile());