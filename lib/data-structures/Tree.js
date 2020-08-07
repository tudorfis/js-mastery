import Node from "./Tree/Node.js"
import TraverseTree from "./Tree/TraverseTree.js"
import BuildTree from "./Tree/BuildTree.js"

class Tree {
    constructor( rootValue ) {
        this.root = new Node( rootValue )
    }
    add( pathDestination ) {
        const traverseTree = new TraverseTree( this )

        traverseTree.traverse( 
            pathDestination,
            (currNode, path) => currNode.addNode( path )
        )
    }
    delete( pathDestination ) {
        const traverseTree = new TraverseTree( this )

        traverseTree.traverse( 
            pathDestination,
            _ => new Error( `invalid path ${pathDestination}` ),
            ( currNode, lastPath ) => {
                const nodeToDelete = currNode.getChildNode( lastPath )
                if ( nodeToDelete )
                    currNode.removeNode( nodeToDelete )
            }
        )
    }
    print() {
        const buildTree = new BuildTree( this )
        const simplifiedTree = buildTree.buildSimplifiedTree()

        console.log( JSON.stringify( simplifiedTree, null, 2 ))
    }
    find({ value, findTypeMethod, logFind }) {
        if (this.root.value === value ) {
            return this.root
        }

        return this.root.find({ 
            node: this.root,
            value,
            findTypeMethod,
            logFind
        })
    }
}

export default Tree
 