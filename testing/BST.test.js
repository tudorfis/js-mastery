import BST from "../lib/data-structures/BST.js";
import UnitTesting from "../lib/unit-testing/UnitTesting.js";

const bst = new BST()

const unitTesting = new UnitTesting({
    testName: 'BST.js',
    testDescription: 'binary search tree' 
})

unitTesting.addAssertion([
    `bst.add( 5 )`,
    `bst.add( 5 )`,
    bst.add( 5 ),
    undefined
])

unitTesting.addAssertion([
    `bst.add( 8 )`,
    `bst.add( 8 )`,
    bst.add( 8 ),
    undefined
])

unitTesting.addAssertion([
    `bst.add( 2 )`,
    `bst.add( 2 )`,
    bst.add( 2 ),
    undefined
])

unitTesting.addAssertion([
    `bst.add( 1 )`,
    `bst.add( 1 )`,
    bst.add( 1 ),
    undefined
])

unitTesting.addAssertion([
    `bst.add( 3 )`,
    `bst.add( 3 )`,
    bst.add( 3 ),
    undefined
])

unitTesting.addAssertion([
    `bst.log()`,
    `bst.log()`,
    JSON.stringify(bst.log()),
    `{"5":{"2":{"1":{},"3":{}},"8":{}}}`
])

////////////////////////////////
unitTesting.printResults()
