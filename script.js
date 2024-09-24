const questions = [
    {
        question: "What does DOM stand for?",
        answer: [
            { text: "a) Document Object Module", correct: false },
            { text: "b) Document Object Model", correct: true },
            { text: "c) Data Object Mode", correct: false },
            { text: "d) Dynamic Object Manager", correct: false }
        ]
    },
    {
        question: "How do you select an element with the id example using JavaScript?",
        answer: [
            { text: "a) document.querySelector('#example')", correct: false },
            { text: "b) document.getElementById('example')", correct: true },
            { text: "c) document.selectElementById('example')", correct: false },
            { text: "d) document.getElementById('#example')", correct: false }
        ]
    },
    {
        question: "What method would you use to change the text content of an HTML element?",
        answer: [
            { text: "a) element.innerHTML", correct: true },
            { text: "b) element.innerText", correct: false },
            { text: "c) element.textContent", correct: false },
            { text: "d) All of the above", correct:false }
        ]
    },
    {
        question: "How can you add a new HTML element to the end of a parent element?",
        answer: [
            { text: "a) parentElement.add(newElement)", correct: false },
            { text: "b) parentElement.appendChild(newElement)", correct: true },
            { text: "c) parentElement.addChild(newElement)", correct: false },
            { text: "d) parentElement.insertChild(newElement)", correct: false }
        ]
    },
    {
        question: "Which JavaScript method is used to listen for events on an element?",
        answer: [
            { text: "a) listenEvent()", correct: false },
            { text: "b) addEventListener()", correct: true },
            { text: "c) attachEvent()", correct: false },
            { text: "d) onEvent()", correct: false }
        ]
    },
    {
        question: "How do you create a new HTML element using JavaScript?",
        answer: [
            { text: "a) document.newElement('tagName')", correct: false },
            { text: "b) document.appendElement('tagName')", correct: false },
            { text: "c) document.createElement('tagName')", correct: true },
            { text: "d) document.buildElement('tagName')", correct: false }
        ]
    },
    {
        question: "How do you set an attribute of an HTML element in JavaScript?",
        answer: [
            { text: "a) element.setAttribute('attributeName', 'value')", correct: true },
            { text: "b) element.addAttribute('attributeName', 'value')", correct: false },
            { text: "c) element.updateAttribute('attributeName', 'value')", correct: false },
            { text: "d) element.editAttribute('attributeName', 'value')", correct: false }
        ]
    },
    {
        question: "What is the default value of the innerHTML property if no HTML is assigned to it?",
        answer: [
            { text: "a) undefined", correct: false },
            { text: "b) null", correct: false },
            { text: "c) An empty string ''", correct: true },
            { text: "d) false", correct: false }
        ]
    },
    {
        question: "How do you remove an HTML element from the DOM using JavaScript?",
        answer: [
            { text: "a) element.removeChild()", correct: false },
            { text: "b) element.detach()", correct: false },
            { text: "c) element.remove()", correct: true },
            { text: "d) element.delete()", correct: false }
        ]
    },
    {
        question: "How can you change the background color of an HTML element using JavaScript?",
        answer: [
            { text: "a) element.style.backgroundColor = 'color'", correct: true },
            { text: "b) element.setBackgroundColor('color')", correct: false },
            { text: "c) element.backgroundColor = 'color'", correct: false },
            { text: "d) element.colorBackground('color')", correct: false }
        ]
    }
];


const myQuestion = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next");


let questionIndex = 0;
let score = 0;


function startQuizz() {
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};


function showQuestion() {
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    myQuestion.innerHTML = `${questionNumber}) ${currentQuestion.question}`;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", (e) => {
            const buttonTarget = e.target;
            const buttonCheck = buttonTarget.dataset.correct === "true";
            if (buttonCheck) {
                button.style.backgroundColor = "#9aeabc";
                score++;
            } else {
                button.style.backgroundColor = "#ff9393";
            }

            Array.from(answerButton.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.style.backgroundColor = "#9aeabc";
                }
                button.disabled = true;
                button.style.cursor = "no-drop";
            });
            nextButton.style.display = "block";
        });
    });
};


function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}


function showScore() {
resetState();
myQuestion.innerHTML=`Your scored ${score} out of ${questions.length}.`;
nextButton.innerHTML="Play again";
nextButton.style.display="block";
}


function handleNextButton() {
questionIndex++;
if(questionIndex < questions.length){
    showQuestion();
}else{
showScore();
}
}

nextButton.addEventListener("click", () => {
    if (questionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuizz();
    }
})


startQuizz();