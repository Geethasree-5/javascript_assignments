function factorial (no)
{
    var fact=1
    for(i=1;i<=no;i++)
        {
            fact=fact*i;
        }
        // console.log(fact)
        return fact;
}
var result = factorial(6);
console.log(result);
console.log(factorial(5));