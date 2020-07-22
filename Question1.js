// Solution to question 1

// Assumptions provided in the question:
//  N is an integer within the range 0 to 100,000
// Each element of the array A is an integer within the range −2,147,483,648 to 2,147,483,647.

const solution1 = (arr) => {
    // using javascript Array.sort method to sort the items of the array in an ascending order
    arr.sort((a, b) => (a - b))
    
    for (let i = 0; i < arr.length - 2; i++) {
        // loop through the sorted array and for each iteration, use the value of i to populate p,q and r
        let p = arr[i],
            q = arr[i + 1],
            r = arr[i + 2]

        // check if triplet is triangular
        if (p + q > r &&
            q + r > p &&
            r + p > q)
            return 1
    }
    
    return 0
}

const testCaseArray1 = [10, 2, 5, 1, 8, 20]
console.log(solution1(testCaseArray1), 'Test one')

const testCaseArray2 = [10, 50, 5, 1]
console.log(solution1(testCaseArray2), 'Test two')