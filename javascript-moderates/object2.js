// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1789abhi"
tinderUser.name = "abhigyaan"
// console.log(tinderUser.id);

const userDetails = {

    fullname: {
        Username: {
            firstname: "Abhigyaan",
            lastname: "Sharma"
        }
    },
    age: 19,
}
// console.log(userDetails.fullname.Username.lastname);

const obj1 = {
    1: 'A',
    2: 'B'
}
const obj2 = {
    3: 'C',
    4: 'D'
}

// const obj3 = {obj1, obj2}
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const users = [
    {
        name1: "Abhi",
        age1: 19
    },
    {
        name2: "Abhi",
        age2: 19
    },
    {
        name3: "Abhi",
        age3: 19
    }
]
// console.log(users[1].name2);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));

const course = {
    courseName: "Javascript-tutorial",
    length: "20hr",
    Head: "Abhigyaan"
}

// console.log(course.Head);
const { Head } = course
console.log(Head);
