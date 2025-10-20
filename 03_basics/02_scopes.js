
// if(true){
//     let a=10;
// const b=20;
// var c=30;    
// }

// console.log(a) //doest work
// console.log(b) //doesnt work
// console.log(c) //somehow it prints 30, even tho it shouldnt be possible

//================================================

function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}

// one();

// if(true){
//     const username="hitesh"
//     if(username=="hitesh"){
//         const website="yt";
//         console.log(username+website);
//     }
//     // console.log(website) //error
// }
// console.log(username) //error


//=========================INTERESTING=======================

addone(5); //no error
function addone(num)
{
    return num+1;
}

addTwo(5); //throws error 
const addTwo=function(num){
    return num+2
}








