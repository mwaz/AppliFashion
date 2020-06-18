import { actions, elements, expects } from '../../pages/pageObjects';

describe("Modern Approach Tests", () => {

    beforeEach( () => {
        actions.goToV1AppUrl();
    })
    it(`Task 1`, function () {
        cy.eyesOpen({
            testName: 'Task 1',
        })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "Login Window",
            target: 'window',
            fully: true
        });

        cy.get('#log-in').click();

        // Check the app page
        cy.eyesCheckWindow({
            tag: "App Window",
            target: 'window',
            fully: true
        });

        cy.eyesClose()
    });

});