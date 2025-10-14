// let tinderUser = new Object(); // this is how singleton is made
const tinderUser = {};
tinderUser.name = "Shriyansh";
tinderUser.age = 27;
tinderUser.email = "agarwalshriyansh007@gmail.com"
tinderUser.marks = {
    10 : 87.6,
    12 : 83.6,
    grad : 75.6
}

// console.log(tinderUser.marks["10"]);
// console.log(tinderUser.marks?.grad);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj6 = {5: "c", 6: "d"};

const obj3 = {obj1, obj2}; // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({}, obj1, obj2, obj6);

// console.log(obj4);

const users = [
    {
        id:1,
        email: "s1@gmail.com"
    },
    {
        id:2,
        email: "s2@gmail.com"
    },
    {
        id:3,
        email: "s3@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}
const {price, courseInstructor: instructor} = course;
console.log(instructor);

// const navbar = (props.company) => {
// }
// navbar(company = "Desi Akhada")
// const navbar = ({company}) => {
// }
// navbar(company = "Desi Akhada")

