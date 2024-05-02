const chekeVowel = (str) => {
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            count++
        }
    }
    console.log(count);
}
chekeVowel("red and white");