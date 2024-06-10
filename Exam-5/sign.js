
let signIn = [];

const signin = (e) =>{
    e.preventDefault()
    let signInData={
        name: document.querySelector("#sname").value,
        email: document.querySelector("#semail").value,
        password: document.querySelector("#spassword").value,
        image: document.querySelector("#sURL").value,
        about: document.querySelector("#about").value,
        country: document.querySelector(".val").value,  
    }
    signIn.push(signInData)
    // console.log(signInData.country);
    localStorage.setItem("signInData", JSON.stringify(signInData))
    window.location.href = "login.html"
}

document.querySelector("#form").addEventListener("submit",signin)