import BSTBuild from "./BST/BSTBuild.js"

class BSTNode {
    constructor( value ) {
        this.value = value
        this.smallChild = null
        this.bigChild = null
    }
    addNode( value, currNode = this ) {
        if ( value > currNode.value ) {
            if ( currNode.bigChild ) {
                this.addNode( value, currNode.bigChild )
            }
            else {
                currNode.bigChild = new BSTNode( value )
            }
        }
        else if ( value < currNode.value ) {
            if ( currNode.smallChild ) {
                this.addNode( value, currNode.smallChild )
            }
            else {
                currNode.smallChild = new BSTNode( value )
            }
        }
    }
}

class BST {
    constructor() {
        this.root = null
    }
    add( value ) {
        if ( !this.root ) {
            this.root = new BSTNode( value )
            return
        }

        this.root.addNode( value )
    }
    log() {
        const obj = {}
        BSTBuild.buildSimplifiedBST( this.root, obj )

        return obj
    }
}

export default BST
