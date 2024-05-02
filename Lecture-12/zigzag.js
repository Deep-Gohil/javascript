let arr = [9,6,4,5,8,3,1,3]

let i = 0
let j = arr.length -1

while(i <= j){
    if(i == j){
        console.log(arr[i]);
        i++
        j--
    }
    else{
        console.log(arr[i++], arr[j--]);
    }
}