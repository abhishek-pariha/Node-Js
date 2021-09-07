var n=5;
var string = "";
for(var i=0;i<=n;i++)
{
    for(var j=0;j<i;j++)
    {
        string += String.fromCharCode(j+65);
    }
    string +="\n";
}
console.log(string);