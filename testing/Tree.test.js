import Tree from "../lib/data-structures/Tree.js";
import UnitTesting from "../lib/unit-testing/UnitTesting.js";

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

filesystem.root.children[0].addNode('the matrix.avi')
filesystem.root.children[0].addNode('family guy - latest episode.avi')

unitTesting.addAssertion([
    'filesystem.root.count() === 6',
    `filesystem.root.count()`,
    filesystem.root.count(),
    6
])

////////////////////////////////
unitTesting.printResults()
