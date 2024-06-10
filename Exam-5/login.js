
let logIn =  JSON.parse(localStorage.getItem('signInData')) || []

const login = (e) =>{
    e.preventDefault();
        let em = logIn.email
        let pass = logIn.password

        // login 
        let lemial = document.querySelector("#lemail").value
        let lpass = document.querySelector("#lpassword").value

    console.log(em,lemial,pass,lpass);
        if (lemial == em && lpass == pass) {
            alert("Login Successfull")
            window.location.href = "index.html"
        }
        else {
            alert("Login Fail !!");
        }

}

document.querySelector("#form").addEventListener("submit",login)