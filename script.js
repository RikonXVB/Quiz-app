const quizData = [
    {
        question: 'How old is Maxim',
        a: '16',
        b: '17',
        c: '26',
        d: '11',
        correct : 'a',
    }, {
        question: 'What is best programming language in 2021?',
        a: 'C++',
        b: 'Python',
        c: 'Javascript',
        d: 'Java',
        correct: 'b',

    },{
        question: 'Why Maxim hated all language except Js?',
        a: 'Beacause he stupid',
        b: 'Beacause he so stupid',
        c: 'Because he learn only js',
        d: 'Because js is the best language of the world',
        correct: 'b',
    },{
        question: 'What year was Javascript launched?',
        a: '2020',
        b: '2004',
        c: '1995',
        d: 'none of the above',
        correct:'c',
    },

];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function Selected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submit.addEventListener("click", () => {
    const answer = Selected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});