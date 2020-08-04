
const makeRomanNumbers = num => {
    if (!num) return

    let result = ''

    let numX = Math.floor( num / 10 )
    num -= numX * 10

    result += numX > 0 ? Array( numX ).fill( 'X' ).join('') : ''

    if ( num === 9 ) {
        result += 'IX'
        num = 0
    }

    let numV = Math.floor( num / 5 )
    num -= numV * 5
    
    result += numV > 0 ? Array( numV ).fill( 'V' ).join('') : ''
    if ( num === 4 ) {
        result += 'IV'
        num = 0
    }

    result += num > 0 ? Array( num ).fill( 'I' ).join('') : ''

    return result
}

export {
    makeRomanNumbers
}
