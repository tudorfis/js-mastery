



import Stack from "./lib/data-structures/Stack";

const testName = 'Stack.js'
let assertions = []

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

assertions.push({
    name: 'stack.count() === 4',
    resultWas: stack.count(),
    resultExpected: 4,
    
    get evaluation() {
        return (
            this.resultWas === this.resultExpected
        )
    }
})

assertions.push({
    name: 'stack.pop() === 3',
    resultWas: stack.pop(),
    resultExpected: 3,
    
    get evaluation() {
        return (
            this.resultWas === this.resultExpected
        )
    }
})

assertions.push({
    name: 'stack.count() === 2',
    resultWas: stack.count(),
    resultExpected: 2,
    
    get evaluation() {
        return (
            this.resultWas === this.resultExpected
        )
    }
})

assertions.push({
    name: 'stack.pop() === 2',
    resultWas: stack.pop(),
    resultExpected: 4,
    
    get evaluation() {
        return (
            this.resultWas === this.resultExpected
        )
    }
})

assertions.push({
    name: 'stack.count() === 1',
    resultWas: stack.count(),
    resultExpected: 1,
    
    get evaluation() {
        return (
            this.resultWas === this.resultExpected
        )
    }
})

assertions.push({
    name: 'stack.pop() === 1',
    resultWas: stack.pop(),
    resultExpected: 1,
    
    get evaluation() {
        return (
            this.resultWas === this.resultExpected
        )
    }
})

assertions.push({
    name: 'stack.pop() === undefined',
    resultWas: stack.pop(),
    resultExpected: undefined,
    
    get evaluation() {
        return (
            this.resultWas === this.resultExpected
        )
    }
})

const didPass = assertions.reduce((initialPresumption, assertionResult) => {
    return initialPresumption && assertionResult.evaluation
}, true)

const failedAssertions = assertions
    .filter(({ evaluation }) => !evaluation )
    .map(assertionResult => ({ 
        assertionNumber: assertions.indexOf( assertionResult ) + 1,
        ...assertionResult
    }))


console.log(' ========================================= ')

console.log(
    `%c ${testName} = ${ didPass ? 'did pass' : 'did not pass' }`, 
    `background: ${ didPass ? 'lightgreen' : 'lightcoral' }`
)

if ( failedAssertions.length ) 
    console.table( failedAssertions )

console.log(' ========================================= ')

/*
console.log('count', stack.count())
console.log('pop', stack.pop())
console.log('count', stack.count())
console.log('pop', stack.pop())
console.log('count', stack.count())

console.log('pop', stack.pop())
console.log('pop', stack.pop())
console.log('pop', stack.pop())
*/