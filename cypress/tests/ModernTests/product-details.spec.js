/// <reference types="@applitools/eyes-cypress" />

import { actions, elements, expects } from '../../pages/pageObjects';
import {
    checkEyesWindow,
    switchViewports,
} from '../../utils/utilityFunctions';
import {
    viewportDimensions,
    iphoneViewport,
    tabletViewports,
    desktopViewports
} from '../../utils/viewports';

const { tablet, mobile } = viewportDimensions;

context('Cross-Device Elements Test', () => {

    beforeEach(() => {
        actions.goToV1AppUrl();
    });

    describe('Task1: All Viewport Verification Tests', () => {
        beforeEach(() => {
            cy.eyesOpen({});
        })
        afterEach(() => {
            cy.eyesClose();
        });
        describe(`Viewport verification tests`, function () {

            it(`Task1: Main Header`, function () {
                checkEyesWindow(elements.mainHeader());
            });
            it(`Task1: Main Navigation`, function () {
                checkEyesWindow(elements.mainNavigation());
            });

            it(`Task1: Shoes Section`, function () {
                checkEyesWindow(elements.shoesDisplaySection());
            });
            it(`Task1: check foooter items`, function () {
                checkEyesWindow(elements.mainFooter());
            });


        });

        // describe.skip('color changing elements on hover on viewport', () => {
        //  it('shoul show elements that change color on hover', () => {
        //   cy.get(elements.wishListIconNavbar()).invoke('show').trigger('mouseenter')
        //   .should('have.css', 'color', '#004dda')
        //  })
        // });


    });

    describe('Task 1: Desktop Viewport Tests', () => {
        beforeEach(() => {
            cy.eyesOpen({
                browser: [
                    ...desktopViewports
                ],
            });
        })
        afterEach(() => {
            cy.eyesClose();
        });
        it('Task 1: Shoes Filter Section', () => {
            checkEyesWindow(elements.shoesFilterSection());
        });

    });

    describe('Task 1: Tablet Viewport Tests', () => {
        beforeEach(() => {
            cy.viewport(768, 700);
            cy.eyesOpen({
                browser: [
                    ...tabletViewports
                ],
            });
        })
        afterEach(() => {
            cy.eyesClose();
        });
        it('Task 1: Shoes Filter Section', () => {
            actions.openFilterNavigationSideBar();
            checkEyesWindow(elements.shoesFilterSection());
        });
    });

    describe('Task 1 Mobile Viewport Tests', () => {
        beforeEach(() => {
            cy.eyesOpen({
                browser: [
                    ...iphoneViewport
                ],
            });
            cy.viewport('iphone-x');
        })
        afterEach(() => {
            cy.eyesClose();
        });
        it('Task 1: Shoes Filter Section', () => {
            actions.openFilterNavigationSideBar();
            checkEyesWindow(elements.shoesFilterSection());
        });

    });



});