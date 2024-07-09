let product = [];

const Mapper = (data) => {
    document.getElementById("products").innerHTML = "";
    data.map((ele) => {
        let div = document.createElement('div');
        div.classList.add('div');

        let image = document.createElement('img');
        image.src = ele.images[0];
        image.classList.add('img-fluid');
        image.addEventListener('click', () => handleProduct(ele));

        let title = document.createElement("h5");
        title.innerHTML = ele.title;

        let price = document.createElement("h3");
        price.innerHTML = `$${ele.price}`;

        let category = document.createElement("h6");
        category.innerHTML = `Category: ${ele.category}`;

        let rating = document.createElement("h6");
        rating.innerHTML = `Rating: ${ele.rating}`;

        div.append(image, title, category, price, rating);

        document.getElementById("products").append(div);
    });
    product = data;
};

const handleProduct = (product) => {
    localStorage.setItem("products", JSON.stringify(product));
    window.location.href = "/API-Exam/productDetail.html";
};

const API = async () => {
    let request = await fetch('https://dummyjson.com/products/');
    let response = await request.json();
    Mapper(response.products);
};
API();

const handleShort = (e) => {
    e.preventDefault();
    let sortedProducts = [...product].sort((a, b) => a.price - b.price);
    Mapper(sortedProducts);
};

const handleReverseShort = (e) => {
    e.preventDefault();
    let sortedProducts = [...product].sort((a, b) => b.price - a.price);
    Mapper(sortedProducts);
};

const handleRatingLowToHigh = (e) => {
    e.preventDefault();
    let sortedProducts = [...product].sort((a, b) => a.rating - b.rating);
    Mapper(sortedProducts);
};

const handleRatingHighToLow = (e) => {
    e.preventDefault();
    let sortedProducts = [...product].sort((a, b) => b.rating - a.rating);
    Mapper(sortedProducts);
};

const handleSearch = (e) => {
    e.preventDefault();
    let searchTerm = e.target.value.toLowerCase();
    let filteredProducts = product.filter((product) =>
        product.title.includes(searchTerm) ||
        product.category.includes(searchTerm)
    );
    Mapper(filteredProducts);
};


document.getElementById("pLTH").addEventListener("click", handleShort);
document.getElementById("pHTL").addEventListener("click", handleReverseShort);
document.getElementById("rLTH").addEventListener("click", handleRatingLowToHigh);
document.getElementById("rHTL").addEventListener("click", handleRatingHighToLow);
document.getElementById("search").addEventListener("keypress", handleSearch)