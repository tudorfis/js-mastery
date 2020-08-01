
const generateItems = _ => new Map()
const getItem = (items, key) => items.get( key )
const setItem = (items, key, value) => items.set( key, value )

export {
    generateItems,
    getItem,
    setItem
}
