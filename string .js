//string in js
//a js string is zero or more character written inside queotes
//js string used for storing and manupulating text you may use single or double quetos
//string can be created as primitives


//let myname="bhola das";
//console.log(myname);
//console.log(myname.length);//length is 9 bcz it also count white space

//escape charcater
//if we want to write string in text then we use \ or without it we use single quotes inside double and in double use single quotes

let mname="my self \"bhola\" das  i m b tech 3rd year student";
console.log(mname);
//or
let bname="my self 'bhola' das i m b tech 3rd year";
console.log(bname);

//extracting string parts
//there are 3 method for extracting a part of a string
//slice(start,end)
//substring(start,end)
//substr(start,length)

//slice extract a part of a string and return the extracted part
var myfr="apple,banana,mango";
let res=myfr.slice(0,7);
console.log(res);
