const chekeVowel = (str) =>{
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let result 
    for(let i = 0; i < str.length; i++){
        if(vowel.includes(str[i])){
            console.log("True");
        }
        else
        {
            console.log("False");
        }
    }
}
chekeVowel('hello')