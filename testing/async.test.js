import UnitTesting from "../lib/unit-testing/UnitTesting.js";

const unitTesting = new UnitTesting({
    testName: 'async'
})

const getDataFromServer = async _ => {
    return new Promise(resolve => {
        const waitTime = Math.ceil(Math.random() * 5)*1000
        setTimeout(_ => resolve('{ data }'), waitTime)
    })
}

(async _ => {

    unitTesting.addAssertion([
        'await getDataFromServer()',
        `await getDataFromServer()`,
        await getDataFromServer(),
        '{ data }'
    ])

    ////////////////////////////////
    unitTesting.printResults()

})()

