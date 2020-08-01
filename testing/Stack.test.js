
import Stack from "../lib/data-structures/Stack.js";
import UnitTesting from "../lib/unit-testing/UnitTesting.js";

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

unitTesting.addAssertion('stack.count() === 3', {
    resultWas: stack.count(),
    resultExpected: 3,
    get evaluation() { return (
        this.resultWas === this.resultExpected
    )}
})

unitTesting.addAssertion('stack.pop() === 3', {
    resultWas: stack.pop(),
    resultExpected: 3,
    get evaluation() { return (
        this.resultWas === this.resultExpected
    )}
})

unitTesting.addAssertion('stack.count() === 2', {
    resultWas: stack.count(),
    resultExpected: 2,
    get evaluation() { return (
        this.resultWas === this.resultExpected
    )}
})

unitTesting.addAssertion('stack.pop() === 2', {
    resultWas: stack.pop(),
    resultExpected: 2,
    get evaluation() { return (
        this.resultWas === this.resultExpected
    )}
})

unitTesting.addAssertion('stack.count() === 1', {
    resultWas: stack.count(),
    resultExpected: 1,
    get evaluation() { return (
        this.resultWas === this.resultExpected
    )}
})

unitTesting.addAssertion('stack.pop() === 1', {
    resultWas: stack.pop(),
    resultExpected: 1,
    get evaluation() { return (
        this.resultWas === this.resultExpected
    )}
})

unitTesting.addAssertion('stack.pop() === undefined', {
    resultWas: stack.pop(),
    resultExpected: undefined,
    get evaluation() { return (
        this.resultWas === this.resultExpected
    )}
})

unitTesting.getResults()

/** EOF Stack.test.js */
