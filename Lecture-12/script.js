let arr = [9, 6, 4, 5, 8, 3, 1, 7, 2, 10];
i = 0;

// Real Array 
console.log("Real Array");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// remove element from last / stack
console.log("Remove Last Element");
arr.pop()
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// add element from last / stack
console.log("Add Last Element");
arr.push(11)
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// remove element from begening / queue 
console.log("Remove First Element");
arr.shift()
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// add element from begening / queue
console.log("Add First Element");
arr.unshift(0)
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// splice 
console.log("Splice");
arr.splice(2, 0, 12)
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// reverse array 
arr.reverse()
console.log("Reverse Array");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}