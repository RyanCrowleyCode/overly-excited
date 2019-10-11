// Challenge: Arrow Function

// convert the addExcitement function to an arrow function

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


// Previous Version:
// function addExcitement(theWordArray, punctuation, numPunctuation) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {

//         if ((i + 1) % 3 === 0) {
//             buildMeUp += theWordArray[i] + `${punctuation.repeat(numPunctuation)} `
//         } else {
//             buildMeUp += theWordArray[i] + " "
//         }

//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }

// }

// Arrow Version:
let addExcitement = (theWordArray, punctuation, numPunctuation) => {
    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        if ((i + 1) % 3 === 0) {
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