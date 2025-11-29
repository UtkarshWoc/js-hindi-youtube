// const user={
//     username: "hitesh",
//     price : 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`) //points to current context
//         console.log(this) //prints the entire current context (i.e. the entire dictionary, in this case)
//     }
// }

// user.welcomeMessage() //prints message
// user.username="sam"
// user.welcomeMessage()

// console.log(this) //no context, thus prints empty object




// function chai(){
//     let username="hitesh"
//     console.log(this) //prints a lot of gibberish
//     console.log(this.username) //prints undefined, thus "this" works only in objects not function
// }
// chai()





// const chai = function(){
//     let username="hitesh"
//     console.log(this) 
//     console.log(this.username) 
// }
// chai() //prints the same stuff



// const chai = () => {
//     let username="hitesh"
//     console.log(this) 
//     console.log(this.username) 
// }
// chai()



// const addTwo=(n2,n1)=>{ //explicit return statement
//     return n2+n1
// }



// const addTwo = (n1,n2) => (n1+n2)  //Implicit return statement, where we assume that return is obvious
//if u write curly braces, we need to write "return" while with normal braces we dont

// const addTwo= (n1,n2)=> ({username:"hitesh"})
// console.log((addTwo(3,4)))












