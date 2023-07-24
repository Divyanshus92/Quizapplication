// Questions that will be asked
var Questions = [{
	q: "What is capital of India?",
	a: [{ text: "Gandhinagar", isCorrect: false },
	{ text: "Surat", isCorrect: false },
	{ text: "Delhi", isCorrect: true },
	{ text: "Mumbai", isCorrect: false }
	]

},
{
	q: "What is the capital of USA?",
	a: [{ text: "New York", isCorrect: false, isSelected: false },
	{ text: "San Francisco", isCorrect: false },
	{ text: "Washington D.C", isCorrect: true },
	{ text: "Texas", isCorrect: false }
	]

},
{
	q: "What is the capital of Australia?",
	a: [{ text: "Sydney", isCorrect: false, isSelected: false },
	{ text: "Canberra", isCorrect: true },
	{ text: "New South Wales", isCorrect: false },
	{ text: "Western Australia", isCorrect: false }
	]

},
{
	q: "What is the capital of Thailand?",
	a: [{ text: "Lampang", isCorrect: false, isSelected: false },
	{ text: "Phuket", isCorrect: false },
	{ text: "Ayutthaya", isCorrect: false },
	{ text: "Bangkok", isCorrect: true }
	]

},
{
	q: "What is the capital of Spain?",
	a: [{ text: "Barcelona", isCorrect: false },
	{ text: "Madrid", isCorrect: true },
	{ text: "Sevilla", isCorrect: false },
	{ text: "Celta", isCorrect: false }
	]

},
{
	q: "What country has won the most football World Cups?",
	a: [{ text: "Spain", isCorrect: false },
	{ text: "Brazil", isCorrect: true },
	{ text: "Italy", isCorrect: false },
	{ text: "Argentina", isCorrect: false }
	]

},
{
	q: "What Netflix show had the most streaming views in 2021?",
	a: [{ text: "Squid Game", isCorrect: true },
	{ text: "Jupiter's Legacy", isCorrect: false },
	{ text: "Shadow and Bone", isCorrect: false },
	{ text: "The Irregulars", isCorrect: false }
	]

},
{
	q: "What country has won the most Cricket World Cups?",
	a: [{ text: "India", isCorrect: false },
	{ text: "Australia", isCorrect: true },
	{ text: "West Indies", isCorrect: false },
	{ text: "England", isCorrect: false }
	]

},
{
	q: "Who is most followed person on Instagram?",
	a: [{ text: "Virat Kohli", isCorrect: false },
	{ text: "The Rock", isCorrect: false },
	{ text: "Cristiano Ronaldo", isCorrect: true },
	{ text: "Selena Gomez", isCorrect: false }
	]

},
{
	q: "Who is the Founder of Meta?",
	a: [{ text: "Warren Buffet", isCorrect: false },
	{ text: "Bill gates", isCorrect: false },
	{ text: "Elon Musk", isCorrect: false },
	{ text: "Mark Zuckerberg", isCorrect: true }
	]

},

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
