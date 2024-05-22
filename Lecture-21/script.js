

let min = 4
let sec = 59

let id = setInterval(() => {
    sec = sec -1
    document.getElementById("firtsCounter").innerHTML = `${min} : ${sec}`;
    if(min == 0 && sec == 0){
        clearInterval(id)
        document.getElementById("firtsCounter").innerHTML = `Timeout`;
    }
    
    if(sec == 0){
        min = min -1;
        sec = 59;
    }
},1000)

// scroll({
    
// });