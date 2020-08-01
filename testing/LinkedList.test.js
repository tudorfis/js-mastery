import LinkedList from "../lib/data-structures/LinkedList.js";
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

let linkedList

const unitTesting = new UnitTesting({
    testName: 'LinkedList.js',
    testDescription: 'testing the implementation of a linkedList in javascript' 
})

unitTesting.before(function() {
    linkedList = new LinkedList()
    
})

resultWas = linkedList.head
resultExpected = null
buildAddAssertion('linkedList.head should be null')

resultWas = linkedList.tail
resultExpected = null
buildAddAssertion('linkedList.tail should be null')

/////////////////////////////////////////
linkedList.append( 'Tudor' )
// linkedList.prepend( 'Tudor' )

resultWas = linkedList.head.value
resultExpected = 'Tudor'
buildAddAssertion(`linkedList.head should be 'Tudor'`)

resultWas = linkedList.head.value
resultExpected = 'Tudor'
buildAddAssertion(`linkedList.head should be 'Tudor'`)

resultWas = linkedList.head.next
resultExpected = null
buildAddAssertion(`linkedList.head.next should be null`)

resultWas = linkedList.tail.next
resultExpected = null
buildAddAssertion(`linkedList.tail.next should be null`)

///////////////////////////////
linkedList.append( 'Cristina' )

resultWas = linkedList.head.next.value
resultExpected = 'Cristina'
buildAddAssertion(`last item should be 'Cristina'`)

resultWas = linkedList.tail.value
resultExpected = 'Cristina'
buildAddAssertion(`linkedList.tail.value should be 'Cristina'`)

///////////////////////////////
linkedList.prepend( 'Costi' )

resultWas = linkedList.head.value
resultExpected = 'Costi'
buildAddAssertion(`head value should be 'Costi'`)

resultWas = linkedList.head.next.value
resultExpected = 'Tudor'
buildAddAssertion(`head.next.value should be 'Tudor'`)


////////////////////////////
linkedList.prepend()

resultWas = linkedList.head.value
resultExpected = 'Costi'
buildAddAssertion(`head value should be 'Costi'`)


////////////////////////////
linkedList.append()

resultWas = linkedList.tail.value
resultExpected = 'Cristina'
buildAddAssertion(`tail value should be 'Cristina'`)


////////////////////////////////
unitTesting.getResults()
