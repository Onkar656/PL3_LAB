// Function to calculate the sum of even numbers in an array
function calculateEvenSum(numbers) {
    return numbers.reduce(function (sum, num) {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}

// Function to handle the button click event
function calculateSum() {
    const inputElement = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");

    // Get the input value and split it into an array of numbers
    const inputText = inputElement.value;
    const numbers = inputText.split(",").map(function (str) {
        return parseInt(str, 10);
    });

    // Calculate the sum of even numbers
    const evenSum = calculateEvenSum(numbers);

    // Display the result
    resultElement.textContent = `Sum of even numbers: ${evenSum}`;
}
