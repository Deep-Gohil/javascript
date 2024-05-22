
let company = [];
let salary_sum=0

const UIMaker = () => {
    document.getElementById("tbody").innerHTML = ""; 
    company.map((ele, index) => {

        tr = document.createElement("tr");
        employee = document.createElement("td");
        employee.innerHTML = ele.name;
        job = document.createElement("td");
        job.innerHTML = ele.job;
        department = document.createElement("td");
        department.innerHTML = ele.company;
        salary = document.createElement("td");
        salary.innerHTML = ele.salary;
        email = document.createElement("td");
        email.innerHTML = ele.email;
        experience = document.createElement("td");
        experience.innerHTML = ele.experience;
        role = document.createElement("td");
        deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        
        deleteButton.addEventListener("click", () => handleDelete(index,ele.salary));

        td4 = document.createElement("td");
        td4.append(deleteButton);
        if (ele.experience > 5) {
            role.innerHTML = "Senior";
        }
        else {
            role.innerHTML = "junior";
        }
        tr.append(employee, job, department, salary, email, experience, role, td4,)
        document.getElementById("tbody").append(tr);
    });
    document.getElementById("result").innerHTML = `Total Employee : ${company.length}`;
    document.getElementById("total-salary").innerHTML = `Total salary : ${salary_sum}`;
    console.log(salary_sum);
}
const handlCompanyData = (e) => {
    e.preventDefault()
    let data = {
        name: document.getElementById("name").value,
        job: document.getElementById("job role").value,
        company: document.getElementById("department").value,
        salary: Number(document.getElementById("salary").value),
        experience: document.getElementById("experience").value,
        email: document.getElementById("contact").value,
    }
    salary_sum+=data.salary;

    console.log(data);
    company.push(data);
    UIMaker();
}
const handleDelete = (index,salary) => {
    company.splice(index, 1);
    salary_sum-=salary;
    UIMaker();
}
const deleteAll = () => {
    document.getElementById("tbody").innerHTML = "";
    company = [];
    salary_sum = 0;
    UIMaker();
}
document.getElementById("fire").addEventListener("click", deleteAll)
document.getElementById("hire").addEventListener("click", handlCompanyData)
