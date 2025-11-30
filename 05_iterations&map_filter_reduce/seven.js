const num=[1,2,8,9,2,4,5,7,4]

//Map- 
// const newNum=num.map((num)=> num+10) //OR const newNum=num.map((num)=> {return num+10})
// console.log(newNum);


//Map Chaining
const newNum=num
                .map((num)=>num*10)
                .map((num)=>num+1) //gets the updated values after the above map function executes
                .filter((num)=>num>=40)

console.log(newNum);