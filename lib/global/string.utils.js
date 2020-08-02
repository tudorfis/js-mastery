const formatItemToString = item => {
    if (item === null) return 'null'
    if (item === undefined) return 'undefined'
    if (item === 0) return '0'
    if (item === '') return "''"
    
    return item
}

export {
    formatItemToString
}
