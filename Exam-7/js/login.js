import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

let signUp = JSON.parse(localStorage.getItem("signUP"));
let isSignUP = JSON.parse(localStorage.getItem("isSignUP"));

const handleLogin = (e) =>{
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(isSignUP){
        if(email != signUp.email){
            alert(`User Not Found: ${email}`);
        }
        else if(password != signUp.password){
            alert("Invalid Password")
        }
        else{
            window.location.href = "/Exam-7/index.html"
        }
    }
    else{
        alert("Please Sign Up First");
        window.location.href = "/Exam-7/pages/signUP.html";
    }
}

document.getElementById("Userdata").addEventListener("submit", handleLogin)