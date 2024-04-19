let Australia = process.argv
let England = process.argv 

if(Australia[2] == England[3])
{
    console.log("Tie");
}
else if(Australia[2] > England[3])
{
    console.log("England");
}
else if(Australia[2] < England[3]){
    console.log("Australia");
}
