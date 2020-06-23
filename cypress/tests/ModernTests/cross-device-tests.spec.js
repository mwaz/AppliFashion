/// <reference types="@applitools/eyes-cypress" />

import * as config from '../../../applitools.config';
import { actions, elements } from '../../pages/pageObjects';
import {
    checkEyesWindow,
} from '../../utils/utilityFunctions';

context('Cross-Device Elements Tests', () => {

    beforeEach(() => {
        actions.goToV1AppUrl();
    });

    describe('Task 1: All Viewports Section Verification Tests', () => {
        beforeEach(() => {
            cy.viewport(800, 600);
            cy.eyesOpen();
        });

        afterEach(() => {
            cy.eyesClose();
        });
        it(`Task 1: shows main header`, function () {
            checkEyesWindow(elements.mainHeader());
        });
        it(`Task 1: shows navigation bar`, function () {
            checkEyesWindow(elements.mainNavigation());
        });

        it(`Task 1: shows shoes section`, function () {
            checkEyesWindow(elements.shoesDisplaySection());
        });

        it(`Task 1: shows foooter items`, function () {
            checkEyesWindow(elements.mainFooter());
        });

        it('Task 1: shows shoes filter section', () => {
            actions.openFilterNavigationSideBar();
            checkEyesWindow(elements.shoesFilterSection());
        });

    });

    describe('Task 1: Mobile Viewport Test', () => {
        beforeEach(() => {
            cy.viewport('iphone-x');
            cy.eyesOpen({
                // use iphone-x browser
                browser: [config.browser[6]], 
            });
        });

        afterEach(() => {
            cy.eyesClose();
        });

        it('Task 1: shows footer dropdown content', () => {
            actions.clickQuickLinksDropdown();
            actions.clickContactsDropdown();
            actions.clickKeepInTouchDropdown();
            checkEyesWindow(elements.mainFooter());
        });
    });
});
