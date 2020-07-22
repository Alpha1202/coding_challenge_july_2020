// Solution to question 3

// Assumptions provided in the question:
//  N is an integer within the range 0 to 100,000
//  Each element of the array A is an integer within the range −2,147,483,648 to 2,147,483,647.

const solution3 = (newArr) => {
    // create an empty array to hold the index of any element of the array in the dominator occurs
    const arr = []

    // loop through the array and check for the dominator
    
    for (let i=0; i<newArr.length; i++){

      if (!arr[newArr[i]])
        arr[newArr[i]] = 1
      else
        arr[newArr[i]]++
      if (arr[newArr[i]] > newArr.length/2)
        return i
    }
    return -1
}


const testCase1 = [3, 4, 3, 2, 3, -1, 3, 3]
console.log(solution3(testCase1), 'test one')


