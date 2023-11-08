// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


describe('function1', () => {
    it ('removes the first item from the array and shuffles the remaining items.', () => {
        expect(colors1).toEqual(expect.arrayContaining(function1(colors1)));
        expect(colors2).toEqual(expect.arrayContaining(function1(colors2)));
        expect(function1(colors1)).not.toEqual(expect.arrayContaining(["purple"]))
        expect(function1(colors2)).not.toEqual(expect.arrayContaining(["chartreuse"]))
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// input: an array 
// output: the array with the first item removed and shuffled. 
// create a function that takes in an array
// use .slice method to return  all the items after the first element [1] from the OG array in the form of an array 
//  then use .sort() function to sort the new returned array and set the comparison function  by using 0.5 - Math.random, and this give a range from -0.5 to 0.5. The sort function will sort the array in an ascending order, but the random values from -0.5 to 0.5 randomize the order.  

const function1 = (array) => {
    return array.slice(1).sort(function(){return 0.5 - Math.random()})
}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe('voteCount', () =>{
    it('takes in an object that contains up votes and down votes and returns the end tally', () => {
        expect(voteCount(votes1)).toEqual(11);
        expect(voteCount(votes2)).toEqual(-31);
    })
})

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// // b) Create the function that makes the test pass.

// // Pseudo code:
// // input: an object with upvote/downvote as keys and number of votes as values
// // output: an integer - the number of upvotes mines the number of downvotes
// // create a function called voteCount that takes in an obeject. 
// // use obejct.value to print out all the values in an array. the result will look like this [# of upvotes, # of downvotes]
// // assign this^^ to a newArray
// // then add the two elemnets by using bracket notation; newArray[0] - newArray[1] 

const voteCount = (object) => {
    const newArray = Object.values(object)
    return newArray[0] - newArray[1]
}


