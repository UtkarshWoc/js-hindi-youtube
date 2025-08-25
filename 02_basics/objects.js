//singleton- if made from constructor, always singleton
//object.create

//object literals
const mySym=Symbol("keys1");
const JsUser={
    name:"Hitesh",
    age:18,
    [mySym]:"mykey1", //to declare symbols, we need to declare them first above then put them in square brackets
    location:"Jaipur",
    email: "sdhfbsn@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
//Internallyy even the keys are stored as string types but we dont need to effectively write it like that
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// Object.freeze(JsUser); //so now if any changes are made, it doesnt throw any errors but it doesnt propogate

JsUser.greetings=function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`); //the keyword this refers to the object that the function is called on.
}
console.log(JsUser.greetingTwo());




