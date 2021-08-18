//represent
// empty object create
let obj = {
// key : value pair
// key -> string , number
//variables : properties
//function -> methods
// value ->
}
let cap = {
    name: "Steve",
    lastName: "Rogers",
    friends: ["Peter", "Bruce", "Tony"],
    isAvanger: false;
    age: 34;
    sayHi: function(){
        console.log("cap say's Hi");
    },
    address: {
        state: "New York",
        city: "NY City",
    }
}
// print ->
//console.log(cap);
//get
//.notation
//console.log("name", cap.name);
//console.log("friends", cap.friends[1]);
//console.log("Age", cap.age);
//if not present
//console.log("movies",cap.movies);
//cap.sayHi();
//[]operator
let varName="address";
console.log("address",cap[varName]);
//liternal
console.log("address",cap.varName);
//loop
for(let prop in cap){
    console.log(prop, " : ", cap[prop]);
}