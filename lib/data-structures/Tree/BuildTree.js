
class BuildTree {
    constructor( tree ) {
        this.root = tree.root
    }
    buildSimplifiedTree( currNode = this.root, obj = {} ) {
        for ( const nodeChildren of currNode.children ) {
            obj[ currNode.value ] = obj[ currNode.value ] || {}

            if ( !nodeChildren.children.length )
                obj[ currNode.value ][ nodeChildren.value ] = {}

            this.buildSimplifiedTree( nodeChildren, obj[ currNode.value ] )
        }

        return obj
    }
}

export default BuildTree
