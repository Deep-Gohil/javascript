

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

let fcount = 0
let scount = 0
let tcount = 0

let secondId = setInterval(() => {
    fcount += 1;
    scount += 1;
    tcount += 1;
    document.getElementById("fcount").innerHTML = fcount;
    document.getElementById("scount").innerHTML = scount;
    document.getElementById("tcount").innerHTML = tcount;
    if(fcount == 50){
        clearInterval(secondId)
    }
    if(scount == 30){
        clearInterval(secondId)
    }
    if(tcount == 19){
        clearInterval(secondId)
    }
},1000)

// scroll({
    
// });