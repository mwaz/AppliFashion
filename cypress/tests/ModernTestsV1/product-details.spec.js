/// <reference types="@applitools/eyes-cypress" />

import { actions, expects } from '../../pagesV1/pageObjects';


context('Product Details test', () => {

    beforeEach(() => {
        cy.viewport(800, 600);
        actions.goToV1AppUrl();
        cy.eyesOpen();
    });

    afterEach(() => {
        cy.eyesClose();
    });

    it(`Task 3`, function () {
        actions.clickFirstBlackShoe();
        expects.validateProductImageUrl({ productId: 1 });
        cy.eyesCheckWindow('First Shoe Product Page')
    });
});