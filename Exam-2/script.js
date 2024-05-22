let products = []

setTimeout(() => {
    products = []
    UIMaker();
    alert("Offer Is Not Available !! \n Press Enter To Return ")
    if(products == null) {
       alert("You can't submit Now");
    }

  }, 60000);
  

const UIMaker = () => {        
    document.getElementById("main").innerHTML = "";
    products.map((ele, index) => {

        let data_image = document.createElement("img")
        data_image.src = ele.image;
        let data_name = document.createElement("h1");
        data_name.innerHTML = ele.name;
        let data_price = document.createElement("h3");
        data_price.innerHTML = ele.price;
        let div = document.createElement("div");
        let maindiv = document.createElement("div");
        maindiv.setAttribute("class", "divm");
        let buy = document.createElement("button");
        buy.innerHTML = "Buy ";
        buy.addEventListener("click",handleBuy);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        let br = document.createElement("br");
        deleteButton.addEventListener("click", () => handleDelete(index));
        maindiv.append(buy, br ,deleteButton);
        div.append(data_image, data_name, data_price,maindiv);
        document.getElementById("main").append(div)
        // console.log(data.image, data.name, data.price);
    });
}

const handleDelete = (index) => {
    products.splice(index, 1);
    UIMaker();
}

handleBuy = () =>{
    alert("You Have Perchased This Order"); 
}

const handleProducts = (e) => {
    e.preventDefault();
    let data = {
        image: document.getElementById("image").value,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
    }
    products.push(data);
    UIMaker();
}

document.getElementById("form").addEventListener("submit", handleProducts);