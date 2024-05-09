/// <reference types="cypress" />
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";


const url = "https://test-packagehub.azureedge.net/";
const email = "stetsevicholga@gmail.com";
const password = "Nfhfcbr1!"


Given(`Log In`, () => {
   cy.visit(url);
   cy.get('#navbarSupportedContent').contains('Log In').click();
   cy.get('input[name="email"]').type(email);
   cy.get('input[name="password"]').type(password);
   cy.get('button[type="submit"]'). click();
   //cy.wait('6000')
})


Given(`Navigate to Global Admin Module and select Release Notes from the list`, () => {
    cy.contains('Global Admin').trigger('mousover');
    cy.contains ('Release Management').click({force: true});
})

When(`Click on Create New Release Note button`, () => {
    cy.contains('Create New Release').click();
}) 

When(`Enter Name into Release Name field`, () => {
    cy.get('input[name="title"]').click().type('Release 1');
})

When(`Enter Description itno Description field`, () => {
    cy.get('textarea[name="description"]').click().type('Description 1');
})

When(`Click on Create Release button`, () => {
    cy.get('button[type="submit"]').click();
})

When(`Click on id of any Release Note from the list`, () => {
    cy.get('div[role="row"]').eq(0);
    cy.get('div[role="cell"]').eq(0).click();
})

When(`Update Name`, () => {
    cy.get('input[name="title"]').click().clear().type('Release 2');
})

When(`Update Description`, () => {
    cy.get('textarea[name="description"]').click().clear().type('Description 2');
})

When(`Click on Update Release button`, () => {
    cy.get('button[type="submit"]').contains('Update Release').click();
})

When(`Click on Actions icon of any Release Note from the list`, () => {
    cy.get('[data-column-id="5"]').find('button[type="button"]').eq(0).click({force: true});
})

When(`Click on Archive option`, () => {
    cy.get('menu>li').eq(2).click({force: true});
})

Then(`New Release Note is created`, () => {
    cy.get('[data-column-id="3"]').invoke('text').as('innerText').should('contain','Release 1');

})

Then(`Release Note is updated`, () => {
    cy.get('div[role="row"]').eq(1).invoke('text').as('innerText').should('contain','Description 2');
})

Then(`Release Note is deleted`, () => {
    cy.get('[data-column-id="3"]').invoke('text').as('innerText').should('not.contain','Release 1');
})