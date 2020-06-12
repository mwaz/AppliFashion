/// <reference types="cypress" />
import {
    shouldBeVisible,
    shouldEqual,
    shouldInvokeAttribute,
    viewPortSize,
    checkSizes,
} from '../../utils/utilityFunctions';
import { actions, elements, expects } from '../../pages/pageObjects';

context('Filter Results', () => {
    beforeEach(() => {
        cy.visit('https://demo.applitools.com/gridHackathonV1.html')
    });
    afterEach(() => {
        actions.resetFilter();
    });

    describe('Desktop Tests', () => {
        const desktopViewport = [1200, 700];

        beforeEach(() => {
            cy.viewport(desktopViewport[0], desktopViewport[1])
        });
        describe('Filter for black shoes (1200 X 700)', () => {
            const testName = "sampleTestname"
            it('can filter all black shoes based on color', function(){
                expects.colorFilterIsVisible();
                actions.clickBlackColorFilter();
                actions.clickFilterButton();
                shouldEqual(1, this.test.title, elements.gridItems(), viewPortSize(desktopViewport), 2);
            });
            it('can filter the first black shoe based on the price', () => {
                expects.colorFilterIsVisible();
                actions.clickZeroToFiftyPriceFilter();
                actions.clickFilterButton();
                shouldEqual(2, "shows single filtered black shoes based on price", elements.gridItems(), viewPortSize(desktopViewport), 1);

            });
        });
    });
    describe('Tablet and Iphone-X (763 X 700, 375 X 812)', () => {
        const viewports = [[763, 700], [375, 812]];
        viewports.forEach((size) => {
            beforeEach(() => {
                if (Cypress._.isArray(size)) {
                    cy.viewport(size[0], size[1])

                } else {
                    cy.viewport(size)
                }
            });
            afterEach(() => {
                actions.resetFilter();
            })
            describe(`Filter for black shoes [${checkSizes(size)}]`, () => {
                it(`can filter all black shoes based on color [${checkSizes(size)}]`, () => {
                    actions.openFilterNavigationSideBar();
                    expects.colorFilterIsVisible();
                    actions.clickBlackColorFilter();
                    actions.clickFilterButton();
                    shouldEqual(3, "shows  two filtered black shoes based on color", elements.gridItems(), viewPortSize(size), 2);
                });
                it(`can filter the first black shoe based on the price [${checkSizes(size)}]`, () => {
                    actions.openFilterNavigationSideBar();
                    expects.priceFilterIsVisible();
                    actions.clickZeroToFiftyPriceFilter();
                    actions.clickFilterButton();
                    shouldEqual(4, "shows single filtered black shoes based on price", elements.gridItems(), viewPortSize(size), 1);

                });
            })
        });
    });
});