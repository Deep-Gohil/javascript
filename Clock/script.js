setInterval(() => {
    let date = new Date()

    // console.log(date.getHours());
    document.getElementById("hour").innerHTML = date.getHours();
    document.getElementById("min").innerHTML = date.getMinutes();
    document.getElementById("sec").innerHTML = date.getSeconds();
    if(date.getHours() < 12) {
        document.getElementById("AMPM").innerHTML = "AM";
    }
    else{
        document.getElementById("AMPM").innerHTML = "PM";
    }
}, 1000)
let today = new Date();
let compare = today.getDay()-1;
// static 
// let compare = 5 
console.log(compare);

if (compare == 1) {
    let day = document.getElementById("mon");
    day.setAttribute("class", "dates");
} else if (compare == 2) {
    let day = document.getElementById("tue");
    day.setAttribute("class", "dates");
} else if (compare == 3) {
    let day = document.getElementById("wed");
    day.setAttribute("class", "dates");
} else if (compare == 4) {
    let day = document.getElementById("thu");
    day.setAttribute("class", "dates");
} else if (compare == 5) {
    let day = document.getElementById("fri");
    day.setAttribute("class", "dates");
} else if (compare == 6) {
    let day = document.getElementById("sat");
    day.setAttribute("class", "dates");
} else if (compare == 0) {
    let day = document.getElementById("sun");
    day.setAttribute("class", "dates");
}
