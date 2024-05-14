let student = [];

const handleStudentData = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        grid: document.getElementById("grid").value,
    }
    student.push(data);
    UIMaker();
}

document.getElementById("studentData").addEventListener("submit", handleStudentData);

const UIMaker = () => {
    document.getElementById("tbody").innerHTML = "";
    student.map((ele, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = ele.name;
        let td2 = document.createElement("td");
        td2.innerHTML = ele.course;
        let td3 = document.createElement("td");
        td3.innerHTML = ele.grid;
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => handleDelete(index));
        let td4 = document.createElement("td");
        td4.appendChild(deleteButton);
        tr.append(td1, td2, td3, td4);
        document.getElementById("tbody").append(tr);
    });
}

const deleteAll = () =>{
    document.getElementById("tbody").innerHTML = "";
    student = [];
}

const handleDelete = (index) => {
    student.splice(index, 1);
    UIMaker();
}
document.getElementById("deleteAll").addEventListener("click",deleteAll)