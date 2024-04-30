let arr=[2,3,4,5,6,9,10,3]
let minimum = arr[0]
for(let i=0; i<arr.length; i++)
{
    if(arr[i] < minimum){
        minimum = arr[i]
    }
}

console.log(minimum)