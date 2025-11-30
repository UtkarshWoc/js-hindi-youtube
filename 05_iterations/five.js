// const coding=["js","ruby","java","cpp"]

// coding.forEach(function (val) {
//     console.log(val);
// });

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) //We pass this function as parameter


// coding.forEach((item,index,arr)=>{ //these 3 are the parameters inside forEach
//     console.log(item,index,arr);
// })







const myCoding = [
    {
        langName: "java",
        filename: "java"
    },
    {
        langName: "C++",
        filename: "cpp"
    }
]

myCoding.forEach( (item)=> {
    console.log(item.langName);
    
})


