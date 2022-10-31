const getIframeDocument = () => {
  return cy
  .get('iframe#attentive_creative')
  .its('0.contentDocument').should('exist');
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);
}
describe('Exit iframe', () => {

  const $el = '#btnMenuMobile';

  it('exit from iframe if any',() => {
    cy.visit('/');
      // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
    cy.get($el).click();
    cy.wait(1000);
  });
});


describe('1. Sign in', () => {

  const $el = '#link-siginusr22';

  it('Should exist', () => {

    cy.get($el)
      .should('be.visible')
  });
  
  it('href should be -> account/login', () => {

    cy.get($el)
      .should('have.attr', 'href', '/account/login');

  });  

  it('On click it should go to -> account/login', () => {

    cy.get($el).click();
    cy.url().should('include', '/account/login');

  });
});

