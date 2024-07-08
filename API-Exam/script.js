
const Mapper = (data) => {
    console.log(data);
    data.map((ele) => {
        let div = document.createElement('div');
        div.classList.add(`div`);
        
        let image = document.createElement('img');
        image.src = ele.images[0];
        image.classList.add('img-fluid');
        image.addEventListener('click', () => handleProduct(ele))

        let title = document.createElement("h5");
        title.innerHTML = ele.title;

        let price = document.createElement("h3");
        price.innerHTML = ele.price;

        let category = document.createElement("h6");
        category.innerHTML = `Category: ${ele.category}`;

        div.append(image,title,category,price);

        document.getElementById("products").append(div)
    })
}

const handleProduct = (product) => {
    localStorage.setItem("products", JSON.stringify(product));
    window.location.href = "/API-Exam/productDetail.html";
}

const API = async () => {
    let request = await fetch('https://dummyjson.com/products/')
    let response = await request.json()
    Mapper(response.products)
}
API()