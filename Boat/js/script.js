import Footer from "../components/footer.js";
import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

let shopByProducts = [
    {
        id: 1,
        name: "True Wireless Earbuds",
        image: "https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854"
    },
    {
        id: 2,
        name: "Neckbands",
        image: "https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854"
    },
    {
        id: 3,
        name: "Smart Watches",
        image: "https://www.boat-lifestyle.com/cdn/shop/files/Smartwatches_88f12bcf-24bd-4e3a-aacb-ecc204f62179_small.png?v=1684842853"
    },

    {
        "id": 4,
        "name": "Wireless Headphones",
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854"
    },
    {
        "id": 5,
        "name": "Wireless Speakers",
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854"
    },
    {
        "id": 6,
        "name": "Wired Headphones",
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854"
    },
    {
        "id": 7,
        "name": "Wired Earphone",
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854"
    },
    {
        "id": 8,
        "name": "Soundbars",
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/Soundbars_d9a7bdfd-e780-4581-ab85-f2e86f84cd28_small.png?v=1684842854"
    },
    {
        "id": 9,
        "name": "Gaming Headphones",
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/Gaming-Headphones_small.png?v=1684842853"
    },
    {
        "id": 10,
        "name": "Party Speakers",
        "image": "https://www.boat-lifestyle.com/cdn/shop/files/w_de57f25b-de5b-4d1a-bed0-765975b25da8_small.png?v=1684847228"
    }
]
const shopByProductsMaker = (e) => {
    e.map((ele) => {
        let div = document.createElement("div");
        div.classList.add("shopByProduct")
        let image = document.createElement("img");
        image.src = ele.image;
        image.classList.add("img-fluid")
        let name1 = document.createElement("p")
        name1.innerHTML = ele.name;
        name1.classList.add("productShopBy")
        div.append(image, name1)
        document.getElementById("shopByProducts").append(div)
    })
}
shopByProductsMaker(shopByProducts)
document.getElementById("footer").innerHTML = Footer()
