import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()
let isSignup = JSON.parse(localStorage.getItem("signUpData"))

const handleLogin = (e) =>{
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email != isSignup.email){
        alert("User Not Found: " + email)
    }
    else if(password != isSignup.password){
        alert("Invalid Password")
    }
    else{
        alert("Login Successful")
        localStorage.setItem("isLoggedIn", true)
        // window.location.href = "/index.html"
    }

}

document.getElementById("form").addEventListener("submit",handleLogin)