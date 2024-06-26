import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

let bookList = JSON.parse(localStorage.getItem("bookList")) || {};

document.getElementById("image1").src = bookList.image[0]
document.getElementById("image2").src = bookList.image[1]
document.getElementById("image3").src = bookList.image[2]
document.getElementById("title").innerHTML = bookList.title
document.getElementById("about").innerHTML = bookList.description

const handleData = (e) => {
    e.preventDefault();
    console.log("dhusjhj");
    let comment = document.getElementById("commentInput").value 
    document.getElementById("comment").innerHTML = `Comment: ${comment}`
}

document.getElementById("form").addEventListener("submit", handleData);