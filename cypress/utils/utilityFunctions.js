
const filepath = `Traditional-V1-TestResults.txt`; 
const browser = Cypress.env('browser');
// const device = "Laptop";


/**
 * A Helper to print the test result in the following format:
 * Task: <Task Number>, Test Name: <Test Name>, DOM Id:: <id>, Browser: <Browser>, Viewport: <Width x Height>, Device<Device type>, Status: <Pass | Fail>
 * 
 * Example: Task: 1, Test Name: Search field is displayed, DOM Id: DIV__customsear__41, Browser: Chrome, Viewport: 1200 x 700, Device: Laptop, Status: Pass
 * 
 * @param {int} task                   1, 2 or 3
 * @param {string} testName.           something meaningful. E.g. Search field is displayed
 * @param {string} domId               DOM ID of the element
 * @param {string} comparisonResult    result of comparing the "Expected" value and the "Actual" value.
 * @param {string} viewport            dimensions of the device under test
 * @return                             returns the same comparison result back so that it can be used for further Assertions in the test code.
 */

function hackathonReporter (task, testName, domId, comparisonResult, viewport="660X1000", device){
    try{
        cy.writeFile(`${filepath}`, `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`, {flag: "a+"});
    }
    catch {
       (e) => console.log(e, 'Data was not appended');
    }
    return comparisonResult;
}


/**
 * A method to assert that an element is visible on navigation or interaction
 * 
 * Example shouldBeVisible(1, 'a sample test', '#sampleID', 'iphone-x');
 * 
 * @param {int} task          1, 2 or 3
 * @param {string} testName   something meaningful 
 * @param {string} domId      DOM ID of the element
 * @param {string} viewport   dimensions of the device under test 
 */
function shouldBeVisible (testName, domId, viewport, task=1) {
   let displayed = true;
   try { 
        cy.get(domId).should('be.visible');
   } catch(e) {
     displayed = false;
   }
   return hackathonReporter(task, testName, domId, displayed, viewport, checkDevice(viewport));
}

/**
 * A method to assert that an element is visible on navigation or interaction
 * 
 * Example shouldEqual(1, 'a sample test', '#sampleID', 'iphone-x', 4);
 * 
 * @param {int} task          1, 2 or 3
 * @param {string} testName   something meaningful 
 * @param {string} domId      DOM ID of the element
 * @param {string} viewport   dimensions of the device under test 
 * @param {int} elementLength number of items found
 * @returns                    hackathonReporter method to print the test results on a .txt file
 */
function shouldEqual (testName, domId, viewport, elementLength, task=1) {
  var displayed = true;
  try { 
       cy.get(domId).should($element => {
        expect($element).to.have.length(elementLength)
       } );
  } catch(e) {
    displayed = false;
  }
  return hackathonReporter(task, testName, domId, displayed, viewport, checkDevice(viewport));
}

/**
 * A method to assert that an attribute has certain properties, such as placeholder
 * 
 * Example shouldInvokeAttribute(1, 'a sample test', '#sampleTextInput', 'iphone-x', 'placeholder', 'text found on input placeholder');
 * 
 * @param {int} task         1, 2 or 3
 * @param {string} testName  meaningful test name
 * @param {string} domId     id of element under test e.g #somerandom_id
 * @param {string} viewport  the dimensions of device under test e.g 1200 X 700
 * @param {string} attrName  the attributes of the element to be validated e.g placeholder
 * @param {string} attrValue expected value of the attribute 
 */
function shouldInvokeAttribute (testName, domId, viewport, attrName, attrValue, task=1) {
  var displayed = true;
  try { 
       cy.get(domId).invoke('attr', `${attrName}`).should('contain', `${attrValue}`);
  } catch(e) {
    displayed = false;
  }
  return hackathonReporter(task, testName, domId, displayed, viewport, checkDevice(viewport));
  
}

/**
 *  A method to translate viewport sizes to meaningful (Width X Height sizes that can be used in the test)
 *  The method takes in the sizes as an array and breaks the areay down to return it as a (Width X Height) value
 *  with the exception of iphone-x. 
 * 
 * Example shouldBeVisible(1, "Logo is displayed", elements.logo(), viewPortSize(size));
 * 
 * The above will return the viewport size as the viewport provided as an array by the test
 * 
 * @param {array} size Viewport screen dimensions
 * @returns            returns dimensions of the viewport in Width X Height
 */
function viewPortSize (size){
  if(size[0] === 375 && size[1] === 812 ){
    return `iphone-x [portrait]`
  }
  return `${size[0]} X ${size[1]}`
}

/**
 * A method to check the viewport sizes, if the size is an iphone-x, it will use the cypress.viewport('iphone-x')
 * rather than using the custom dimensions provided. For all other viewports, there are no cypress custom names provided
 * 
 * 
 * Example  describe(`Filter for black shoes [${checkSizes(viewport)}]`, () => {} 
 * where viewport = '[375, 812]'
 * 
 * will print 
 * 
 * Filter for black shoes [iphone-x]
 * 
 * @param {Array} size    The size of the vieports in Width X Height dimensions
 * @returns               The vieports od the sizes provided by the test
 */
const checkSizes = (size) => {
  return size[0] === 375 ? size=`iphone-x` : size 
}

/**
 * 
 * @param {Object} this 
 * @returns execution context of the test title
 */
const fetchTestTitle = (ctx) => {
  return ctx.test.title
}

function checkDevice(viewport){
  let device;
  if(viewport === '1200 X 700'){
    return device = 'Laptop'
  }
  else if (viewport == '768 X 700'){
    return device = 'Tablet'
  }
  else return device = 'Mobile'
}

function switchViewports(size){
  return Cypress._.isArray(size) ? cy.viewport(size[0], size[1]): cy.viewport(size);
}

export default {
shouldBeVisible,
shouldEqual,
shouldInvokeAttribute,
hackathonReporter,
viewPortSize,
checkSizes,
fetchTestTitle,
switchViewports
}