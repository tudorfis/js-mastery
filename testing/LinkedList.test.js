import LinkedList from "../lib/data-structures/LinkedList.js"
import UnitTesting from "../lib/unit-testing/UnitTesting.js"

const linkedList = new LinkedList()

const unitTesting = new UnitTesting({
    testName: 'LinkedList.js',
    testDescription: 'testing the implementation of a linkedList in javascript' 
})

unitTesting.addAssertion([
    'linkedList.head should be null',
    `linkedList.head`,
    linkedList.head,
    null
])

unitTesting.addAssertion([
    'linkedList.tail should be null',
    `linkedList.tail`,
    linkedList.tail,
    null
])

linkedList.append( 'Tudor' )
unitTesting.addAssertion([
    `linkedList.head should be 'Tudor'`,
    `linkedList.head.value`,
    linkedList.head.value,
    'Tudor'
])

unitTesting.addAssertion([
    `linkedList.head should be 'Tudor'`,
    `linkedList.head.value`,
    linkedList.head.value,
    'Tudor'
])

unitTesting.addAssertion([
    `linkedList.head.next should be null`,
    `linkedList.head.next`,
    linkedList.head.next,
    null
])

unitTesting.addAssertion([
    `linkedList.tail.next should be null`,
    `linkedList.tail.next`,
    linkedList.tail.next,
    null
])

linkedList.append( 'Cristina' )
unitTesting.addAssertion([
    `last item should be 'Cristina'`,
    `linkedList.head.next.value`,
    linkedList.head.next.value,
    'Cristina'
])

unitTesting.addAssertion([
    `linkedList.tail.value should be 'Cristina'`,
    `linkedList.tail.value`,
    linkedList.tail.value,
    'Cristina'
])

linkedList.prepend( 'Costi' )
unitTesting.addAssertion([
    `head value should be 'Costi'`,
    `linkedList.head.value`,
    linkedList.head.value,
    'Costi'
])

unitTesting.addAssertion([
    `head.next.value should be 'Tudor'`,
    `linkedList.head.next.value`,
    linkedList.head.next.value,
    'Tudor'
])


linkedList.prepend()
unitTesting.addAssertion([
    `head value should be 'Costi'`,
    `linkedList.head.value`,
    linkedList.head.value,
    'Costi'
])

linkedList.append()
unitTesting.addAssertion([
    `tail value should be 'Cristina'`,
    `linkedList.tail.value`,
    linkedList.tail.value,
    'Cristina'
])

////////////////////////////////
unitTesting.printResults()
