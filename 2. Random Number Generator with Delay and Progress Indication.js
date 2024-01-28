function generateRandomNumberWithDelay(min, max, delay, progressCallback, completionCallback) {
  const totalNumbers = max - min + 1;
  let numbersGenerated = 0;

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * totalNumbers) + min;
    numbersGenerated++;

    // Update progress
    const progress = (numbersGenerated / totalNumbers) * 100;
    progressCallback(progress);

    if (numbersGenerated < totalNumbers) {
      // Schedule the next random number generation with delay
      setTimeout(generateRandomNumber, delay);
    } else {
      // All numbers generated, call completion callback
      completionCallback();
    }
  }

  // Start generating the first random number
  generateRandomNumber();
}

// Example usage:
const minNumber = 1;
const maxNumber = 10;
const delay = 1000; // 1 second delay

function updateProgress(progress) {
  console.log(`Progress: ${progress.toFixed(2)}`);
}

function onComplete() {
  console.log("Random number generation completed!");
}

generateRandomNumberWithDelay(minNumber, maxNumber, delay, updateProgress, onComplete);
