import { findFirstRepeatingCharacter } from "../lib/global/string.utils.js"
import UnitTesting from "../lib/unit-testing/UnitTesting.js"


const unitTesting = new UnitTesting({
    testName: 'findFirstRepeatingCharacter( str )'
})

unitTesting.addAssertion([
    `we should find "a" as the first repeating character`,
    `findFirstRepeatingCharacter( 'academind' )`,
    findFirstRepeatingCharacter( 'academind' ),
    'a'
])

unitTesting.addAssertion([
    `we should find "b" as the first repeating character`,
    `findFirstRepeatingCharacter( 'bamboo' )`,
    findFirstRepeatingCharacter( 'bamboo' ),
    'b'
])

unitTesting.addAssertion([
    `we should find "a" as the first repeating character`,
    `findFirstRepeatingCharacter( 'abracadabra' )`,
    findFirstRepeatingCharacter( 'abracadabra' ),
    'a'
])

unitTesting.addAssertion([
    `we should find "a" as the first repeating character`,
    `findFirstRepeatingCharacter( 'baacius' )`,
    findFirstRepeatingCharacter( 'baacius' ),
    'a'
])

unitTesting.addAssertion([
    `we should find "" (empty string )since no character is repeating`,
    `findFirstRepeatingCharacter( 'empty' )`,
    findFirstRepeatingCharacter( 'empty' ),
    ''
])


////////////////////////////////
unitTesting.printResults()
