
class FindNode {
    constructor({ node, findTypeMethod, logFind }) {
        this.node = node
        this.findTypeMethod = findTypeMethod || 'findDepthFirst'
    }
    find( value ) {
        if ( this.logFind ) console.log(`                   `)
        
        return this[ this.findTypeMethod ]( this.node, value )
    }
    findDepthFirst( node, value ) {
        if ( this.logFind ) console.log(`[ ${ value } ] ${ node.value }`)

        for ( const child of node.children ) {
            if ( child.value === value ) {
                return child;
            }

            const nestedChildNode = this.findDepthFirst( child, value )
            if (nestedChildNode) {
                return nestedChildNode
            }
        }
    }
    findBreadthFirst( node, value ) {
        if ( this.logFind ) console.log(`[ ${value} ] ${ node.value }`)

        let foundChild
        for ( const child of node.children ) {
            foundChild = node.children.find( item => item.value === value)
            if ( foundChild ) {
                return foundChild
            }

            foundChild = this.findBreadthFirst( child, value )
            if ( foundChild ) {
                return foundChild
            }
        }
    }
}

export default FindNode
