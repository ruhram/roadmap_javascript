//Basic 
setTimeout(function(){
    console.log('Hello');
},3000);

//promises
var promises = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Hello')
    })
})

//then() method 
var promisess =new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Hello');
    },3000);
});

promisess.then(function(msg){
    console.log(msg); //'Hello'
})

//Fired Immediately
var promise =new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Hello')
    },3000);
});

//Change resolve, reject into succeed , fail 
var prom = new Promise(function(succeed, fail){
    setTimeout(function(){
        succeed('Hello')
    },3000)
});

prom.then(function(msg){
    console.log(msg);
});

//A non-promise value 
var p = new Promise(function(resolve, reject){
    resolve('Data1');
});

var p2 = p.then(function(data){
    return 'Data2';
});

console.log(p2); //'Data2'

//An exception thrown 
var p = new Promise(function (resolve, reject){
    resolve('OK');
});

var p2 = p.then(function(data){
    //callback throws an error
    throw 'Sorry';
});

console.log(p2); //Promise {<rejected>: "Sorry"}

//derived promise
var p = new Promise(function(resolve, reject) {
    reject("Sorry");
});

var p2 = p.then(null, function(data) {
    // callback throws an error
    throw "Sorry again";
});

console.log(p2);

// A promise value 
var p = new Promise(function(resolve, rejecgt){
    resolve('OK');
});

var p2 = p.then(function(data){
    //callback return a promise
    return new Promise(function(resolve,reject){
        resolve(data + 'Bye')
    });
});
console.log(p2)//'OK Bye'

//Error Handling 
function Promise(executor){
    //invoke the executor function
    try{ executor(); }
    catch(e) {reject(e); }
}

//Error handling using reject()
var p = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject('Sorry');
    }, 3000);
})

//Callback using then()
p.then(null, function(error){
    console.log("An error occurred: " + error)
});

//Throwing Exception
var p = new Promise(function(resolve, reject){
    setTimeout(function(){
        throw 'Sorry';
    },3000);
});

p.then(null, function(error){
    console.log('An error occurred: ' + error)
}); //An error occurred: Sorry

//Promises Chaining
var p = new Promise(function(resolve, reject) {
    resolve("OK");
});

var p2 = p.then(function(data) {
    throw "Sorry";
});

console.log(p2); // Promise {<rejected>: "Sorry"}