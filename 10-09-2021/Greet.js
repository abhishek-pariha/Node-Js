const name = 'jack';
const greet = true;
function tagExa(strings,nameValue)
{
    let str0 = strings[0];
    let str1 = strings[1];

    if(greet){

        return `${str0}${nameValue}${str1}`;
    }
} 
const result = tagExa `Hello ${name},How are you?`;
console.log(result);