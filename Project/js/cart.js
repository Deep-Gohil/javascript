import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()
let isLogin = localStorage.getItem("isLogin") || false;
let cartList = JSON.parse(localStorage.getItem("cartList")) || []


const UIMaker = (cartList) => {
    cartList.map((ele) => {
        let tr = document.createElement("tr")

        let img = document.createElement("td")
        let image = document.createElement("img")
        image.src = ele.image
        img.append(image)

        let title = document.createElement("td")
        title.innerHTML = ele.title

        let price = document.createElement("td")
        price.innerHTML = ele.price
    })
}