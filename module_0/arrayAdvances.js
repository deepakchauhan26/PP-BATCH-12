//array is a collection of homogeneous data types

function fn(){
    console.log('I am a function');
    reutrn 'Hello';
}
let tempArr=[1,2,3,14,5]
let arr=[
    1,
    true,
    1.1,
    "string",
    null,
    tempArr    
];
console.log('extract 3 from 2dArray', arr[arr.length-1]);
console.log('2dArray', arr[arr.length-2]);
console.log('access the last element', ar[arr.length - 1]);
let rVal=arr[arr.length - 1]();
console.log('call the last element',rVal);