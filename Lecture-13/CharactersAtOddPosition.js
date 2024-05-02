const oddPosition = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 1) {
            console.log(str[i]);
        }
    }
}
oddPosition('red and white');