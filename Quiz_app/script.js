// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

const style = document.createElement('style');
style.textContent = `
    body {
        margin: 0;
        height : 100vh;
        padding: 50px; 
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #ffafbd, #ffc3a0, #fbc2eb, #a6c1ee);
    }

    .quiz-container {
        width: 60%;
        margin: 0 auto;
        background-color: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
        text-align: center;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        padding: 10px;
        margin-bottom: 5px;
        border: 1px solid #ddd;
        border-radius: 5px;
        transition: background-color 0.3s ease; 
    }

    li:not(.correct):not(.selected):hover {
        background-color: rgb(144, 238, 144);
        cursor: pointer;
    }

    button {
        padding: 10px 20px;
        margin: 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: rgb(245, 245, 245);
    }

    .correct {
        background-color: rgb(144, 238, 144); 
    }
        
    .incorrect {
        background-color: rgb(255, 99, 71); 
    }

    .selected {
        background-color: rgb(144, 238, 144); 
    }
`;

document.head.appendChild(style);

let currentSawalJagha = 0;
let score = 0;

const sawal = document.getElementById("question");
const jawabList = document.getElementById("answer-list");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");


function loadQuestion() {
    const currentSawal = questions[currentSawalJagha];
    sawal.textContent = currentSawal.text;
    
    jawabList.innerHTML = ""; 
    currentSawal.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="option" value="${index}" id="option${index}">
                        <label for="option${index}">${option}</label>`;
            jawabList.appendChild(li);
            li.addEventListener('click', () => {
                document.getElementById(`option${index}`).checked = true;
            });
    });
    nextButton.style.display = "none";
    submitButton.style.display = "inline"; 
}

function getSelectedOption() {
    const options = document.getElementsByName("option");
    for (const option of options) {
        if (option.checked) {
            return parseInt(option.value);
        }
    }
    return null;
}


submitButton.addEventListener("click", () => {
    const optionChuno = getSelectedOption();
    if (optionChuno === null) {
        alert("Please select an answer!");
        return;
    }

    const currentSawal = questions[currentSawalJagha];
    const sahiJawab = currentSawal.correct;
    const options = document.getElementsByName("option");
    
    options[sahiJawab].parentElement.classList.add("correct");

    if (optionChuno === sahiJawab) {

        score++;
        options[optionChuno].parentElement.classList.add("selected");
    }else{
        options[optionChuno].parentElement.classList.add("incorrect");
    }

    for (const option of options) {
        option.disabled = true;
    }

    submitButton.style.display = "none"; 
    nextButton.style.display = "inline"; 
});

nextButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Next button is clicked.
    currentSawalJagha++;
    if (currentSawalJagha < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        currentSawalJagha = 0;
        score = 0;
        loadQuestion();
    }
});

loadQuestion();