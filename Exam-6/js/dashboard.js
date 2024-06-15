import create from "../components/create.js";
import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

let data = JSON.parse(localStorage.getItem("book-list")) || []

const UIMaker = () => {
        document.getElementById("tbody").innerHTML = ""

    data.map((ele) => {
        let tr = create("tr")
        let bookName = create("td")
        let authorName = create("td")
        let description = create("td")
        let addedDate = create("td")
        let category = create("td")
        let buy = create("td")
        let Buy = create("button")
        buy.append(Buy)
        Buy.innerHTML = "Buy"
        let bookmark = create("button")
        let mark = create("td")
        mark.append(bookmark)
        bookmark.innerHTML = "Add"
        bookName.innerHTML = ele.bookName
        authorName.innerHTML = ele.authorName
        description.innerHTML = ele.description
        addedDate.innerHTML = ele.date
        category.innerHTML = ele.category
        Buy.innerHTML = "Buy"
        bookmark.innerHTML = "Add"
        tr.append(bookName, authorName, description, addedDate, category, buy, bookmark)
        document.getElementById("tbody").append(tr)
    })
}



UIMaker()