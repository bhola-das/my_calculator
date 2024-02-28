const promiseone=new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("promiseone called");
    resolve();
},1000)
})

promiseone.then(function(){
    console.log("resolve called");
})

//second way  resolve connected with then
new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("second promise called");
        resolve();
    },1000)
}).then(function(){
    console.log("2nd resolved called");
})


const promisetwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promiseone called");
        resolve({name:"bhola",email:"bhola@gmail.com",roll:38});
    },1000)
    })
    
    promisetwo.then(function(user){
        console.log(user.name);
    })


const promisefour=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({names:"sujett",roll:40})
        }
        else
        reject("erroe:is  found");
    },1000)
})   

promisefour.then((user)=>{
    return user.names;
}).then((names)=>{
    console.log(names);
}).catch((error)=>
{
    console.log(error);
}).finally(()=>{
    console.log("promise is either resolved or rejected");
})

//another way to handle promise is async it is similar to then 
//but diffrence is that it that it wait until work is not done if done then it move forward
//we cant handle catch in async


//async function promisefive()
//{
//    try{
//        const response=await promisefive;
//    console.log(response);
//    }
//    catch{
//        console.log(error)
//    }
//}

//promisefive()


// useing async way

//async function getAllUsers()
//{
//    try{
//        const response=await fetch('https://jsonplaceholder.typicode.com/photos');
//    const data=await response.json();
//    console.log(data);
//    }
//    catch{
//        console.log(error);
//    }
//}

//getAllUsers()

//useing then catch

fetch('https://jsonplaceholder.typicode.com/photos')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch(()=>{
    console.log(error);
})