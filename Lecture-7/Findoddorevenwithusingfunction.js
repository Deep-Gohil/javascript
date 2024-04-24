const oddEven = () => {
    let number = process.argv

    if (number[2] % 2 == 0) {
        console.log("This Number Is Even !!");
    }
    else {
        console.log("This Number Is Odd !!");
    }
}

oddEven();