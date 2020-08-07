
class TraverseTree {
    constructor( tree ) {
        this.root = tree.root
    }
    traverse(
        pathDestination,
        callbackNoChildNodeFn,
        callbackAfterNodeFn
    ) {
        const paths = getPaths( pathDestination )
        if ( !paths.length ) return

        const lastPath = paths[ paths.length - 1 ]

        let currNode = this.root
        for (const path of paths ) {
            
            currNode = pathIteration({
                currNode, path, lastPath,
                callbackNoChildNodeFn, callbackAfterNodeFn
            })      
        }
    }
}

const getPaths = pathDestination => {
    return pathDestination.split("/")
        .filter( item => !!item ).map( item => `/${item}` )
}

const pathIteration = ({
    currNode,
    path,
    lastPath,
    callbackNoChildNodeFn,
    callbackAfterNodeFn
}) => {
    const childNode = currNode.getChildNode( path )
            
    if ( !childNode )
        currNode = callbackNoChildNodeFn( currNode, path )

    else {
        currNode = childNode
        
        if (callbackAfterNodeFn)
            callbackAfterNodeFn( currNode, lastPath )
    }

    return currNode
}

export default TraverseTree
