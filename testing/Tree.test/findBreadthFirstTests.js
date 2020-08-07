
const findBreadthFirstTests = ({ unitTesting, filesystem, findTypeMethod, logFind}) => {
    unitTesting.addAssertion([
        `findBreadthFirst filesystem.find '/music'`,
        `filesystem.find({ value: '/music', findTypeMethod, logFind })`,
        JSON.stringify(filesystem.find({ value: '/music', findTypeMethod, logFind })),
        `{"value":"/music","children":[]}`
    ])
    
    unitTesting.addAssertion([
        `findBreadthFirst filesystem.find '/cod.exe'`,
        `filesystem.find({ value: '/cod.exe', findTypeMethod, logFind })`,
        JSON.stringify(filesystem.find({ value: '/cod.exe', findTypeMethod, logFind })),
        `{"value":"/cod.exe","children":[]}`
    ])
    
    unitTesting.addAssertion([
        `findBreadthFirst filesystem.find '/tax.docx'`,
        `filesystem.find({ value: '/tax.docx', findTypeMethod, logFind })`,
        JSON.stringify(filesystem.find({ value: '/tax.docx', findTypeMethod, logFind })),
        `{"value":"/tax.docx","children":[]}`
    ])
    
    unitTesting.addAssertion([
        `findBreadthFirst filesystem.find '/personal'`,
        `filesystem.find({ value: '/personal', findTypeMethod, logFind })`,
        JSON.stringify(filesystem.find({ value: '/personal', findTypeMethod, logFind })),
        `{"value":"/personal","children":[{"value":"/tax.docx","children":[]}]}`
    ])
    
    unitTesting.addAssertion([
        `findBreadthFirst filesystem.find '/counter-strike.exe'`,
        `filesystem.find({ value: '/counter-strike.exe', findTypeMethod, logFind })`,
        JSON.stringify(filesystem.find({ value: '/counter-strike.exe', findTypeMethod, logFind })),
        `{"value":"/counter-strike.exe","children":[]}`
    ])
    
    unitTesting.addAssertion([
        `findBreadthFirst filesystem.find '/unexistend_folder'`,
        `filesystem.find({ value: '/unexistend_folder', findTypeMethod, logFind })`,
        JSON.stringify(filesystem.find({ value: '/unexistend_folder', findTypeMethod, logFind })),
        undefined
    ])
}

export default findBreadthFirstTests
