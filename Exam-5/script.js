
let detail = JSON.parse(localStorage.getItem('signInData')) || {}
let news = JSON.parse(localStorage.getItem('news')) || []
const userDetailPrint = () => {
    // if (detail != null) {

    // }
    // else{
    let image = document.createElement('img')
    image.src = detail.image
    image.classList.add('user-image')
    document.querySelector(".user-image").append(image)
    document.querySelector("#name").innerHTML = detail.name
    document.querySelector("#country").innerHTML = detail.country
    document.querySelector("#about").innerHTML = detail.about
    // }

}
console.log(detail);
userDetailPrint()

const UIMaker = () => {
    // news.map((ele)=>{
        document.querySelector(".box").innerHTML = ""
        let div = document.createElement("div")
        let title = document.createElement("h1")
        let image = document.createElement("img")
        let discription = document.createElement("p")
        let country = document.createElement("p")
        title.innerHTML = news.name
        image.src = news.image
        discription.innerHTML = news.discription
        country.innerHTML = news.country
        div.append (image, title, discription, country)
        document.querySelector(".box").append(div)
        div.classList.add("container")
    // })
}
UIMaker()