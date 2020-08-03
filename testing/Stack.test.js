import Stack from "../lib/data-structures/Stack.js";
import UnitTesting from "../lib/unit-testing/UnitTesting.js";

const stack = new Stack()
stack.push()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push()

const stack2 = new Stack()
stack2.push('b')
stack2.push('a')

const unitTesting = new UnitTesting({
    testName: 'Stack.js',
    testDescription: 'testing the implementation of a stack in javascript' 
})

unitTesting.addAssertion([
    'stack.count() === 3',
    `stack.count()`,
    stack.count(),
    3
])

unitTesting.addAssertion([
    'stack.pop() === 3',
    `stack.pop()`,
    stack.pop(),
    3
])

unitTesting.addAssertion([
    'stack not empty',
    `stack.isEmpty()`,
    stack.isEmpty(),
    false
])

unitTesting.addAssertion([
    'stack.count() === 2',
    `stack.count()`,
    stack.count(),
    2
])

unitTesting.addAssertion([
    'stack.pop() === 2',
    `stack.pop()`,
    stack.pop(),
    2
])

unitTesting.addAssertion([
    'stack.count() === 1',
    `stack.count()`,
    stack.count(),
    1
])

unitTesting.addAssertion([
    'stack.pop() === 1',
    `stack.pop()`,
    stack.pop(),
    1
])

unitTesting.addAssertion([
    'stack is empty',
    `stack.isEmpty()`,
    stack.isEmpty(),
    true
])

unitTesting.addAssertion([
    'stack.pop() === undefined',
    `stack.pop()`,
    stack.pop(),
    undefined
])

unitTesting.addAssertion([
    'stack.pop() === undefined',
    `stack.pop()`,
    stack.pop(),
    undefined
])

unitTesting.addAssertion([
    'stack is empty',
    `stack.isEmpty()`,
    stack.isEmpty(),
    true
])

unitTesting.addAssertion([
    'stack2.pop() equals to "a"',
    `stack2.pop()`,
    stack2.pop(),
    'a'
])

unitTesting.addAssertion([
    'stack2.pop() equals to "b"',
    `stack2.pop()`,
    stack2.pop(),
    'b'
])

unitTesting.addAssertion([
    'stack2.pop() equals to undefined',
    `stack2.pop()`,
    stack2.pop(),
    undefined
])

unitTesting.addAssertion([
    `stack items shouldn't accesible from outside`,
    `stack.items`,
    stack.items,
    undefined
])

unitTesting.addAssertion([
    `same for stack2, we want immutability`,
    `stack2.items`,
    stack2.items,
    undefined
])

////////////////////////////////
unitTesting.printResults()
