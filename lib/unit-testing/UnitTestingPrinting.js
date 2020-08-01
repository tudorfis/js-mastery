
import consoleColors from "../global/console.colors.js"
import consoleTablePrinter from 'console-table-printer'
const { Table } = consoleTablePrinter

const displayDetails = {
    didPassBg: consoleColors.bg.Green,
    didPassFg: consoleColors.fg.Black,
    didPassText: '                              ALL TESTS ARE PASSED                                ',

    didNotPassBg: consoleColors.bg.Red,
    didNotPassFg: consoleColors.fg.White,
    didNotPassText: '                           SOME TESTS FAILED                                   ',

    printLineText: '=================================================================================='
}

class UnitTestingPrinting {
    constructor({ testName, testDescription }) {
        this.testName = testName
        this.testDescription = testDescription
    }
    printResults({ didPass, assertionsResults }) {
        this.printLine()
        this.printTestNameDescription()
        this.printDidOrNotPass( didPass )
        this.printAssertionsResults( assertionsResults )    
    }

    printTestNameDescription() {
        const { testName, testDescription } = this

        console.log(
            consoleColors.bg.Blue,
            consoleColors.fg.White,
            `   ${testName}    `,
            consoleColors.Reset
        )

        if ( testDescription ) 
            console.log(testDescription)

        console.log(``)
    }

    printDidOrNotPass( didPass ) {
        
        if ( didPass ) {
            console.log(
                displayDetails.didPassBg, 
                displayDetails.didPassFg,
                displayDetails.didPassText,
                consoleColors.Reset
            )
        }
        else {
            console.log(
                displayDetails.didNotPassBg, 
                displayDetails.didNotPassFg,
                displayDetails.didNotPassText,
                consoleColors.Reset
            )
        }

    }
    printAssertionsResults( assertionsResults ) {
        const table = new Table()

        for ( const assertionsResult of assertionsResults ) {
            const color = assertionsResult.evaluation ? 'green' : 'red'
            table.addRow( assertionsResult, { color })
        }

        table.printTable()
    } 
    printLine() {
        console.log(`
${ displayDetails.printLineText }
        `)
    }
}

export default UnitTestingPrinting
