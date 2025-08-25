let arr=[0,1,2,3,4,5]
// console.log(arr[1]);

//Array Methods

// arr.push(2)
// console.log(arr);
// arr.pop()
// console.log(arr);

// arr.unshift(9); //adds 9 in start
// arr.shift(); //removes 9 from start
// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const newArr=arr.join();
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

//slice & splice
// const myn1=arr.slice(1,3);
// console.log(myn1);
// console.log("B ",arr);

// const myn2=arr.splice(1,3); //splice not only includes range but also makes changes in original array. 
// console.log(myn2);
// console.log("B ",arr);

// const marvel=["thor","ironmman","spiderman"];
// const dc=["superman","flash","batman"];

// marvel.push(dc); // this inserts the entire dc array which we dont want
// const all=marvel.concat(dc); //this returns a new array with merged stuff
// const allheroes=[...marvel, ...dc]; //the three dots are spread func which treat every element in array as an individual element.
// console.log(allheroes);


// const anoth=[1,2,3,[4,5,6],7,[8,[9,10]]];
// const real=anoth.flat(Infinity); //flat() function flattens an array and we pass the depth of the array till what we want to make it flattened
// console.log(real);

// console.log(Array.isArray("Hitest"));
// console.log(Array.from("Hitest")); //turns it into  an array c
// console.log(Array.from({name: "hitesh"})); //if we dont pass whether we need arrays of keys/values, it returns an empty array 

console.log(Array.of(100,200,300)); //returns an array

