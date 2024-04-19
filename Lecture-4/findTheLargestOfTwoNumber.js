let num1 = process.argv
let num2 = process.argv

if(num1[2] == num2[3]){
    console.log("Both Number Is Same !!");
}
else if(num1[2] > num2[3])
{    
    console.log("Large Number Is",num1[2]);
}
else
{
    console.log("Large Number Is",num2[3]);
}