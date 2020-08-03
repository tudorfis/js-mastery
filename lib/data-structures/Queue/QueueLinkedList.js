import LinkedList from "../LinkedList.js"

const linkedList = new WeakMap()

class QueueLinkedList {
    constructor() {
        linkedList.set( this, new LinkedList())
    }
    enque( item ) {
        if ( !item ) return

        linkedList.get(this).append( item )
    }
    deque() {
        if ( this.isEmpty() ) return

        const item = linkedList.get(this).head
        linkedList.get(this).deleteHead()

        return item.value
    }
    isEmpty() {
        return linkedList.get(this).isEmpty()
    }
    toArray(){
        return linkedList.get(this).toArray()
    }
}

export default QueueLinkedList
