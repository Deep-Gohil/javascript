import Navbar from "../components/navbar.js";
let products = JSON.parse(localStorage.getItem('products')) || [];

const UIMaker = (data) =>{
    document.querySelector("#products").innerHTML = " "
    data.map((ele,index)=>{
        let div = document.createElement('div')
        let image = document.createElement('img')
        let title = document.createElement('h1')
        let price = document.createElement('h2')
        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Delete'
        deleteButton.addEventListener('click',()=>{ deleteProduct(index)})
        let buy = document.createElement('button')
        buy.innerHTML = 'Buy'
        buy.addEventListener('click',()=>{ alert("Product Buy Successfully")})
        let span = document.createElement('span')
        span.append(buy,deleteButton)
        image.src = ele.image
        title.innerHTML = ele.title
        price.innerHTML = ele.price
        div.append(image,title,price,span)
        document.getElementById("products").append(div)
    })
}

const deleteProduct = (index) =>{
    products.splice(index,1)
    localStorage.setItem('products',JSON.stringify(products))
    UIMaker(products)
}

UIMaker(products)

document.getElementById("navbar").innerHTML = Navbar()