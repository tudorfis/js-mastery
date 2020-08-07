import FindNode from "./Node/FindNode.js"

class Node {
    constructor( value ) {
        this.value = value
        this.children = []
    }
    getChildNode( value ) {
        return this.children.find(
            item => item.value === value
        )
    }
    addNode( value ) {
        const newNode = new Node( value )
        this.children.push( newNode )

        return newNode
    }
    removeNode( node ) {
        const index = this.children.indexOf( node )
        if ( index === -1 ) return

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
    find({ node, findTypeMethod, logFind, value }) {
        const findNode = new FindNode({ node, findTypeMethod, logFind, value })
        return findNode.find( value )
    }
}

export default Node
