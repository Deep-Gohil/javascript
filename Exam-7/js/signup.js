import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

let signUP = JSON.parse(localStorage.getItem("signUP")) || [];

const handleSignUP = (e) =>{
    e.preventDefault();
    let UserData = {
        name: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    localStorage.setItem("signUP", JSON.stringify(UserData))
    localStorage.setItem("isSignUP", true)
    window.location.href = "/Exam-7/index.html"
}

document.getElementById("Userdata").addEventListener("submit",handleSignUP)