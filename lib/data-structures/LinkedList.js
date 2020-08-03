
const _head = new WeakMap()
const _tail = new WeakMap()

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    append( value ) {
        if ( !value ) return 
        
        const newNode = { value, next: null }
        
        if ( !this.tail ) {
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }

        if ( !this.head ) {
            this.head = this.tail
        }
    }
    prepend( value ) {
        if ( !value ) return 

        const newNode = { value, next: this.head }
        this.head = newNode

        if ( !this.tail ) {
            this.tail = this.head
        }
    }
    isEmpty() {
        return !this.head
    }
    deleteHead() {
        this.head = this.head.next
    }
    toArray() {
        const array = []
        let currNode = this.head

        while ( currNode ) {
            array.push( currNode.value )
            currNode = currNode.next
        }

        return array
    }

    get head() {
        return _head.get( this )
    }
    set head( value ) {
        _head.set( this, value )
    }
    get tail() {
        return _tail.get( this )
    }
    set tail( value ) {
        _tail.set( this, value )
    }
}

export default LinkedList
