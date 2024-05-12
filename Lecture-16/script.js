let student = []
const handleStudentData = (e) => {
    e.preventDefault();
    let data = {
            name : document.getElementById("name").value,
            course : document.getElementById("course").value,
            grid : document.getElementById("grid").value,
        }
        // console.log(data.name, data.course, data.grid);
        student.push(data);
        UIMaker();

}
document.getElementById("studentData").addEventListener("submit", handleStudentData);
const UIMaker = () =>{
    document.getElementById("studentList").innerHTML = "";
    for(let i = 0; i <student.length; i++){
        let name = document.createElement("h1")
        name.innerHTML = student[i].name;
        document.getElementById("studentList").append(name);
        let course = document.createElement("h2")
        course.innerHTML = student[i].course;
        document.getElementById("studentList").append(course);
        let grid = document.createElement("h3")
        grid.innerHTML = student[i].grid;
        document.getElementById("studentList").append(grid);
    }
}