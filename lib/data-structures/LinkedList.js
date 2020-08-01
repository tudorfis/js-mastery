
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
    insertAfter(value, after_i) {
        const existingNode = this.find(after_i)
        if (existingNode) {
            const newNode = { value, next: existingNode.next }
            existingNode.next = newNode
        }
    }
    find(i) {
        let currNode = this.head
        while(currNode) {

            if (currNode.value.i === i) {
                return currNode
            }
            
            currNode = currNode.next 
        }
    }
}

export default LinkedList