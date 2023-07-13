const scoreNum = document.getElementById('finalScore');
const scoreText = document.getElementById('scoreText');
const finalScore = localStorage.getItem('finalScore');

scoreNum.innerText = finalScore;

if (finalScore < 50) {
    scoreText.innerText = "현재 건강한 상태입니다.";
} else if (finalScore >= 50 && finalScore < 80) {
    scoreText.innerText = "일반적인 상태입니다.";
} else {
    scoreText.innerText = "건강이 조금 우려됩니다.";
}
