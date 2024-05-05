let array = [1,2,3,4,5,6,7,8,9,10]

// array.map((element)=>{
//     console.log(element);
// })

// let arr = array.filter((element)=>element%2==0)
// console.log(arr);
const chekeForVote = () =>
{
    let age = document.getElementById("inp").value 
    if(age >= 18)
    {
        document.getElementById("result").innerHTML = `You Can Vote !!`
        console.log(age);
    }
    else{
        document.getElementById("result").innerHTML = `You Can't Vote !!`
        console.log(age);
    }
}