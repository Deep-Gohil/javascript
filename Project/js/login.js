import Navbar from "../components/navbar.js";

let signUp = JSON.parse(localStorage.getItem('signUP')) || false;
let isSignUp = JSON.parse(localStorage.getItem('isSignUp')) || false;

const login = (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    
    let nemail = signUp.email
    let npassword= signUp.password
    if(isSignUp){
        if (email != nemail) {
            alert("User Not Found "+email);
        }
        if(password != npassword){
            let error = document.getElementById("passError")
            error.innerHTML = `Ex Ka Number Yadd Rehta Hai, <br> Password nahi`
            // document.getElementById("password").addclassList("borderRed") 
        }
        window.location.href = "/Project/index.html"
        document.getElementById("navbar").innerHTML = Navbar(signUp.firstName)
    }
    else{
        alert("Please Sign Up First")
        window.location.href = "/Project/pages/signup.html"
    }
    
}

document.getElementById("form").addEventListener("submit",login)
document.getElementById("navbar").innerHTML = Navbar()