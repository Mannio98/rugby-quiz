//this function adds up the amount of correct answers selected
function calculateScore() {
    const questions = document.querySelectorAll('.question');
    let score = 0;

    const correctAnswerIndices = [2, 0, 1, 2, 1, 0, 0, 3, 0, 1];

    questions.forEach((question, index) => {
        const selectedAnswer = question.querySelector('input[name="question' + index + '"]:checked');

        if (selectedAnswer) {
            const selectedValue = parseInt(selectedAnswer.value);
            if (selectedValue === correctAnswerIndices[index]) {
                score++;
            }
        }
    });

    showResult(score);
}

/*this function shows the results, I made the page instrantly scroll to the results once the submit button had been hit 
to ensure user would see answers immediately*/
function showResult(score) {
    const resultContainer = document.getElementById('results');
    resultContainer.innerHTML = 'Your score: ' + score + ' out of 10';
    resultContainer.scrollIntoView({ behavior: 'instant'});
}

document.getElementById('submitBtn').addEventListener('click', calculateScore);
