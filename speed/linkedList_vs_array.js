
class LinkedList {
    constructor() {
        this.head = null
    }
    prepend(value) {
        const newNode = { value, next: this.head }
        this.head = newNode
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

const linkedList = new LinkedList()
const array = []
const n_power = 7
const search_i = 10**n_power - 10

console.time('linkedList')
for (let i = 10**n_power; i >= 0; i--) {
    linkedList.prepend({i})
}
console.timeLog('linkedList')

console.time('array')
for (let i = 0; i <= 10**n_power; i++) {
    array.push({i})
}
console.timeLog('array')

console.time('linkedList.find')
linkedList.find(search_i)
console.timeLog('linkedList.find')

console.time('array.find for')
for (const el of array) {
    if (el.i === search_i) {
        break
    }
}
console.timeLog('array.find for')

console.time('array.find')
array.find(el => el.i === search_i)
console.timeLog('array.find')


console.time('array.splice')
array.splice(search_i, 0, 'Tudor')
console.timeLog('array.splice')

console.time('linkedList.insertAfter')
linkedList.insertAfter({i: 'Tudor'}, search_i)
console.timeLog('linkedList.insertAfter')

console.time('array.unshift')
array.unshift('Cristina')
console.timeLog('array.unshift')

console.time('linkedList.prepend')
linkedList.prepend('Cristina')
console.timeLog('linkedList.prepend')
