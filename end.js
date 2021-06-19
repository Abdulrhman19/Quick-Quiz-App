const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;


saveHighScore = e => {
    console.log("clicked save button");
    e.preventDefault();
}


username.addEventListener("keyup", e => {
    saveScoreBtn.disabled = !username.value;    
})