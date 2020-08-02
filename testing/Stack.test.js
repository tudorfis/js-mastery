import Stack from "../lib/data-structures/Stack.js";
import UnitTesting from "../lib/unit-testing/UnitTesting.js";
import { buildAssertionDetails } from "../lib/unit-testing/unitTesting.utils.js"

let whatWasExecuted, resultWas, resultExpected
const buildAddAssertion = assertionName => unitTesting.addAssertion( assertionName,
    buildAssertionDetails({ whatWasExecuted, resultWas, resultExpected }))

///////////////////////////////////////////////////////////

let stack, stack2

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

    stack2 = new Stack()
    stack2.push('b')
    stack2.push('a')
})

resultWas = stack.count()
whatWasExecuted = `stack.count()`
resultExpected = 3
buildAddAssertion('stack.count() === 3')

resultWas = stack.pop()
whatWasExecuted = `stack.pop()`
resultExpected = 3
buildAddAssertion('stack.pop() === 3')

resultWas = stack.isEmpty()
whatWasExecuted = `stack.isEmpty()`
resultExpected = false
buildAddAssertion('stack not empty')

resultWas = stack.count()
whatWasExecuted = `stack.count()`
resultExpected = 2
buildAddAssertion('stack.count() === 2')

resultWas = stack.pop()
whatWasExecuted = `stack.pop()`
resultExpected = 2
buildAddAssertion('stack.pop() === 2')

resultWas = stack.count()
whatWasExecuted = `stack.count()`
resultExpected = 1
buildAddAssertion('stack.count() === 1')

resultWas = stack.pop()
whatWasExecuted = `stack.pop()`
resultExpected = 1
buildAddAssertion('stack.pop() === 1')

resultWas = stack.isEmpty()
whatWasExecuted = `stack.isEmpty()`
resultExpected = true
buildAddAssertion('stack is empty')

resultWas = stack.pop()
whatWasExecuted = `stack.pop()`
resultExpected = undefined
buildAddAssertion('stack.pop() === undefined')

resultWas = stack.pop()
whatWasExecuted = `stack.pop()`
resultExpected = undefined
buildAddAssertion('stack.pop() === undefined')

resultWas = stack.isEmpty()
whatWasExecuted = `stack.isEmpty()`
resultExpected = true
buildAddAssertion('stack is empty')

resultWas = stack2.pop()
whatWasExecuted = `stack2.pop()`
resultExpected = 'a'
buildAddAssertion('stack2.pop() equals to "a"')

resultWas = stack2.pop()
whatWasExecuted = `stack2.pop()`
resultExpected = 'b'
buildAddAssertion('stack2.pop() equals to "b"')

resultWas = stack2.pop()
whatWasExecuted = `stack2.pop()`
resultExpected = undefined
buildAddAssertion('stack2.pop() equals to undefined')

resultWas = stack.items
whatWasExecuted = `stack.items`
resultExpected = undefined
buildAddAssertion(`stack items shouldn't accesible from outside`)

resultWas = stack2.items
whatWasExecuted = `stack2.items`
resultExpected = undefined
buildAddAssertion(`same for stack2, we want immutability`)


////////////////////////////////
unitTesting.printResults()
