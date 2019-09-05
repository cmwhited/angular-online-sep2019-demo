import { getGreeting } from '../support/app.po';

describe('angular-online-sep2019-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angular-online-sep2019-demo!');
  });
});
