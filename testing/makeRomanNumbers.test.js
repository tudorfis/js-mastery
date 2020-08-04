
import { makeRomanNumbers } from "../lib/global/number.utils.js"
import UnitTesting from "../lib/unit-testing/UnitTesting.js"

const unitTesting = new UnitTesting({
    testName: 'makeRomanNumbers( num )'
})

const expectedResult = [
    `I`,
    `II`,
    `III`,
    `IV`,
    `V`,
    `VI`,
    `VII`,
    `VIII`,
    `IX`,
    `X`,
    `XI`,
    `XII`,
    `XIII`,
    `XIV`,
    `XV`,
    `XVI`,
    `XVII`,
    `XVIII`,
    `XIX`,
    `XX`,
    `XXI`,
    `XXII`,
    `XXIII`,
    `XXIV`,
    `XXV`,
    `XXVI`,
    `XXVII`,
    `XXVIII`,
    `XXIX`,
    `XXX`,
    `XXXI`,
    `XXXII`,
    `XXXIII`,
    `XXXIV`,
    `XXXV`,
    `XXXVI`,
    `XXXVII`,
    `XXXVIII`,
    `XXXIX`
]

unitTesting.addAssertion([
    `makeRomanNumbers()`,
    `makeRomanNumbers()`,
    makeRomanNumbers(),
    undefined
])

for (let i = 1; i <= 39; i++) {
    unitTesting.addAssertion([
        `makeRomanNumbers( ${i} )`,
        `makeRomanNumbers( ${i} )`,
        makeRomanNumbers( i ),
        expectedResult[ i - 1 ]
    ])
}


////////////////////////////////
unitTesting.printResults()
