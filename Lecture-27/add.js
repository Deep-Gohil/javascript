let products = JSON.parse(localStorage.getItem('products')) || [];

const handleData = (e) =>{
    e.preventDefault();
    let product = {
        title: document.querySelector("#title").value,
        image: document.querySelector("#url").value,
        price: document.querySelector("#price").value,
        category: document.querySelector("#category").value,
    }
    products.push(product);
    localStorage.setItem("products",JSON.stringify(product))
    window.location.href="/Lecture-27/index.html"
}
document.querySelector(".form").addEventListener("submit",handleData)