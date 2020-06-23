/// <reference types="@applitools/eyes-cypress" />

import { actions, expects } from '../../pages/pageObjects';


context('Product Details test', () => {

    beforeEach(() => {
        cy.viewport(800, 600);
        actions.goToV1AppUrl();
        cy.eyesOpen();
    });

    afterEach(() => {
        cy.eyesClose();
    });

    it(`Task 3: can click the first shoe image and validate details`, function () {
        actions.clickFirstBlackShoe();
        expects.validateProductImageUrl({ productId: 1 });
        cy.eyesCheckWindow('First Shoe Product Page')
    });
});