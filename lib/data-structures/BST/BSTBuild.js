
export default class BSTBuild {
    static buildSimplifiedBST( currNode, obj ) {
        obj[ currNode.value ] = {}
        
        if ( currNode.smallChild ) {
            obj[ currNode.value ][ currNode.smallChild.value ] = {}
            this.buildSimplifiedBST( currNode.smallChild, obj[ currNode.value ] )
        }

        if ( currNode.bigChild ) {
            obj[ currNode.value ][ currNode.bigChild.value ] = {}
            this.buildSimplifiedBST( currNode.bigChild, obj[ currNode.value ] )
        }
    }
}
