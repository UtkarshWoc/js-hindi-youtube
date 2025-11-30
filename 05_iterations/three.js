//for of  
// const arr= [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }
// can work similarly in strings


//Map
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

for(const key of map){
    console.log(key) //prints key value pair
}


//Objects are not iterable thru for-of method, for that we use for-in which we have discussed in next file


