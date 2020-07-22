// Solution to question 2

// Assumptions provided in the question:
//  N is an integer within the range 0 to 200,000
// string S consists only of the following characters: "(", "{","[", "]", "}" and/or ")".


const solution2 = (str) => {
    // create an object of bracket pairs 
    const brackets = {"{": "}","(": ")","[": "]"}

    // create an array of closing brackets 
    const closedBrackets = ["}", ")", "]"]
    
    // create a stack array to add properly nested brackets
    const stack = [];
    
    // loop through each single word/item/string in the provided string
    for (let i =0; i < str.length; i++) {
        // checks if the bracket obj above contains any of the word/item/string in the provided string 
        // if true, add that particular item to the stack array 
        // and if the item is already in the stack array, remove the last one item added to the stack array
        // otherwise return 0
        if (brackets.hasOwnProperty(str[i])) {
            stack.push(str[i])
        } else if (brackets[stack[stack.length -1]] == str[i]) {
            stack.pop()
        } else if (closedBrackets.indexOf(str[i]) !== -1) {
        	return 0
        }
    }
    
    return stack.length === 0 ? 1 : 0
}

const testCase1 = "{[()()]}"
console.log(solution2(testCase1), 'test one')

const testCase2 = "([)()]"
console.log(solution2(testCase2), 'test two')