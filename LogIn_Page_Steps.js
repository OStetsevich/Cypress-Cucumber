/// <reference types="cypress" />
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

const url = "https://test-packagehub.azureedge.net/";
const email = "stetsevicholga@gmail.com";
const password = "xxxxxxxxx!"

Given(`Go to PackageHub Log In Page`, () => {
    cy.visit(url);
})

When(`Click on LogIn button`, () => {
    cy.get('#navbarSupportedContent').contains('Log In').click();
})

When (`Enter invalid  Email {string} address or Password {string} into the proper field`, (_email, _password) => {
    cy.get('input[name="email"]').type(_email);
    cy.get('input[name="password"]').type(_password);
})

When (`Enter  Email address into the Email field`, () => {
    cy.get('input[name="email"]').type(email);
})

When (`Enter Password into the Password field`, () => {
    cy.get('input[name="password"]').type(password);
})

When (`Click on Sign In button`, () => {
    cy.get('button[type="submit"]'). click();
})

Then('User is successfuly loged into the system',  () => {
    cy.get(`a[class="nav-link text-uppercase"]`).should('contain', 'Home')
  });

Then(`User is not loged into the system - error {string} is shown`, (message) => {
    cy.get(`div[class="error"]`).should('contain', message)
})

