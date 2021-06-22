const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) ||[];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;


saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: finalScore.innerText,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort( (a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");
};


username.addEventListener("keyup", e => {
    saveScoreBtn.disabled = !username.value;    
})