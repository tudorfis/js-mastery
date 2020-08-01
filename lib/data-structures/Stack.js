import { generateItems, getItem, setItem } from './Stack/func/stackArray.func.js'

class Stack {
    constructor() {
        this.pointer = -1
        this.items = generateItems()
    }
    push(value) {
        if (!value) return

        this.pointer++
        setItem( this.items, this.pointer, value )
    }    
    pop() {
        const item = getItem( this.items, this.pointer )
        if (!item) return undefined

        this.pointer--
        return item
    }
    count() {
        return this.pointer + 1
    }
    isEmpty() {
        return this.count() === 0
    }
}

export default Stack
