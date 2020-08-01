import UnitTestingVerification from "./UnitTestingVerification.js"
import UnitTestingPrinting from "./UnitTestingPrinting.js"

class UnitTesting {
    constructor({ testName, testDescription }) {
        this.assertions = []
        
        this.unitTestingVerification = new UnitTestingVerification( this.assertions )
        this.unitTestingPrinting = new UnitTestingPrinting({ testName, testDescription })
    }
    
    before(fn) {
        fn()
    }
    addAssertion( assertionName, testDetails ) {
        this.assertions.push({
            assertionName,
            ...testDetails
        })
    }
    getResults() {
        const { didPass, assertionsResults } = this.unitTestingVerification
        this.unitTestingPrinting.printResults({ didPass, assertionsResults })
    }
}

export default UnitTesting
