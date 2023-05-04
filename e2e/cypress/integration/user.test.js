import { onlyOn } from '@cypress/skip-test';

describe('user', () => {
  it('logs in via local login form and then logs out', () => {
    const username = `cataloger@inspirehep.net`;
    const password = '123456';
    cy.visit('/user/login/local');

    cy.registerRoute({
      url: '/api/accounts/login',
      method: 'POST',
    });

    cy.get('[data-test-id=email]')
      .type(username)
      .get('[data-test-id=password]')
      .type(password)
      .get('[data-test-id=login]')
      .click();

    cy.waitForRoute('/api/accounts/login').its('status').should('equal', 200);

    cy.registerRoute('/api/accounts/logout');

    cy.get('.ant-menu-title-content').contains('Account').trigger('mouseover')
    cy.get('[data-test-id="logout"]').children().first().click();

    cy.waitForRoute('/api/accounts/logout').its('status').should('equal', 200);
  });

  onlyOn('headless', () => {
    it('user session timeout', () => {
      const username = `cataloger@inspirehep.net`;
      const password = '123456';
      cy.clock();
      cy.visit('/user/login/local');

      cy.registerRoute({
        url: '/api/accounts/login',
        method: 'POST',
      });

      cy.get('[data-test-id=email]')
        .type(username)
        .get('[data-test-id=password]')
        .type(password)
        .get('[data-test-id=login]')
        .click();

      cy.waitForRoute('/api/accounts/login').its('status').should('equal', 200);

      cy.clearCookies();
      cy.request({
        url: '/api/accounts/me',
        failOnStatusCode: false,
      })
        .its('status')
        .should('equal', 401);

      cy.window().trigger('mouseover', 'topRight');
      cy.tick(1800000);
      cy.clock().invoke('restore');
      cy.wait(500);
      cy.matchSnapshots('SessionTimeout');
    });
  });

  it.only('signs up to the application', () => {
    const email = `cataloger@inspirehep.net`;

    cy.visit('/user/signup');
    cy.intercept('POST', '/api/accounts/signup', {
      statusCode: 200,
      body: {
        allow_orcid_push: false,
        email,
        orcid: "0009-0005-9645-6700",
        profile_control_number: null,
        roles: []
      },
    }).as('getSignUpSuccess');

    cy.get('[data-test-id=email]')
      .type(email)
      .get('[data-testid="submit"]')
      .click();

    cy.wait('@getSignUpSuccess').then(() => {
      cy.request('GET', '/api/accounts/me');
      cy.waitForRoute('/api/accounts/me').its('status').should('equal', 200);
    });
  });

  it('shows error when sign up to the application was unsuccessfull', () => {
    const email = `cataloger@inspirehep.net`;

    cy.visit('/user/signup');

    cy.get('[data-test-id=email]')
      .type(email)
      .get('[data-testid="submit"]')
      .click();

    cy.get('.ant-alert-error').should(
      'have.text',
      'Something went wrong during sign up. Try again later.'
    );
  });
});
