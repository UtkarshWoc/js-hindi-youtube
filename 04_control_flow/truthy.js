//falsy values- values which are considered false by default
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], (), function(){}

//thus if we
// if(userEmail.length()===0){
//     //pint "array is empty";
// }



//Nullish Coalescing Operator (??): null undefined
//if we get a value then give value else give null

let val1;
val1=5??10 //gives 5
console.log(val1)

val1=null??10 //gives 10
console.log(val1)

val1= undefined?? 15 //gives 15
console.log(val1)

val1= null??10??20 //gives 10- basically the first value we get from left to  right
console.log(val1)