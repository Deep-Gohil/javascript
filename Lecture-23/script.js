

const handleValid = () =>{
    let data = {
        username:document.querySelector("#name").value,
        password:document.querySelector("#password").value,
        phone:document.querySelector("#number").value,
    }
}

document.querySelector("#form").addEventListener("submit",handleValid)