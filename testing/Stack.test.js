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

let resultWas, resultExpected
const buildAddAssertion = assertionName => unitTesting.addAssertion( assertionName, buildAssertionDetails())
const buildAssertionDetails = _ => ({ 
    resultWas,
    resultExpected,
    get evaluation() { 
        return this.resultWas === this.resultExpected
    }
})

///////////////////////////////////////////////////////////

let stack

const unitTesting = new UnitTesting({
    testName: 'Stack.js',
    testDescription: 'testing the implementation of a stack in javascript' 
})

unitTesting.before(function() {
    stack = new Stack()
    stack.push()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push()
})
    
resultWas = stack.count()
resultExpected = 3
buildAddAssertion('stack.count() === 3')

resultWas = stack.pop()
resultExpected = 3
buildAddAssertion('stack.pop() === 3')

resultWas = stack.isEmpty()
resultExpected = false
buildAddAssertion('stack not empty')

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

resultWas = stack.isEmpty()
resultExpected = true
buildAddAssertion('stack is empty')

resultWas = stack.pop()
resultExpected = undefined
buildAddAssertion('stack.pop() === undefined')

resultWas = stack.pop()
resultExpected = undefined
buildAddAssertion('stack.pop() === undefined')

resultWas = stack.isEmpty()
resultExpected = true
buildAddAssertion('stack is empty')

unitTesting.getResults()

/** EOF Stack.test.js */
