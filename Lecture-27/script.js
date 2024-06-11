let products = JSON.parse(localStorage.getItem('products')) || [];

const deleteProduct = (id) =>{
    console.log(id);
    products.splice(id, 1);
    UIMaker(products);
}
const UIMaker = (data) =>{
    document.querySelector("#products").innerHTML = " "
    data.map((ele,index)=>{
        let title = document.createElement("h1");
        title.innerHTML = ele.title;
        let image = document.createElement("img");
        image.src = ele.image;
        let price = document.createElement("h3");
        price.innerHTML = ele.price;
        let category = document.createElement("h3");
        category.innerHTML = ele.category;
        let div = document.createElement("div");

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => deleteProduct(index));
        div.append(title,image,price,category,deleteButton);
        document.querySelector("#products").append(div);
    })
}
UIMaker(products);