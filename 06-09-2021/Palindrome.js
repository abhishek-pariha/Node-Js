function checkplaindrome(str)
{
    var len = String.length;
    for(var i=0;i<len/2;i++)
    {
        if(String[i] !== String[len - 1 - i])
        {
            return "It is not a Palindrome";
        }
    }
    return "It is Palindrome";
}
var String = "121";
var value = checkplaindrome(String);
console.log(value);