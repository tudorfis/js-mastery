class Stack {
    constructor() {
        this.pointer = -1
        this.items = new Map()
    }
    push(value) {
        this.pointer++
        this.items.set( this.pointer, value )
    }    
    pop() {
        const item = this.items.get( this.pointer )
        if (!item) return

        this.pointer--
        return item
    }
    count() {
        return this.pointer + 1
    }
}

export default Stack
