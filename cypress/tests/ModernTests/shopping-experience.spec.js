/// <reference types="@applitools/eyes-cypress" />

import { actions, elements, expects } from '../../pages/pageObjects';
import {
    checkEyesWindow,
} from '../../utils/utilityFunctions';
import {
    iphoneViewport,
    tabletViewports,
    desktopViewports,
} from '../../utils/viewports';


context('Filter Results', () => {

    beforeEach(() => {
        actions.goToV1AppUrl();
    });

    describe('Task2: Desktop Viewport Tests', () => {
        beforeEach(() => {
            cy.eyesOpen({
                browser: [ ...desktopViewports ]
            });
        });

        afterEach(() => {
            cy.eyesClose();
        });

        it(`can filter all black shoes based on color`, function () {
            expects.colorFilterIsVisible();
            actions.clickBlackColorFilter();
            actions.clickFilterButton();
            checkEyesWindow(elements.gridItems());
        });
        it(`can filter the first black shoe based on the price`, function () {
            expects.priceFilterIsVisible();
            actions.clickZeroToFiftyPriceFilter();
            actions.clickFilterButton();
            checkEyesWindow(elements.gridItems());
        });

    });

    describe('Task2: Tablet Viewport Tests', () => {
        beforeEach(() => {
            cy.viewport(768, 700);
            cy.eyesOpen({
                browser: [...tabletViewports]
            });
        });

        afterEach(() => {
            cy.eyesClose();
        });

        it(`can filter all black shoes based on color`, function () {
            actions.openFilterNavigationSideBar();
            expects.colorFilterIsVisible();
            actions.clickBlackColorFilter();
            actions.clickFilterButton();
            checkEyesWindow(elements.gridItems());
        });
        it(`can filter the first black shoe based on the price`, function () {
            actions.openFilterNavigationSideBar();
            expects.priceFilterIsVisible();
            actions.clickZeroToFiftyPriceFilter();
            actions.clickFilterButton();
            checkEyesWindow(elements.gridItems());
        });

    });

    describe('Task2: Mobile Viewport Tests', () => {
        beforeEach(() => {
            cy.viewport('iphone-x');
            cy.eyesOpen({
                browser: [...iphoneViewport]
            });
        });

        afterEach(() => {
            cy.eyesClose();
        });

        it(`can filter all black shoes based on color`, function () {
            actions.openFilterNavigationSideBar();
            expects.colorFilterIsVisible();
            actions.clickBlackColorFilter();
            actions.clickFilterButton();
            checkEyesWindow(elements.gridItems());
        });
        it(`can filter the first black shoe based on the price`, function () {
            actions.openFilterNavigationSideBar();
            expects.priceFilterIsVisible();
            actions.clickZeroToFiftyPriceFilter();
            actions.clickFilterButton();
            checkEyesWindow(elements.gridItems());
        });

    });

});