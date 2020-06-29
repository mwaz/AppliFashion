/// <reference types="@applitools/eyes-cypress" />

import { actions, elements, expects } from '../../pages/pageObjects';
import {
    checkEyesWindow,
} from '../../utils/utilityFunctions';

context('Filter Results', () => {

    beforeEach(() => {
        cy.viewport(800, 600);
        actions.goToV2AppUrl();
        cy.eyesOpen();
    });

    afterEach(() => {
        cy.eyesClose();
    });

    it(`Task 2: can filter all black shoes based on color`, function () {
        actions.openFilterNavigationSideBar();
        expects.colorFilterIsVisible();
        actions.clickBlackColorFilter();
        actions.clickFilterButton();
        checkEyesWindow(elements.productGrid());
    });
});