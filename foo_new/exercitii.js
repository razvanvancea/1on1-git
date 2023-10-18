function numere (a,b)
{
    return a+b;
}

console.log(numere(2,3))

function numere1 (x)
{
    return 1+x;
}
console.log(numere1(6));

function varsta(v)
{
    return `Numarul de zile este ${365*v}`
}
console.log(varsta(29))

function tipDate(y)
{
    let t = typeof(y);
    if (t == "number")
    {
        return "este numar"
    }
    else if (t == "string")
       {
        return "este string"
       } 
       else return "altceva"
}
console.log(tipDate(true));


function primulEl (p)
{
   return p[0]; 
}
const a=[2,6,1,8,3];
console.log (primulEl(a));