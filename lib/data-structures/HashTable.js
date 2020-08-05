
const buckets = new WeakMap()

class HashTable {
    constructor( length = 100 ) {
        this.length = length
        
        const newBucketsList = new Array( this.length )
            .fill( undefined ).map( _ => [])

        buckets.set( this, newBucketsList )
    }
    
    set( key, value ) {
        if ( !key ) return

        const hash = this.hash( key )
        const bucket = buckets.get(this)[ hash ]
        
        let keyValuePair = bucket.find( item => item[ 0 ] === key )

        if ( !keyValuePair ) {
            bucket.push([ key, value ])
        }
        else {
            keyValuePair[ 1 ] = value
        }
    }
    get( key ) {
        if ( !key ) return

        const hash = this.hash( key )
        const bucket = buckets.get(this)[ hash ]
        
        if ( !bucket || !bucket.length )
            return undefined
        
        const keyValuePair = bucket.find( item => item[ 0 ] === key )

        return keyValuePair ? keyValuePair[ 1 ] : undefined
    }
    delete( key ) {
        if ( !key ) return

        const hash = this.hash( key )
        buckets.get(this)[ hash ] = undefined
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
    showInfo() {
        return buckets.get(this).flat()
    }
}

export default HashTable
