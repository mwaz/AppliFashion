
const filepath = 'cypress/TestResultsTxtFiles/Traditional-V1-TestResults.txt';

// Get the browser, viewport and device info from a variable like below or from a file or environment variable.
const browser = Cypress.env('browser');
// const viewport = `${Cypress.config("viewportHeight")} x ${Cypress.config("viewportWidth")}`;
const device = "Laptop";


/**
 * A Helper to print the test result in the following format:
 * Task: <Task Number>, Test Name: <Test Name>, DOM Id:: <id>, Browser: <Browser>, Viewport: <Width x Height>, Device<Device type>, Status: <Pass | Fail>
 * 
 * Example: Task: 1, Test Name: Search field is displayed, DOM Id: DIV__customsear__41, Browser: Chrome, Viewport: 1200 x 700, Device: Laptop, Status: Pass
 * 
 * @param task                    int - 1, 2 or 3
 * @param testName.               string - Something meaningful. E.g. 1.1 Search field is displayed
 * @param domId                   string - DOM ID of the element
 * @param comparisonResult        boolean - The result of comparing the "Expected" value and the "Actual" value.
 * @param viewport                string - dimensions of the device under test
 * @return                        boolean - returns the same comparison result back so that it can be used for further Assertions in the test code.
 */

function hackathonReporter (task, testName, domId, comparisonResult, viewport="660X1000"){
    try{
        cy.writeFile(`${filepath}`, `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`, {flag: "a+"});
    }
    catch {
       (e) => console.log(e, 'Data was not appended');
    }
    return comparisonResult;
}




//Note if you are using "Expect" or "should" instead of Assert,
//create a couple of wrappers for "expect" or "should" methods 
//Instead of should('be.visible'),
function shouldBeVisible (task, testName, domId, viewport) {
   var displayed = true;
   try { 
        cy.get(domId).should('be.visible');
   } catch(e) {
     displayed = false;
   }
   return hackathonReporter(task, testName, domId, displayed, viewport);
}

function shouldEqual (task, testName, domId, viewport, elementLength) {
  var displayed = true;
  try { 
       cy.get(domId).should($element => {
        expect($element).to.have.length(elementLength)
       } );
  } catch(e) {
    displayed = false;
  }
  return hackathonReporter(task, testName, domId, displayed, viewport);
}

/**
 * 
 * @param {*} task      int - Contains the task number passed onto the hackathon reporter method
 * @param {*} testName  string - meaningful test name
 * @param {*} domId     string - id of element under test e.g #somerandom_id
 * @param {*} viewport  string - the dimensions of device under test e.g 1200 X 700
 * @param {*} attrName  string - the attributes of the element to be validated e.g placeholder
 * @param {*} attrValue string -  expected value of the attribute 
 */
function shouldInvokeAttribute (task, testName, domId, viewport, attrName, attrValue) {
  var displayed = true;
  try { 
       cy.get(domId).invoke('attr', `${attrName}`).should('contain', `${attrValue}`);
  } catch(e) {
    displayed = false;
  }
  return hackathonReporter(task, testName, domId, displayed, viewport);
  
}


//Call the "should" or "Expect" type assertions like below
// describe('Task 1 - Header location', function() {
//     it('Search field should be displayed', async () => {
//         shouldBeVisible(1, "Search field is displayed", 'DIV__customsear__41');
//     });

//     it('Search Icon should be displayed', async () => {
//         shouldBeVisible(1, "Search Icon is displayed", 'DIV__customsear__42');
//       });
// });

function viewPortSize (size){
  if(size[0] === 375 && size[1] === 812 ){
    return `iphone-x [portrait]`
  }
  return `${size[0]} X ${size[1]}`
}

function checkSizes(size){
  return size[0] === 375 ? size=`iphone-x` : size 
}

export default {
shouldBeVisible,
shouldEqual,
shouldInvokeAttribute,
hackathonReporter,
viewPortSize,
checkSizes
}