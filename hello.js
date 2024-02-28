console.log('hello world');
var myage='bhola@2021';
console.log(myage);

//typeof operator tell varialbe data type
console.log(typeof(myage));

//type of data type in JS 
//1.undefined
//2.boolean
//3.Number
//4.string
//5.bigint
//6.symbol

console.log(10 + "20");//1020
console.log(10 - "20"); //this is bug -10
console.log(10 * "20");//200
console.log(10 / "20");//.5
console.log(10 % "20");
console.log(true + true);//1+1=2
console.log(true + false);//1+0=1
console.log("true" + "false"); //truefalse
console.log("bhola" - "das");  //NAN
//nan is not a number it is property of global object
 
// diff b/w null and undefined :if we gine null value of any data type then that is null and if we only define the the variable not initialize and we want to print
//then it give undefined

var v=null;
console.log(typeof(v));//object it is laso bug

var mynumber=7079358518;
var myname='bhola';
console.log(isNaN(mynumber));//false
console.log(isNaN(mynumber));//true

//NaN===NaN   false
//Number.NaN===NaN  false
//isNaN(NaN)  true
//isNaN(Number.NaN)   true
//Number.isNaN(NaN)   true


//for(var i=0;i<6;i++)
//{
//console.log('bhola');
//}


//diff b/w == and ===
console.log("\n");
var num1=5;
var num2='5';
console.log(num1==num2);

var num1=5;
var num2='5';
console.log(num1===num2);
//diff is that == only check value but === also check data type

var num=9;
if(num==9)
{
    console.log("it is odd number");
}
else{
    console.log("it is even number");
}


var year=2000;
if(year % 4==0)
{
    if(year % 100!=0)
    {
        
            console.log("leap year");
        }
        else{
            if(year % 400==0)
            console.log("leap year");
            else
            console.log("not leap year");
        }
    }
else
{
    console.log("not leap year");
}

var age=18;
console.log((age>17)?"you can vote":"you cant vote");

function sum(a,b)
{
    total=a+b;
   return total;
}

var funexp=sum(50,20);
console.log('the sum of two number is ' + funexp);

//modern javasript or ECMAscript 2015
//var for function scope
//let and const for block scope
//inside block we cant change const value but we can change let value

for(let i=1;i<=10;i++)
{
    let table=11;
    //console.log(table + "*" +i + "="+table*i);
    //useing template literal

    console.log(`${table} * ${i} = ${table*i}`);

}
 
//fat arrow function
//in fat arrow function first we define then call

const sumi=() =>{
    let a=90;
    let b=70;
    //let sum=a+b;
    return `sum of a and  is ${a+b}`;
}

console.log(sumi());

//array in js
//in js it is possible to store all datatype value in array like var array=['bhola',9,true,9.8]

var arr1=['bhola','sujeet',9,7];
for(var i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}

//after es6 we have for..in and for..of loop
//for..in loop for finding index and for..of loop for value

for(let element in arr1)//for..in loop
{
    console.log(element);
}

for(let element of arr1)//for..of loop
{
    console.log(element);
}

//for each loop  element is value, index ,and arrayp tell from which array we work
var array1=['bhola ','navneet ',9 ,false];
array1.forEach(function(element,index,arrayp)
{
    console.log(element+ "index "+index);
});

//useing fat arraw function
array1.forEach((element,index,arrayp)=>{

    console.log(element+ "index "+index);
});

//searching and filter in an array
//indexof()  if element not found then index of return -1
const nums=['bhola','sujjj','navo']
const index=nums.indexOf('navo');
console.log(index);

//sort and compare in array 






//push()  add one or more  data in last of array
array1.push('sujeet');
array1.push(5);
console.log(array1);
//at the ends of an array and return the new length of the array

//const count=array1;
//console.log(count);
//array1.push('ramesh','4','bk');
//console.log(array1);

//unshift() add data in front
array1.unshift('suresh');
console.log(array1);

const arr=[1,2,3,5];
arr.unshift(7,8);
console.log(arr);


//pop()  pop method remove the last element from an array and return the element, this mehod change the length of array
console.log(arr.pop());
console.log(arr);

//shift()   shift method remove the first element from array and return that element it also change length


//splice() splice method add and remove element from an array
//splice method return the element that splice delete

const month=["jan","fab","march","april","may"];
const newmonth=month.splice(2,1,"dec"); //splice(the idex at which we want to start add, the idex of element after which we want to delete,the data we want to delete)
console.log(month);
console.log(newmonth); //[] bcz nothing delete


//map(),reduce(),filter()
