class Node {
    constructor(value, parentNode = null) {
        this.value = value
        this.children = []
        this.parentNode = parentNode
    }
    addNode( value ) {
        const newNode = new Node( value, this )
        this.children.push( newNode )
    }
    removeNode( node ) {
        const index = this.children.indexOf( node )
        this.children.splice( index, 1 )
    }
    count( currNode = this ) {
        let count = 1

        if ( currNode.children.length ) {
            for ( const childNode of currNode.children ) {
                count += this.count( childNode )
            }    
        }

        return count
    }
}

class Tree {
    constructor( rootValue ) {
        this.root = new Node( rootValue )
    }
}

export default Tree
