const mysym=Symbol("key")
const jsuser={
    name:"bhola",
    [mysym]:"mnkk",
    roll:"2106038",
    email:"bholadasgmail.com",
    room:9


}
//console.log(jsuser.email)
//console.log(jsuser["name"])
//console.log(jsuser["room"])
//console.log(jsuser[mysym])

//jsuser.greeting=function(){
//    console.log(`hello js user this side ${this.name}`)
//}

//console.log(jsuser.greeting())

//console.log(Object.keys(jsuser));//return array of keys

//const {name,roll,email}=jsuser //object destrctureing
//console.log(roll)
//console.log(email)


//function
//function myfun(...num1){    //...sprade  it return array also called rest operator  
//       return num1
//}
//console.log(myfun(200,300,4000,500,"bhola"))

//loop
// for of loop use for array and map ,for in loop use for object
//const myobj={
//    name:"bhola",
//    roll:2106038,
//    email:"bhola@gmail.com"
//}
//for(let i in myobj)
//{
//    console.log(` index is ${i} and value is ${myobj[i]}`)
//}


//foreach  it return callback function so dont write name
//let array=[1,2,3,4,5]
//array.forEach(function(val){
//    console.log(val)
//}) 

//for scope use return for return value
//for each dont return value
//for return we use filter write same as foreach

//const array=[{name:"bhola",roll:38},{name:"sujeet",roll:40},{name:"navo",roll:45}]
//array.forEach((item)=>{
//    console.log(item.name)

//})

//const temp=array.filter((item)=>{
//return item>2
//})
//console.log(temp)


//class

//class user{
//    constructor(username)
//    {
//        this.username=username
//        console.log(this.username);
//    }
//}
//class tecacher extends user{
//    constructor(username,email,password){
//        super(username)
//        this.email=email
//        this.password=password
//    }
//    addcourse(){
//        console.log(`a new course by added by ${this.username}`);
//    }
//}
//const bk=new tecacher("bhola","bholad@gmail.com",123)
//bk.addcourse();


//console.log(Math.PI);


//getter setter

class user{
    constructor(name,email)
    {
        this.name=name
        this.email=email

    }
    get name()
    {
        return this._name.toUpperCase()
    }
    set name(value)
    {
        this._name=value;
    }
    get email()
    {
        return this._email.toUpperCase();
    }
    set email(value)
    {
        this._email=value;
    }
}

const bh =new user("bhola","bhola@gmail");
console.log(bh.name);
console.log(bh.email);