let num = 6
let i, sum = 0

for (i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log("Sum: " + sum);