const num=[1,2,3]

//Reduce- The reduce() method in JavaScript is used to execute a reducer function on each element of the array, resulting in a single output value. 
// It's often used to sum all values in an array, flatten an array of arrays, or perform complex object transformations.


// const myTotal=num.reduce(function(acc,curr_val){ //acc-> accumulator, curr_val-> current value
//     console.log(`acc: ${acc} and current value: ${curr_val}`);
//     return acc+curr_val
    
// }, 0)

// //Understanding the Code-
// // The reduce method takes two main arguments:
// // A Callback Function (The Reducer): This is the function that runs on every element. It takes four arguments, but your code only uses the first two:
// // acc (Accumulator): The value resulting from the previous reduction (the running total).
// // curr_val (Current Value): The current element being processed in the array.
// // Initial Value (0 in your code): This is the starting value for the acc (accumulator) on the very first iteration.

// console.log(myTotal);




const myTotal= num.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);