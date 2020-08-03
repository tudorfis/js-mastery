
import Queue from "../lib/data-structures/Queue.js";
import UnitTesting from "../lib/unit-testing/UnitTesting.js";

const queue = new Queue()

const unitTesting = new UnitTesting({
    testName: 'Queue.js',
    testDescription: 'testing the implementation of a queue in javascript' 
})

unitTesting.addAssertion([
    `deque when there isn't anything`,
    `queue.deque()`,
    queue.deque(),
    undefined
])

queue.enque()
unitTesting.addAssertion([
    `enque nothing shouldn't deque anything`,
    `queue.enque() ; queue.deque()`,
    queue.deque(),
    undefined
])

queue.enque( 'Adi' )
queue.enque( 'Andrei' )

unitTesting.addAssertion([
    `enqued 'Adi', 'Andrei', 'Bogdan' in order `,
    `queue.enque( 'Bogdan' )`,
    queue.enque( 'Bogdan' ),
    undefined
])

unitTesting.addAssertion([
    `deque should bring out 'Adi'`,
    `queue.deque()`,
    queue.deque(),
    'Adi'
])

unitTesting.addAssertion([
    `deque should bring out 'Andrei'`,
    `queue.deque()`,
    queue.deque(),
    'Andrei'
])

unitTesting.addAssertion([
    `'Tudor' should be after 'Bogdan' `,
    `queue.enque( 'Tudor' )`,
    queue.enque( 'Tudor' ),
    undefined
])

unitTesting.addAssertion([
    `deque should bring out 'Bogdan'`,
    `queue.deque()`,
    queue.deque(),
    'Bogdan'
])

unitTesting.addAssertion([
    `deque should bring out 'Tudor'`,
    `queue.deque()`,
    queue.deque(),
    'Tudor'
])

unitTesting.addAssertion([
    `deque should bring out undefined since nobody is in the line`,
    `queue.deque()`,
    queue.deque(),
    undefined
])

unitTesting.addAssertion([
    `isEmpty() should return true since nobody is in the queue`,
    `queue.isEmpty()`,
    queue.isEmpty(),
    true
])

////////////////////////////////////
unitTesting.printResults()
