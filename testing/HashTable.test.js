import HashTable from "../lib/data-structures/HashTable.js"
import UnitTesting from "../lib/unit-testing/UnitTesting.js"

const unitTesting = new UnitTesting({
    testName: 'HashTable.js'
})

const table = new HashTable()
const table2 = new HashTable( 523 )

unitTesting.addAssertion([
    `table.hash() should return undefined if nothing entered`,
    `table.hash()`,
    table.hash(),
    undefined
])

unitTesting.addAssertion([
    `table.hash( 'Tudor' ) should return 52, due to the length of 100`,
    `table.hash( 'Tudor' )`,
    table.hash( 'Tudor' ),
    52
])

unitTesting.addAssertion([
    `table.hash( 'Cristina' ) should return 82, due to the length of 100`,
    `table.hash( 'Cristina' )`,
    table.hash( 'Cristina' ),
    82
])

unitTesting.addAssertion([
    `table.hash( 'Adi' ) should return 27, due to the length of 100`,
    `table.hash( 'Adi' )`,
    table.hash( 'Adi' ),
    27
])

unitTesting.addAssertion([
    `table2.hash( 'Tudor' ) should return 275, due to the length of 523`,
    `table2.hash( 'Tudor' )`,
    table2.hash( 'Tudor' ),
    275
])
////////////////////////////////

unitTesting.addAssertion([
    `table.set( 'name', 'Tudor' ) should not return anything `,
    `table.set( 'name', 'Tudor' )`,
    table.set( 'name', 'Tudor' ),
    undefined
])

unitTesting.addAssertion([
    `table.get( 'name' ) should not return 'Tudor' `,
    `table.get( 'name' )`,
    table.get( 'name' ),
    'Tudor'
])

table.set( 'name', 'Tudor222' )
table.set( 'phone', '112' )

unitTesting.addAssertion([
    `table.get( 'name' ) should not return 'Tudor222' `,
    `table.get( 'name' )`,
    table.get( 'name' ),
    'Tudor222'
])

unitTesting.addAssertion([
    `table.get( 'phone' ) should not return '112' `,
    `table.get( 'phone' )`,
    table.get( 'phone' ),
    '112'
])

table.delete( 'name' )
table.delete( 'phone' )

unitTesting.addAssertion([
    `table.get( 'name' ) should return undefined since we delete that key `,
    `table.get( 'name' )`,
    table.get( 'name' ),
    undefined
])

unitTesting.addAssertion([
    `table.get( 'phone' ) should return undefined since we delete that key `,
    `table.get( 'phone' )`,
    table.get( 'phone' ),
    undefined
])

unitTesting.addAssertion([
    `table.get( 'randomAnything' ) should return undefined since that key was never added`,
    `table.get( 'randomAnything' )`,
    table.get( 'randomAnything' ),
    undefined
])

////////////////////////////////
unitTesting.printResults()
