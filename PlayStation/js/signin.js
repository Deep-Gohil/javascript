import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

const handleSignpost = (e) => {
    e.preventDefault();
    let user = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        number: document.getElementById("number").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        signUpDate: new Date().toISOString().split('T')[0]
    }
    localStorage.setItem("signUpData", JSON.stringify(user));
}

document.getElementById("form").addEventListener("submit", handleSignpost)