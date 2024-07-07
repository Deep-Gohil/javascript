import { getData, handlePost } from "./API/api.js";
const handleData = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        grid: document.getElementById("grid").value,
        course: document.getElementById("course").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    handlePost(data)
}

const Mapper = async (ele) => {
    let request = await fetch(`http://localhost:3000/user/`)
    let response = await request.json()
    response.map((ele) => {
        let div = document.createElement("div")
        let name = document.createElement("h1")
        let grid = document.createElement("p")
        let course = document.createElement("p")
        let email = document.createElement("p")
        let password = document.createElement("p")

        name.textContent = ele.name
        grid.textContent = ele.grid
        course.textContent = ele.course
        email.textContent = ele.email
        password.textContent = ele.password

        div.append(name,grid,course,email,password)

        document.getElementById("userDetails").append(div)
    })
}
// Mapper()
document.getElementById("form").addEventListener("submit",handleData)