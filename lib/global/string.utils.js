import HashTable from "../data-structures/HashTable.js"

const formatItemToString = item => {
    if (item === null) return 'null'
    if (item === undefined) return 'undefined'
    if (item === 0) return '0'
    if (item === '') return "''"
    
    return item
}

const quadraticfindFirstRepeatingCharacter = str => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if ( str[i] === str[j] ) {
                return str[i]
            }
        }
    }

    return ''
}

const linearWithSetFirstRepeatingCharacter = str => {
    const characters = new Set()

    for (const char of str) {
        if (characters.has( char )) return char
        characters.add( char )
    }

    return ''
}

const findFirstRepeatingCharacter = str => {
    const table = new HashTable()

    for (const char of str) {
        if (table.get( char )) return char
        table.set( char, true )
    }

    return ''
}

export {
    formatItemToString,
    findFirstRepeatingCharacter
}
