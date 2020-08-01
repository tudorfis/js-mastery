
const objstring = object => JSON.stringify( object )
const deepclone = object => JSON.parse( objstring(object) )

export {
    objstring,
    deepclone
}