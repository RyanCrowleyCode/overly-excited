// Practice: More Exciting

// The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one operation when a certain conditions is true, and a different operation if that condition is false.

// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

// Example output:

// The

// The walrus

// The walrus danced!

// The walrus danced! through

// The walrus danced! through the

// The walrus danced! through the trees!

// The walrus danced! through the trees! in

// The walrus danced! through the trees! in the

// The walrus danced! through the trees! in the light!

// The walrus danced! through the trees! in the light! of

// The walrus danced! through the trees! in the light! of the

// The walrus danced! through the trees! in the light! of the moon!

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];



function addExcitement(theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
         If the current word's place (not index) in the array
         is evenly divisible by 3, add an exclamation point
         to the end of the word and then concatenate it to
         `buildMeUp`.

         Otherwise, just concatenate the word itself.
      */


        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)