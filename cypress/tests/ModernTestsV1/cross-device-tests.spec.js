/// <reference types="@applitools/eyes-cypress" />

import { actions } from '../../pagesV1/pageObjects';

context('Cross-Device Elements Tests', () => {

    beforeEach(() => {
        actions.goToV1AppUrl();
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
