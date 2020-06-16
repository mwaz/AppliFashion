/// <reference types="cypress" />
import {
    shouldEqual,
    viewPortSize,
    checkSizes,
    switchViewports,
    fetchTestTitle
  } from '../../utils/utilityFunctions';
  import { actions, elements, expects } from '../../pages/pageObjects';
  
  const viewports = {
    laptop: [1200, 700],
    tablet: [768, 700],
    mobile: [375, 812],
  }; 
  const { laptop, tablet, mobile } = viewports;
  const testTask = 2;
  
  context('Product Experience', () => {
    beforeEach(() => {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html')
    });
    afterEach(() => {
        actions.resetFilter();
    });
  
    describe('Desktop Tests', () => {
  
        beforeEach(() => {
            cy.viewport(laptop[0], laptop[1])
        });
        describe('Filter for black shoes on viewport (1200 X 700)', () => {
            it('can filter all black shoes based on color', function(){
                expects.colorFilterIsVisible();
                actions.clickBlackColorFilter();
                actions.clickFilterButton();
                shouldEqual(fetchTestTitle(this), elements.gridItems(), viewPortSize(laptop), 2, testTask);
            });
            it('can filter the first black shoe based on the price', function(){
                expects.colorFilterIsVisible();
                actions.clickZeroToFiftyPriceFilter();
                actions.clickFilterButton();
                shouldEqual(fetchTestTitle(this), elements.gridItems(), viewPortSize(laptop), 1, testTask);
  
            });
        });
    });
    describe('Tablet and Iphone-X (768 X 700, 375 X 812)', () => {
        const viewports = [tablet, mobile];
        viewports.forEach((size) => {
            afterEach(() => {
                actions.resetFilter();
            })
            describe(`Filter for black shoes [${checkSizes(size)}]`, () => {
                it(`can filter all black shoes based on color`, function(){
                  switchViewports(size)
                    actions.openFilterNavigationSideBar();
                    expects.colorFilterIsVisible();
                    actions.clickBlackColorFilter();
                    actions.clickFilterButton();
                    shouldEqual(fetchTestTitle(this), elements.gridItems(), viewPortSize(size), 2, testTask);
                });
                it(`can filter the first black shoe based on the price`, function(){
                  switchViewports(size)
                    actions.openFilterNavigationSideBar();
                    expects.priceFilterIsVisible();
                    actions.clickZeroToFiftyPriceFilter();
                    actions.clickFilterButton();
                    shouldEqual(fetchTestTitle(this), elements.gridItems(), viewPortSize(size), 1, testTask);
  
                });
            })
        });
    });
  });