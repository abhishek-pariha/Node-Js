// let func = function(...args){
//     console.log(args);
// }
// func(3);
// func(4,5,6);

function sum(x,y,z){
    console.log(x+y+z);
}
const num1 = [1,3,4,5];
sum(...num1);