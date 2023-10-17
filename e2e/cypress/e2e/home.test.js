import { skipOn } from '@cypress/skip-test';

describe('Home Page', () => {
  it('matches image snapshot', () => {
    cy.registerRoute();
    cy.visit('/');
    cy.waitForRoute();
    cy.waitForLoading(80000);
    cy.matchSnapshots('Homepage');
  });

  skipOn('electron', () => {
    it('scrolls to How to Search section on button click', () => {
      cy.on('uncaught:exception', () => {
        return false;
      });
      cy.registerRoute();
      cy.visit('/');
      cy.waitForRoute();

      cy.get('[data-test-id="scroll-button"]').click();
      cy.get('[data-test-id="how-to-search"]').should('be.visible');
    });
  });
});

describe('News and Updates', () => {
  skipOn('electron', () => {
    it('renders 3 latest blog posts', () => {
      cy.on('uncaught:exception', () => {
        return false;
      });
      cy.registerRoute();
      cy.visit('/');
      cy.waitForRoute();
      cy.waitForLoading(80000);

      cy.get('[data-test-id="news-post"]').as('newsAndUpdates');
      cy.get('@newsAndUpdates').should('have.length', 3);
    });
  });
});
