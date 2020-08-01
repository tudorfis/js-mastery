
class UnitTestingVerification {
    constructor( assertions ) {
        this.assertions = assertions
    }

    get didPass() {
        const { assertions } = this

        return assertions.reduce((initialPresumption, assertionResult) => {
            return initialPresumption && assertionResult.evaluation
        }, true)
    }
    
    get assertionsResults() {
        return this.buildAssertionsList()
    }
    
    buildAssertionsList() {
        const { assertions } = this

        return assertions
            .map(assertionResult => ({ 
                assertionNumber: assertions.indexOf( assertionResult ) + 1,
                ...assertionResult
            }))
    }
}

export default UnitTestingVerification
