let questions = [
    {
        question: "В каком году началась веилкуая отечественная война?",
        options: ["1939", "1945", "1488", "1941"],
        correctAnswer: "1941"

    },
    {
        question: "с кем воевал ссср",
        options: ["германия", "автоботы", "пчёлки", "кибертрон"],
        correctAnswer: "германия"

    },
    {
        question: "как расшифровывается ссср",
        options: ["сталин старался союз распался", "сильные суслики сопереживают роме", "союз совецких социалестических республик", "союз совецких сурикатов рязани"],
        correctAnswer: "союз совецких социалестических республик"

    },
    {
        question: "в каком году законичилась война",
        options: [" 1999", " 2012", " 2077", "1945"],
        correctAnswer: "1945"

    },
    {
        question: " какой нацианольности был сталин ",
        options: ["грузин", "кореец", "китаец", " американец"],
        correctAnswer: "грузин"

    },
    {
        question: " кто властвовал после ленина",
        options: ["В.В.Путин", "И.В.Сталин ", "Муххамед Али", "Крдашьян"],
        correctAnswer: "И.В.Cталин"

    },
    {
        question: "с какого года длилась 2 мировая война",
        options: ["1488", "2034", "1945", "1939"],
        correctAnswer: "1939"

    },
    {
        question: " перечисли президентов правившиз после ленина",
        correctAnswer: "Сталин Иосиф Виссарионович, Маленков Георгий Максимилианович, Хрущёв Никита Сергеевич"

    }


]
let currentQuestion = 0
let correctAnswers = 0
let uncorrectAnswers = 0

let people = prompt("введите ваше имя")
function displayQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.textContent = `Вопрос ${currentQuestion + 1}:${questions[currentQuestion].question} `;
    let optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    let optionsArray = questions[currentQuestion].options;
    if ('options' in questions[currentQuestion]) {
        let optionsArray = questions[currentQuestion].options;

        optionsArray.forEach((option) => {
            let button = document.createElement("button")
            optionsElement.append(button);
            button.textContent = option;

        });
    } else {

        let input = document.createElement('input');
        let btn = document.createElement("button");
        btn.textContent = "Отправте ответ"
        answerInput.append(input, btn)
        btn.addEventListener("click", (e) => {
            nextQuestion(input.value)
        })
    }



    optionsElement.addEventListener('click', (e) => {

        let target = e.target

        nextQuestion(target.textContent);

    }, { once: true });
}

function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    } else {
        uncorrectAnswers
    }
    currentQuestion++
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}




function displayResult() {
    let questionElement = document.getElementById('question');
    let optionsElement = document.getElementById("options");
    let resultElement = document.getElementById('result');
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    resultElement.textContent = `${people} Правильных ответов ${correctAnswers} из ${questions.length} `

}


displayQuestion();