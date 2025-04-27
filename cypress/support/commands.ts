/// <reference types="cypress" />

import { any } from "cypress/types/bluebird"
import 'cypress-file-upload'
import { global } from "yargs"
import chalk from 'chalk';
import { StringMappingType } from "typescript";
import cypressConfig from "../../cypress.config";
import 'cypress-file-upload';


declare global {
  interface Window {
    [key: string]: any;
  }
}

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

declare global {
  namespace Cypress {
    interface Chainable {

      test(): Chainable<void>
      
    }
  }
}

Cypress.Commands.add('test', () => {
  
})

