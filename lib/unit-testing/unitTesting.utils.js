import { formatItemToString } from "../global/string.utils.js";

const buildAssertionDetails = ({ whatWasExecuted, resultWas, resultExpected }) => ({
    whatWasExecuted,
    resultWas: formatItemToString( resultWas ),
    resultExpected: formatItemToString(resultExpected),
    get evaluation() { 
        return this.resultWas === this.resultExpected
    }
})

export {
    buildAssertionDetails
}
