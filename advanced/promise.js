// const promiseOne = new Promise(function(resolve,reject) {
//     setTimeout(function(){
//         console.log('Async Task 1');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Done");
// })

// new Promise(function(resolve,reject) {
//     setTimeout(function(){
//         console.log('Async Task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise 2 Done")
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 3")
//         resolve({uname: "Abhi@1789", gender: "Male"})
//     },1000)
// })

// promiseThree.then(function(details){
//     console.log("Promise 3 Done");
//     console.log(details);
// })

// const promiseFour = new Promise(function(resolve,reject) {
//     setTimeout(function(){
//         console.log("Asyn Task 4")
//         let error = false
//         if(!error){
//             resolve({uname: 'abhi@1789', gender: 'Male'})
//         }
//         else{
//             reject("Error : Could not fetch data")
//         }
//     },1000)
// })

// promiseFour.then(function(success_msg){
//     console.log(success_msg);
// })
// promiseFour.catch(function(failed_msg){
//     console.log(failed_msg);
// })

// promiseFour.then((success_msg) => {
//     console.log("Promise 4 Done")
//     console.log(success_msg)
//     return success_msg
// }).then((success_msg) => {
//     console.log("Details:")
//     console.log(success_msg.uname);
// }).catch((failed_msg) => {
//     console.log(failed_msg)
// }).finally(() => console.log("The promise has ended with results"))


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Asyn Task 5")
//         let error = true
//         if(!error){
//             resolve({uname: 'abhi@1789', gender: 'Male'})
//         }
//         else{
//             reject("Error : Could not fetch data")
//         }
//     },1000)
// })

// async function resolvedPromise() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// resolvedPromise()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))