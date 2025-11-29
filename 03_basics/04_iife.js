//Immendiately Invoked Function Expression (IIFE)

(function chai(){ //This is IIFE
    console.log("DB CONNECTED");
})(); // We need this semicolon cuz the compiler doesnt know where to stop executing


//How to define IIFE=> ()(). first wale m function definition & 2nd wala khali
//Why IIFE=> To protect from the pollution of global variables & It automatically executes


( (name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh'); //this hitesh goes into the arrow func as argument

