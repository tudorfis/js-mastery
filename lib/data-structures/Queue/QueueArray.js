class QueueArray {
    constructor() {
        this.items = []
    }
    enque(value) {
        this.items.push(value)
    }
    deque() {
        return this.items.shift()
    }
    isEmpty() {
        return !this.items.length
    }
    toArray() {
        return this.items.slice()
    }
}

export default QueueArray
