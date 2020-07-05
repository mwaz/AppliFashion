/// <reference types="@applitools/eyes-cypress" />

import { actions } from '../../pagesV2/pageObjects';

context('Cross-Device Elements Tests', () => {

    beforeEach(() => {
        actions.goToV2AppUrl();
    });

    beforeEach(() => {
        cy.viewport(800, 600);
        cy.eyesOpen();
    });

    afterEach(() => {
        cy.eyesClose();
    });
    it(`Task 1`, function () {
        cy.eyesCheckWindow('Main Page Sections')
    });
});
