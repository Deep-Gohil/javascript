import Navbar from "../components/navbar.js";
let signUp = JSON.parse(localStorage.getItem('signUP')) || false;

console.log(Navbar);
document.getElementById("navbar").innerHTML = Navbar(signUp.firstName)

