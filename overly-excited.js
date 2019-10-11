// Practice: Function Arguments
// The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// Example output:

// The

// The walrus

// The walrus danced?

// The walrus danced? through

// The walrus danced? through the

// The walrus danced? through the trees?

// The walrus danced? through the trees? in

// etc..

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];



function addExcitement(theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        if ((i+1) % 3 === 0) {
            buildMeUp += theWordArray[i] + `${punctuation} `
        } else {
            buildMeUp += theWordArray[i] + " "
        }

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "?")