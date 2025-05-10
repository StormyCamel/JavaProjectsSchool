const quizData = [
  {
    question: "Which dinosaur's name means 'Tyrant lizard king'?",
    answers: ["Tyrannosaurus Rex", "Allosaurus", "Carnotaurus", "Spinosaurus"],
    correct: "Tyrannosaurus Rex"
  },
  {
    question: "Which dinosaur's name means 'Three-horned face'?",
    answers: ["Styracosaurus", "Pachyrhinosaurus", "Triceratops", "Ceratosaurus"],
    correct: "Triceratops"
  },
  {
    question: "Which dinosaur's name means 'Plated lizard'?",
    answers: ["Ankylosaurus", "Stegosaurus", "Kentrosaurus", "Sauropelta"],
    correct: "Stegosaurus"
  },
  {
    question: "Which dinosaur's name means 'Arm lizard'?",
    answers: ["Diplodocus", "Brachiosaurus", "Apatosaurus", "Camarasaurus"],
    correct: "Brachiosaurus"
  },
  {
    question: "Which dinosaur's name means 'Fast thief'?",
    answers: ["Oviraptor", "Troodon", "Compsognathus", "Velociraptor"],
    correct: "Velociraptor"
  },
  {
    question: "Which dinosaur's name means 'Fused lizard'?",
    answers: ["Ankylosaurus", "Euoplocephalus", "Nodosaurus", "Edmontonia"],
    correct: "Ankylosaurus"
  },
  {
    question: "Which dinosaur's name means 'Iguana tooth'?",
    answers: ["Hypsilophodon", "Megalosaurus", "Iguanodon", "Ornithopod"],
    correct: "Iguanodon"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const resultEl = document.getElementById('result');

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  answersEl.innerHTML = '';

  current.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(answer);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz').style.display = 'none';
  resultEl.textContent = `🦖 You scored ${score} out of ${quizData.length}! Great job on dinosaur name meanings.`;
}

loadQuestion();
