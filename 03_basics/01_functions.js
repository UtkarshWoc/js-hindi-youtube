// function myName(){
//     console.log("H");
//     console.log("i");
// }
// myName();



// function TwoNumbers(n1,n2){
//     let res= n1+n2
//     return res;
// }

// let result= TwoNumbers(2,5);

// console.log("Result: ",result)


function loginUserMessage(username){
    if(username===undefined){ // or we can write !username ===> equivalent to a false statement
        console,log("pls enter a username")
        return
    }
    return `${username} is logged in`
}

// console.log(loginUserMessage("utkarsh"))



//what if we dont know hoq many parameters are gonna come in like a shopping cart?
function calculateCardPrice(val1,val2,...num1){ 
    //this "..." is called rest operator here (not spread operator)
    //basically rest & spread operator look the same, their only difference is their use case
    return num1
}

// console.log(calculateCardPrice(200,400,500,2000)) //200 goes into val1, 400 in val2 rest in num1
const user={
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`); 
    //sinces prices doesnt exist in user, it returns undefined. 
    //we need to check for typesafety
}
handleObject(user);
//OR
handleObject({
    username :"fam",
    price:  399
})

const mynewArray=[200,400,500,600]

function getSecondValue(getArray){
    return getArray[1];
}
console.log(getSecondValue(mynewArray))