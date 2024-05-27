let isValidUsername = /^[0-9A-Za-z]{8,26}$/
let isValidMobilenumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
const handleValidation = (e) => {
    // e.preventDefault();
    let data = {
        username:document.querySelector("#username").value,
        number:document.querySelector("#number").value,
        password:document.querySelector("#password").value,
    }
    if(e.key){
        if(isValidUsername.test(data.username)){
            document.querySelector("#username").classList.add("isValid")
            document.querySelector("#username").classList.remove("isNotValid")
        }
        else{
            document.querySelector("#username").classList.add("isNotValid")
        }
    }
}
document.querySelector("#username").addEventListener("keypress", handleValidation)
