const Mapper = (data) => {
    data.map((ele) => {
        let image = document.createElement('img');
        image.src = ele.image;
        image.classList.add('img-fluid');

        let title = document.createElement('h6');
        title.innerHTML = ele.title;

        let price = document.createElement("h4")
        price.innerHTML = ele.price;

        let div = document.createElement("div")
        div.append(image, title, price)

        document.getElementById("products").append(div)
    })
}

const data = async () => {
    let request = await fetch("https://fakestoreapi.com/products")
    let response = await request.json()
    Mapper(response)
}
data()