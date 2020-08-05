import UnitTestingVerification from "./UnitTestingVerification.js"
import UnitTestingPrinting from "./UnitTestingPrinting.js"
import { formatItemToString, shorterstr } from "../global/string.utils.js"

class UnitTesting {
    constructor({ testName, testDescription }) {
        this.assertions = []
        
        this.unitTestingVerification = new UnitTestingVerification( this.assertions )
        this.unitTestingPrinting = new UnitTestingPrinting({ testName, testDescription })
    }
    addAssertion( assertionDetails ) {
        const assertions = {
            assertionName:      assertionDetails[ 0 ],
            whatWasExecuted:    formatItemToString( assertionDetails[ 1 ] ),
            resultWas:          shorterstr( formatItemToString( assertionDetails[ 2 ] ), 15),
            resultExpected:     shorterstr( assertionDetails[ 3 ] , 15),
            get evaluation() { 
                return assertionDetails[ 2 ] === assertionDetails[ 3 ]
            }
        }

        this.assertions.push( assertions )
    }
    printResults() {
        const { didPass, assertionsResults } = this.unitTestingVerification
        this.unitTestingPrinting.printResults({ didPass, assertionsResults })
    }
}

export default UnitTesting
