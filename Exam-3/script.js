let questionsBank = [
    {
        question: "What is the capital of India?",
        option1: "Delhi",
        option2: "Mumbai",
        option3: "Kolkata",
        option4: "Chennai",
        answer: "Delhi"
    },
    {
        question: "What Is The Founder Of C++ Language?",
        option1: "Bjarne Stroustrup",
        option2: "Ken Thompson",
        option3: "Bjarne Stroustrup & Ken Thompson",
        option4: "None Of The Above",
        answer: "Bjarne Stroustrup & Ken Thompson"
    },
    {
        "question": "How do you write 'Hello World' in an alert box?",
        "option1": "msg('Hello World');",
        "option2": "alertBox('Hello World');",
        "option3": "alert('Hello World');",
        "option4": "msgBox('Hello World');",
        "answer": "alert('Hello World');"
    },
    {
        "question": "Which of the following is not a reserved word in JavaScript?",
        "option1": "interface",
        "option2": "throws",
        "option3": "program",
        "option4": "short",
        "answer": "program"
    },
    {
        "question": "What is the correct way to write a JavaScript array?",
        "option1": "var colors = (1:'red', 2:'green', 3:'blue')",
        "option2": "var colors = 'red', 'green', 'blue'",
        "option3": "var colors = ['red', 'green', 'blue']",
        "option4": "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        "answer": "var colors = ['red', 'green', 'blue']"
    },
    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "option1": "onchange",
        "option2": "onclick",
        "option3": "onmouseclick",
        "option4": "onmouseover",
        "answer": "onclick"
    },
    {
        "question": "How do you declare a JavaScript variable?",
        "option1": "variable carName;",
        "option2": "var carName;",
        "option3": "v carName;",
        "option4": "string carName;",
        "answer": "var carName;"
    },
    {
        "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
        "code": "<p id='demo'>This is a demonstration.</p>",
        "option1": "document.getElementById('demo').innerHTML = 'Hello World!';",
        "option2": "document.getElementByName('demo').innerHTML = 'Hello World!';",
        "option3": "document.getElementByTagName('p').innerHTML = 'Hello World!';",
        "option4": "document.getElement('p').innerHTML = 'Hello World!';",
        "answer": "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    {
        "question": "How do you create a function in JavaScript?",
        "option1": "function myFunction()",
        "option2": "function:myFunction()",
        "option3": "function = myFunction()",
        "option4": "function => myFunction()",
        "answer": "function myFunction()"
    },
    {
        "question": "How do you call a function named 'myFunction'?",
        "option1": "call myFunction()",
        "option2": "call function myFunction()",
        "option3": "myFunction()",
        "option4": "Call.myFunction()",
        "answer": "myFunction()"
    },
    {
        "question": "How can you add a comment in JavaScript?",
        "option1": "'This is a comment",
        "option2": "<!--This is a comment-->",
        "option3": "//This is a comment",
        "option4": "*This is a comment*",
        "answer": "//This is a comment"
    },
    {
        "question": "What will the following code return: Boolean(10 > 9)?",
        "option1": "false",
        "option2": "true",
        "option3": "NaN",
        "option4": "undefined",
        "answer": "true"
    },
    {
        "question": "Which operator is used to assign a value to a variable?",
        "option1": "*",
        "option2": "x",
        "option3": "=",
        "option4": "-",
        "answer": "="
    },
    {
        "question": "What is the correct JavaScript syntax to write 'Hello World'?",
        "option1": "('Hello World')",
        "option2": "document.write('Hello World')",
        "option3": "response.write('Hello World')",
        "option4": "('Hello World').document.write",
        "answer": "document.write('Hello World')"
    },
    {
        "question": "Which method can be used to find the length of a string?",
        "option1": "length()",
        "option2": "getLength()",
        "option3": "strlen()",
        "option4": "length",
        "answer": "length"
    },
    {
        "question": "Which built-in method sorts the elements of an array?",
        "option1": "changeOrder(order)",
        "option2": "order()",
        "option3": "sort()",
        "option4": "arrange()",
        "answer": "sort()"
    },
    {
        "question": "Which of the following is a way to create an object in JavaScript?",
        "option1": "var obj = {};",
        "option2": "var obj = ();",
        "option3": "var obj = [];",
        "option4": "var obj = <>;",
        "answer": "var obj = {};"
    },
    {
        "question": "How do you round the number 7.25 to the nearest integer?",
        "option1": "Math.rnd(7.25)",
        "option2": "Math.round(7.25)",
        "option3": "rnd(7.25)",
        "option4": "round(7.25)",
        "answer": "Math.round(7.25)"
    },
    {
        "question": "How can you detect the client’s browser name?",
        "option1": "navigator.appName",
        "option2": "browser.name",
        "option3": "client.navName",
        "option4": "window.browser",
        "answer": "navigator.appName"
    },
    {
        "question": "Which JavaScript method is used to access an HTML element by id?",
        "option1": "getElementById()",
        "option2": "getElement(id)",
        "option3": "getElementByID()",
        "option4": "getIdElement()",
        "answer": "getElementById()"
    },
];

questionsBank.map((ele, index) => {
    let h1 = document.createElement("h1");
    h1.innerHTML = `${ele.question}`
    let btn1 = document.createElement("button");
    btn1.innerHTML = `A. ${ele.option1}`
    let btn2 = document.createElement("button");
    btn2.innerHTML = `B. ${ele.option2}`
    let btn3 = document.createElement("button");
    btn3.innerHTML = `C. ${ele.option3}`
    let btn4 = document.createElement("button");
    btn4.innerHTML = `D. ${ele.option4}`
    btn1.setAttribute("class", "btn")
    btn2.setAttribute("class", "btn")
    btn3.setAttribute("class", "btn")
    btn4.setAttribute("class", "btn")
    btn1.addEventListener("click", () => chekeAnswer(index, ele.option1,btn1))
    btn2.addEventListener("click", () => chekeAnswer(index, ele.option2,btn2))
    btn3.addEventListener("click", () => chekeAnswer(index, ele.option3,btn3))
    btn4.addEventListener("click", () => chekeAnswer(index, ele.option4,btn4))
    let hr = document.createElement("hr")
    document.querySelector(".div").append(h1, btn1, btn2, btn3, btn4, hr);
})

const chekeAnswer = (index, selectedOption,btn) => {
    const correctAnswer = questionsBank[index].answer;
    if (selectedOption === correctAnswer) {
        // alert("correct answer.")
        btn.style.backgroundColor = "green"

    } else {
        // alert("Incorrect answer.")
        btn.style.backgroundColor = "red"
    }
}