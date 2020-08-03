const formatItemToString = item => {
    if (item === null) return 'null'
    if (item === undefined) return 'undefined'
    if (item === 0) return '0'
    if (item === '') return "''"
    
    return item
}
const findFirstRepeatingCharacter = str => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if ( str[i] === str[j] ) {
                return str[i]
            }
        }
    }

    return ''
}

export {
    formatItemToString,
    findFirstRepeatingCharacter
}
