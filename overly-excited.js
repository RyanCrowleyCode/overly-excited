// Challenge: Multiple Punctuation
// Challenges are optional exercises that you can work once you've completed all the practice exercises and understand the concepts in them.

// Add a new argument to the function so that a developer can specify how many times the special character should be added.

// Example output:

// The

// The walrus

// The walrus danced****

// The walrus danced**** through

// The walrus danced**** through the

// The walrus danced**** through the trees****

// The walrus danced**** through the trees**** in

// etc..

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];



function addExcitement(theWordArray, punctuation, numPunctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        if ((i+1) % 3 === 0) {
            buildMeUp += theWordArray[i] + `${punctuation.repeat(numPunctuation)} `
        } else {
            buildMeUp += theWordArray[i] + " "
        }

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "*", 4)