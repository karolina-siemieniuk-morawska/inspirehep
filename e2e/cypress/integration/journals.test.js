import { onlyOn } from '@cypress/skip-test';

describe('Journal Detail', () => {
  onlyOn('headless', () => {
    it('matches image snapshot', () => {
      cy.registerRoute();
      cy.visit('/journals/1213103');
      cy.waitForRoute();
      cy.matchSnapshots('JournalDetail');
    });
  });
});

describe('Journal Search', () => {
  onlyOn('headless', () => {
    it('matches image snapshot', () => {
      cy.registerRoute();
      cy.visit('/journals');
      cy.waitForRoute();
      cy.waitForSearchResults();
      cy.matchSnapshots('JournalsSearch');
    });
  });
});

describe('Journal Submission', () => {
  beforeEach(() => {
    cy.login('cataloger');
  });

  onlyOn('headless', () => {
    it('matches image snapshot', () => {
      cy.visit('/submissions/journals');
      cy.get('form').should('be.visible');
      cy.matchSnapshots('JournalSubmission', { skipMobile: true });
    });
  });

  it('submits a new journal', () => {
    const formData = {
      short_title: 'AJ',
      journal_title: { title: 'Amazing Journal' },
    };
    const expectedMetadata = {
      short_title: 'AJ',
      journal_title: { title: 'Amazing Journal' },
    };
    cy.visit('/submissions/journals');
    cy.testSubmission({
      expectedMetadata,
      formData,
      collection: 'journals',
    });
  });

  afterEach(() => {
    cy.logout();
  });
});
