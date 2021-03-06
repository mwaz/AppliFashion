/// <reference types="cypress" />
import {
  viewPortSize,
  checkSizes,
  switchViewports,
  fetchTestTitle,
  shouldBeVisible
} from '../../utils/utilityFunctions';
import { actions, elements, expects } from '../../pagesV1/pageObjects';

const viewports = {
  laptop: [1200, 700],
  tablet: [768, 700],
  mobile: [375, 812],
};
const { laptop, tablet, mobile } = viewports;
const testTask = 3;

context('Product Details', () => {
  beforeEach(() => {
    actions.goToV1AppUrl();
  });
  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      const viewport = `${this.currentTest.commands[2].viewportWidth} X ${this.currentTest.commands[2].viewportHeight}`
      cy.writeFile(`Traditional-V2-TestResults.txt`, `"Task: 1, Test Name: ${this.currentTest.title}, DOM Id: ${this.currentTest.commands[2].message}, Browser: ${Cypress.env('browser')}, Viewport: ${viewport}, Device: ${checkDevice(viewport)}, Status: ${this.currentTest.state}\n`, { flag: "a+" })
    }
  })

  describe('All Viewport tests', () => {
    const viewports = [tablet, mobile, laptop];
    viewports.forEach((size) => {

      describe(`Naviagate to product page [${checkSizes(size)}]`, () => {
        it(`can click the first shoe image and validate details`, function () {
          switchViewports(size)
          actions.clickFirstBlackShoe();
          expects.validateProductImageElements()
          expects.validateCssProperies(elements.productPageShoeOldPrice(), 'text-decoration', 'line-through solid rgb(153, 153, 153)');
          expects.validateProductImageUrl({ productId: 1 });
          shouldBeVisible(fetchTestTitle(this), elements.productPageShoeImage(), viewPortSize(size), testTask);
        });
      })
    });
  });
});