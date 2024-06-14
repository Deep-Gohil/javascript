import getValue from "../components/getData.js"
import Navbar from "../components/navbar.js";

const signIn = (e) => {
    e.preventDefault()

    let data = {
        firstName: getValue("firstname"),
        lastName: getValue("lastname"),
        number: getValue("number"),
        email: getValue("email"),
        password: getValue("password"),
    }
    console.log(data);
    localStorage.setItem("signUP", JSON.stringify(data));
    if(data.email && data.password){
        localStorage.setItem("isSignUp", true)
    }
    window.location.href = "/Project/index.html"
}

document.querySelector("#form").addEventListener("submit", signIn)
document.getElementById("navbar").innerHTML = Navbar()
