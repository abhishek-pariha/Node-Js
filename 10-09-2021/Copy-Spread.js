const arr = [1,2,3];
const arr1 = [...arr];

console.log(arr+'\n'+arr1);
arr.push(4);
console.log(arr+'\n'+arr1);