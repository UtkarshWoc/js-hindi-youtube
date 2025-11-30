const myObject={
    js: 'javascipt',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject){
    console.log(`${key} is shortcut for ${myObject[key]}`); //takes up keys of objects
}


