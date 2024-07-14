import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()
let isSignup = JSON.parse(localStorage.getItem("signUpData"))
let isSignedUP = JSON.parse(localStorage.getItem("isSignUP"))

const handleLogin = (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (isSignedUP) {
        if (email != isSignup.email) {
            alert("User Not Found: " + email)
        }
        else if (password != isSignup.password) {
            alert("Invalid Password")
        }
        else {
            alert("Login Successful")
            localStorage.setItem("isLoggedIn", true)
            window.location.href = "/PlayStation/index.html"
        }
    }
    else{
        alert("Please Sign Up First")
        window.location.href = "/PlayStation/pages/signUP.html";
    }
}

document.getElementById("form").addEventListener("submit", handleLogin)