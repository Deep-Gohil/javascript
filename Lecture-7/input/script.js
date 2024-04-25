const Get = () =>
{
    let a = document.getElementById("inp").value  
    let b = document.getElementById("inp2").value
    let total = Number(a)+Number(b)

    document.getElementById("print").innerHTML = `Result : ${total}`
}