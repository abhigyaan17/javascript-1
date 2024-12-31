// function sayMyName() {
//     console.log("A")
//     console.log("B")
//     console.log("H")
//     console.log("I")
// }

function addTwoNum(num1, num2) {
    // let num3 = num1 + num2;
    return num1 + num2;
}
const user = { 
    username: undefined,
    isLoggedIn: false
}
const {username} = user


const result = addTwoNum(2, 5);
// console.log(result);

function checkUserLog(username){
    if (!username) {
        console.log("Plz enter the username");
        return
    }
    return `Welcome ${username}`
}
const result_value = checkUserLog(username)
console.log(result_value);

