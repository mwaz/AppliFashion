/// <reference types="cypress" />
import {
  viewPortSize,
  checkSizes,
  switchViewports,
  fetchTestTitle,
  shouldBeVisible,
  checkDevice
} from '../../utils/utilityFunctions';
import { actions, elements, expects } from '../../pagesV2/pageObjects';

const viewports = {
  laptop: [1200, 700],
  tablet: [768, 700],
  mobile: [375, 812],
}; 
const { laptop, tablet, mobile } = viewports;
const testTask = 3;

context('Product Details', () => {
  beforeEach(() => {
      actions.goToV2AppUrl();
  });

  afterEach(function(){
    if (this.currentTest.state === 'failed') {
      const viewport = `${this.currentTest.commands[2].viewportWidth} X ${this.currentTest.commands[2].viewportHeight}`
        cy.writeFile(`Traditional-V2-TestResults.txt`, `"Task: ${testTask}, Test Name: ${this.currentTest.title}, DOM Id: ${this.currentTest.commands[2].message}, Browser: ${Cypress.env('browser')}, Viewport: ${viewport}, Device: ${checkDevice(viewport)}, Status: ${this.currentTest.state}\n`, { flag: "a+" })
      }
    })

  describe('All Viewport tests', () => {
      const viewports = [tablet, mobile, laptop];
      viewports.forEach((size) => {
          
          describe(`Naviagate to product page [${checkSizes(size)}]`, () => {
              it(`can click the first shoe image and verify product and url details`, function(){
                switchViewports(size)
                  actions.clickFirstBlackShoe();
                  expects.validateProductImageElements();
                  expects.validateCssProperies(elements.productPageShoeOldPrice(), 'text-decoration', 'line-through solid rgb(153, 153, 153)');
                  expects.validateProductImageUrl({productId : 1});
                  shouldBeVisible(fetchTestTitle(this), elements.productPageShoeImage(), viewPortSize(size), testTask);
              });
              it(`can verify all shoe dropdown sizes text`, function(){
                switchViewports(size)
                actions.clickFirstBlackShoe();
                actions.clickCurrentShoeSelection();  
                expects.validateAllShoeSizes();
                shouldBeVisible(fetchTestTitle(this), elements.shoeSizeDropdownElements(1), viewPortSize(size), testTask);
              });
              it(`can verify product page rating text is Properly displayed`, function(){
                switchViewports(size)
                actions.clickFirstBlackShoe();
                expects.validateRatingCountTextDisplay();
                shouldBeVisible(fetchTestTitle(this), elements.ratingCountText(), viewPortSize(size), testTask);
              });
          })
      });
  });
})