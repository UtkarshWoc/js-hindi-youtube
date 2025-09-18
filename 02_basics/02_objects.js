//Now we talk about
//Object singleton i.e. with help of constructor

// const tinderUser={} //non singleton
// const tinderUser=new Object() //singleton

// tinderUser.id="123abs"
// tinderUser.name="Sammy"

// console.log(tinderUser)

// const regularUser={
//     fullname: {
//         userfullname: {
//             firstname: "Utkarsh",
//             lastname: "Shukla"
//         }
//     }
// }
// console.log(regularUser.fullname?.userfullname.firstname); //this question mark checks if it exists





// const obj1={1: "a",2:"b"};
// const obj2={3:'c'};

// const obj3={obj1,obj2};
// const obj4=Object.assign({},obj1,obj2); 
//this "{}" is a good way so that we by default give an empty array & 
//thus we get the values from all following target arrays into "{}" otherwise the values go into obj1

// const obj5={...obj1,...obj2}; //spreading the values, better way to merge
// console.log(obj3)
// console.log(obj4)
// console.log(obj5)

// console.log(Object.keys(obj1)) //return an array of keys
// console.log(Object.values(obj1)) //return array of values





// DESTRUCTURING OF OBJECTS
// const course={
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "Hitesh"
// }

// const {courseInstructor: instructor} = course;
// console.log(instructor)
// console.log(course) 




//JSON
//as an object->
{
    "name":"hitesh",
    "coursename":"js in hindi" 
}

//as an array of object
[
    {},
    {},
    {}
]


