var timer = document.getElementById("time")
var start = document.getElementById("beginning")
var questiontext = document.getElementById("question")
var timeinterval
var Liban = 60
var x = 0
var olEL = document.getElementById("choices")
var Luffy = document.getElementById("1")
var Madara = document.getElementById("2")
var Zoro = document.getElementById("3")
var score = document.getElementById("score")
var points = 0
var finalScoreEl = document.getElementById("Finalscore")
var InitialsEl = document.getElementById("Initial")
var endscreenEl = document.getElementById("endscreen")
var submitEl = document.getElementById("submit")
var formEl = document.getElementById("form")

var question = [
    { question: "what is soccer?", choices: ["A sport", "A House", "Type food"], answer: "A sport" },
    { question: "which one is the best anime?", choices: ["Naruto", "code geas", "roof piece"], answer: "code geas" },
    { question: "who's better?", choices: ["Messi", "Ronaldo", "Neymar"], answer: "Ronaldo" }
]
function Kenny() {
    questiontext.textContent = question[x].question
    for (let i = 0; i < question[x].choices.length; i++) {
        question[x].choices
        //    var li=document.createElement("li")
        //    li.textContent= question[x].choices[i]
        // li.addEventListener('click', userchoice)
        //    olEL.append(li)
        if (i === 0) {
            Luffy.innerText = question[x].choices[i]
            Luffy.addEventListener("click", userchoice)
        } else if (i === 1) {
            Madara.innerText = question[x].choices[i]
            Madara.addEventListener("click", userchoice)
        } else {
            Zoro.innerText = question[x].choices[i]
            Zoro.addEventListener("click", userchoice)
        }
    }
}
start.addEventListener("click", function () {
    timeinterval = setInterval(() => {
        if (Liban > 0) {
            Liban--;
            timer.textContent = Liban
        }
    }, 1000);
    start.setAttribute("style", "display:none")
    Kenny()
})
function userchoice() {
    if (question[x].answer === this.innerHTML) {
        points++;
        score.textContent = points;
    } else {
        Liban -= 5
    }
    if (x < question.length - 1) {
        x++
        Kenny()
    } else {
        endgame()
    }
}
function endgame() {
    //var name= InitialsEl.value
    console.log("game",endscreenEl,name)
    clearInterval(timeinterval)
    timer.setAttribute("style","display:none")
    questiontext.setAttribute("style","display:none")
    olEL.setAttribute("style","display:none")
    score.setAttribute("style","display:block")
    endscreenEl.setAttribute("style","display: block");
    formEl.setAttribute("style","display:block")
    //TODO: input field for user intials
 Input("text")
    //TODO: display total score
// Submit.setAttribute("style")
    //TODO: save initials and score to local storage

}
