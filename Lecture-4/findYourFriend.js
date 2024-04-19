let age = process.argv

console.log(age);

if (age[2] < 13) {
    console.log("1 Kms");
}
else if (age[2] >= 13 && age[2] < 18) {
    console.log("5 Kms");
}
else if (age[2] >= 18 && age[2] < 30) {
    console.log("10 Kms");
}
else {
    console.log("You can have friends from anywhere");
}