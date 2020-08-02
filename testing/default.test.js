import consoleColors from "../lib/global/console.colors.js"

const defaultSeparatorSpace = `                                                                                              `
const defaultMessage = `   STARTED TEST AT [ ${new Date()} ]       `
const newLine = `
`
const printNewLines = noOfLines => {
    let totalLinesStr = ''
    for ( let i = 0; i <= noOfLines; i++ )
        totalLinesStr += newLine

    console.log( totalLinesStr )
}

printNewLines( 3 )

console.log(
    consoleColors.bg.Blue,
    consoleColors.fg.White,
    defaultSeparatorSpace,
    consoleColors.Reset
)

console.log(
    consoleColors.bg.Blue,
    consoleColors.fg.White,
    defaultMessage,
    consoleColors.Reset
)

console.log(
    consoleColors.bg.Blue,
    consoleColors.fg.White,
    defaultSeparatorSpace,
    consoleColors.Reset
)

printNewLines( 1 )
