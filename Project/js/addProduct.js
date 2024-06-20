import Navbar from "../components/navbar.js";
let products = [];
let signUp = JSON.parse(localStorage.getItem('signUP')) || false;

const handleProduct = (e) => {
    e.preventDefault();
    let product = {
        title : document.getElementById("titleOfProduct").value,
        price : document.getElementById("price").value,
        image : document.getElementById("image").value,
        id: products.length == 0 ? 1 : products[products.length - 1].id + 1
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    console.log(product.id);
}
document.getElementById("navbar").innerHTML = Navbar(signUp.firstName)
document.getElementById("form").addEventListener("submit", handleProduct)