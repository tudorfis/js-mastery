import Tree from "../lib/data-structures/Tree.js";
import UnitTesting from "../lib/unit-testing/UnitTesting.js";
import findDepthFirstTests from "./Tree.test/findDepthFirstTests.js"
import findBreadthFirstTests from "./Tree.test/findBreadthFirstTests.js"

const filesystem = new Tree( '/' )

const unitTesting = new UnitTesting({
    testName: 'Tree.js',
    testDescription: 'testing a filesystem with a Tree' 
})

unitTesting.addAssertion([
    'filesystem.root.count() === 1',
    `filesystem.root.count()`,
    filesystem.root.count(),
    1
])

filesystem.root.addNode('/videos')
filesystem.root.addNode('/music')
filesystem.root.addNode('/games')

unitTesting.addAssertion([
    'filesystem.root.count() === 4',
    `filesystem.root.count()`,
    filesystem.root.count(),
    4
])

filesystem.root.children[0].addNode('/the matrix.avi')
filesystem.root.children[0].addNode('/family guy - latest episode.avi')

unitTesting.addAssertion([
    'filesystem.root.count() === 6',
    `filesystem.root.count()`,
    filesystem.root.count(),
    6
])

unitTesting.addAssertion([
    `filesystem.add( '/documents/personal/tax.docx' )`,
    `filesystem.add( '/documents/personal/tax.docx' )`,
    filesystem.add( '/documents/personal/tax.docx' ),
    undefined
])

filesystem.add('/games/cod.exe')
filesystem.add('/games/cod2.exe')
filesystem.add('/games/fps/counter-strike.exe')

unitTesting.addAssertion([
    `JSON.stringify( filesystem.root )`,
    `JSON.stringify( filesystem.root )`,
    JSON.stringify( filesystem.root ),
    `{"value":"/","children":[{"value":"/videos","children":[{"value":"/the matrix.avi","children":[]},{"value":"/family guy - latest episode.avi","children":[]}]},{"value":"/music","children":[]},{"value":"/games","children":[{"value":"/cod.exe","children":[]},{"value":"/cod2.exe","children":[]},{"value":"/fps","children":[{"value":"/counter-strike.exe","children":[]}]}]},{"value":"/documents","children":[{"value":"/personal","children":[{"value":"/tax.docx","children":[]}]}]}]}`
])

// filesystem.print()

///////  find in nodes ///////////
let logFind, findTypeMethod

logFind = false; findTypeMethod = 'findDepthFirst'
findDepthFirstTests({ unitTesting, filesystem, findTypeMethod, logFind })

logFind = false; findTypeMethod = 'findBreadthFirst'
findBreadthFirstTests({ unitTesting, filesystem, findTypeMethod, logFind })

// filesystem.print()

filesystem.delete('/games/cod.exe')
filesystem.delete('/documents/personal/tax.docx')

unitTesting.addAssertion([
    `filesystem.delete('/games/cod.exe')`,
    `JSON.stringify( filesystem.root )`,
    JSON.stringify( filesystem.root ),
    `{"value":"/","children":[{"value":"/videos","children":[{"value":"/the matrix.avi","children":[]},{"value":"/family guy - latest episode.avi","children":[]}]},{"value":"/music","children":[]},{"value":"/games","children":[{"value":"/cod2.exe","children":[]},{"value":"/fps","children":[{"value":"/counter-strike.exe","children":[]}]}]},{"value":"/documents","children":[{"value":"/personal","children":[]}]}]}`
])

filesystem.delete('/videos/the matrix.avi')
filesystem.delete('/videos/family guy - latest episode.avi')
filesystem.delete('/games/cod2.exe')
filesystem.delete('/games/fps/counter-strike.exe')

// filesystem.print()

////////////////////////////////
unitTesting.printResults()
