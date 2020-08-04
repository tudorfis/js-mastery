
const buckets = new WeakMap()

class HashTable {
    constructor(length = 100) {
        this.length = length
        buckets.set( this, new Array( length ).fill( undefined ))
    }
    hash( key ) {
        if (!key) return

        return Math.floor(
            ('0.' + 
                key.split('')
                .map(char => char.charCodeAt(0))
                .reduce((a,b) => a + b)
            ) * this.length
        )
    }
    set( key, value ) {
        if ( !key ) return

        const hash = this.hash( key )
        buckets.get(this)[ hash ] = value
    }
    get( key ) {
        if ( !key ) return

        const hash = this.hash( key )
        return buckets.get(this)[ hash ]
    }
    delete( key ) {
        if ( !key ) return

        const hash = this.hash( key )
        buckets.get(this)[ hash ] = undefined
    }
}

export default HashTable
