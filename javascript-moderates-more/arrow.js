const user = {
    userid: "Abhi1789",
    username: "Abhigyaan",
    isActiveMem: true,
    welcomeMsg: function(){
        // console.log(`Hi ${this.username}`);
        // console.log(this);
    }
}
user.welcomeMsg()

const addNum = (num1, num2) => num1 + num2
console.log(addNum(2,5));
