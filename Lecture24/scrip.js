let isValidUsername = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/
const handleValidation = (e) => {
    e.preventDefault();

    let data = {
        username:document.querySelector("#username").value,
        number:document.querySelector("#number").value,
        password:document.querySelector("#password").value,
    }
    if(isValidUsername.test(data.username)){
        document.querySelector("#username").setAttribute("class",isValid)
    }
}

document.querySelector("form").addEventListener("submit", handleValidation)
