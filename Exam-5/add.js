let news = JSON.parse(localStorage.getItem("news")) || []

const addProducts = (e) => {
    e.preventDefault()
    let data = {
        name: document.querySelector("#ntitle").value,
        image: document.querySelector("#nimage").value,
        discription: document.querySelector("#ndiscription").value,
        country: document.querySelector(".val").value,
    }
    // news.push(data)
    // console.log(typeof(news));
    localStorage.setItem("news", JSON.stringify(data))
    window.location.href = "index.html"
}

document.querySelector("#form").addEventListener("submit", addProducts)