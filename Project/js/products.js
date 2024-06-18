import Navbar from "../components/navbar.js";
let products = JSON.parse(localStorage.getItem('products')) || [];
let signUp = JSON.parse(localStorage.getItem('signUP')) || false;

const UIMaker = (data) => {
    document.querySelector("#products").innerHTML = "";
    data.map((ele, index) => {
        let div = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h1');
        let price = document.createElement('h2');
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => { deleteProduct(index) });
        let buy = document.createElement('button');
        buy.innerHTML = 'Buy';
        buy.addEventListener('click', () => { alert("Product Buy Successfully") });
        let span = document.createElement('span');
        span.append(buy, deleteButton);
        image.src = ele.image;
        title.innerHTML = ele.title;
        price.innerHTML = ele.price;
        div.append(image, title, price, span);
        document.getElementById("products").append(div);
    });
};

const deleteProduct = (index) => {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    UIMaker(products);
};

UIMaker(products);

const handleSort = (value) => {
    let temp;
    if (value == "LTH") {
        temp = products.sort((a, b) => a.price - b.price);
    } else {
        temp = products.sort((a, b) => b.price - a.price);
    }
    UIMaker(temp);
};

const handleSearch = (e) => {
    e.preventDefault();
    let inputData = document.getElementById('searchInput').value;
    let temp = products.filter(ele => ele.title.includes(inputData));   
    UIMaker(temp);
};

document.getElementById("navbar").innerHTML = Navbar(signUp.firstName);

document.getElementById("LTH").addEventListener("click", () => handleSort("LTH"));
document.getElementById("HTL").addEventListener("click", () => handleSort("HTL"));
document.getElementById("searchButton").addEventListener("click", handleSearch);
document.getElementById("searchInput").addEventListener("input", handleSearch);