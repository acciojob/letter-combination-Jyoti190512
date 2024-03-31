function letterCombinations(input_digit) {
  //Complete the function
    // Define the mapping of digits to letters
    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    // Initialize an array to store the combinations
    let combinations = [];

    // Helper function to generate combinations recursively
    function generateCombination(index, currentCombination) {
        // If we have processed all the digits, add the current combination to the result
        if (index === input_digit.length) {
            combinations.push(currentCombination);
            return;
        }

        // Get the letters corresponding to the current digit
        const letters = digitToLetters[input_digit[index]];

        // Iterate through each letter and recursively generate combinations
        for (let i = 0; i < letters.length; i++) {
            generateCombination(index + 1, currentCombination + letters[i]);
        }
    }

    // Start the recursion
    if (input_digit.length > 0) {
        generateCombination(0, '');
    }

    // Sort the combinations lexicographically
    combinations.sort();

    return combinations;
}
}

module.exports = letterCombinations;
