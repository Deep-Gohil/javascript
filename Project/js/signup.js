import getValue from "../components/getData.js"

const signIn = (e) =>{
    e.preventDefault()
    
    let data = {
        firstName:getValue("firstname"),
        lastName:getValue("lastname"),
        number:getValue("number"),
        email:getValue("email"),
        password:getValue("password"),
    }
    console.log(data);
    localStorage.setItem("signUP",JSON.stringify(data));
}

document.querySelector("#form").addEventListener("submit", signIn)