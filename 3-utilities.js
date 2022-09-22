function getRandomElement(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

function shuffleArray(array) {
    // randomly shuffles elements in an array in-place
    return array.sort((a,b) => Math.random() - 0.5);
}

function getMultipleChoices(n, correctAnswer, array) {
    // Generate a list of n choices including the correct answer and others from the array
    const choices = [correctAnswer];
    while (choices.length < n) {
        let candidate = getRandomElement(array);
        if (choices.indexOf(candidate) < 0) { // check if this is already in the array
            choices.push(candidate); // if not, add it
        }
    }
    return shuffleArray(choices);
}

export {
    getRandomElement,
    shuffleArray,
    getMultipleChoices
};