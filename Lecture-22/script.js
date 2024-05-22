
const handlevalidation = (e) => {
    e.preventDefault();
    let data = {
        username: document.querySelector("#name").value,
        password: document.querySelector("#password").value,
        phone: document.querySelector("#number").value,
    }
    console.log(data);
    let valid = false;
    if(data.username < 2 || data.username == null){
        document.querySelector("#name").style.border = "5px solid red";
        valid = true;
    }
    else{
        document.querySelector("#name").style.border = "5px solid green";
    }
    if(data.password.length < 8 || data.password == null){
        document.querySelector("#password").style.border = "5px solid red";
        valid = true;
    }
    else{
        document.querySelector("#password").style.border = "5px solid green";
    }
    if(data.phone.length != 10 || data.phone == null){
        document.querySelector("#number").style.border = "5px solid red";
        valid = true;
    }
    else{
        document.querySelector("#number").style.border = "5px solid green";
    }
    if(valid == true){
        document.querySelector("#error").innerHTML = `<i class="fa-solid fa-exclamation"></i> Please Fill The Valid Informations`
    }
    
    if(valid == false){
        document.querySelector("#error").innerHTML = `You're From Has Been Succcessfuly Submited Scroll Down To view Details`
        document.querySelector("#printName").innerHTML = data.username;
        document.querySelector("#PrintNumber").innerHTML = data.phone;
        document.querySelector("#PrintPassword").innerHTML = data.password;
    }
}
document.querySelector("#form").addEventListener("submit",handlevalidation);