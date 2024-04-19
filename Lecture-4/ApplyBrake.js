let distance = process.argv
let time = process.argv
let speed
speed = distance[2]/time[3]


if(speed > 40)
{
    console.log("Apply Break");
}
else{
    console.log("Keep Going");
}