let num1 = process.argv
let num2 = process.argv
let num3 = process.argv

if(num1[2] > num2[3]){
    if(num1[2] > num3[4])
    {
        console.log("Large Number Is",num1[2]);
    }
    else
    {
        console.log("Large Number Is",num3[4]);
    }
}
else
{
    if(num2[3] > num3[4])
    {
        console.log("Large Number Is",num2[3]);
    }
    else
    {
        console.log("Large Number Is",num3[4]);
    }
}