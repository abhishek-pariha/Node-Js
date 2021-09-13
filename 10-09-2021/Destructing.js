const person = {
    name: 'Abhishek',
    age: 25,
    gender: 'male'
}

let n = person.name;
let a = person.age;
let g = person.gender;

let{name,age,gender} = person;

console.log(n);
console.log(a);
console.log(g);
console.log(name+'\n'+gender+age);