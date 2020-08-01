/*
    TESTS TO MATCH
    =================================
    console.log('count', stack.count())
    console.log('pop', stack.pop())
    console.log('count', stack.count())
    console.log('pop', stack.pop())
    console.log('count', stack.count())

    console.log('pop', stack.pop())
    console.log('pop', stack.pop())
    console.log('pop', stack.pop())
*/

import Stack from "../lib/data-structures/Stack.js";
import UnitTesting from "../lib/unit-testing/UnitTesting.js";

const buildAssertionDetails = _ => ({ resultWas, resultExpected, ...evaluationObj })
const buildAddAssertion = assertionName => unitTesting.addAssertion( assertionName, buildAssertionDetails())

let resultWas, resultExpected
const evaluationObj = {
    get evaluation() { 
        return this.resultWas === this.resultExpected
    }
}

///////////////////////////////////////////////////////////

let stack

const unitTesting = new UnitTesting({
    testName: 'Stack.js',
    testDescription: 'testing the implementation of a stack in javascript' 
})

unitTesting.before(function() {
    stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    
})
    
resultWas = stack.count()
resultExpected = 3
buildAddAssertion('stack.count() === 3')

resultWas = stack.pop()
resultExpected = 3
buildAddAssertion('stack.pop() === 3')

resultWas = stack.count()
resultExpected = 2
buildAddAssertion('stack.count() === 2')

resultWas = stack.pop()
resultExpected = 2
buildAddAssertion('stack.pop() === 2')

resultWas = stack.count()
resultExpected = 1
buildAddAssertion('stack.count() === 1')

resultWas = stack.pop()
resultExpected = 1
buildAddAssertion('stack.pop() === 1')

resultWas = stack.pop()
resultExpected = undefined
buildAddAssertion('stack.pop() === undefined')

resultWas = stack.pop()
resultExpected = undefined
buildAddAssertion('stack.pop() === undefined')

unitTesting.getResults()

/** EOF Stack.test.js */
