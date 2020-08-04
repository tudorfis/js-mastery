import { generateItems, getItem, setItem } from './Stack/func/stackObject.func.js'

const items = new WeakMap()

class Stack {
    constructor() {
        this.pointer = -1
        items.set(this, generateItems())
    }
    push( value ) {
        if ( !value ) return

        this.pointer++
        setItem( items.get(this), this.pointer, value )
    }    
    pop() {
        const item = getItem( items.get(this), this.pointer )
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
