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
  it('exit from iframe if any',() => {
    cy.visit('/');
      // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});


describe('1. Burger icon', () => {

  const $el = '#btnMenuMobile';
  const $close = '.btnMenuMobile.burger-close';
  
  it('icon should be visible', () => {

    cy.get($el)
      .should('be.visible');
  });

  it('icon should open and close ', () => {

    cy.get($el).click();
    cy.wait(1000);
    cy.get($close).click();
    cy.wait(500);
  });
});

describe('2. Logo icon ', () => {

  const $el = '.nav-logo-mobile';
  
  it('icon should be visible', () => {

    cy.get($el)
      .should('be.visible');
  });

  it('Logo path should be  -> / ', () => {

    cy.get($el).click();
    cy.url().should('include', '/');
  });
});

describe('3. Right icons: cart', () => {

  const $el = '#hcw a.cart-link.jsDrawerOpenRight.d-flex.ebyMinicart.eby-light-theme-22 ';
  const $close = '#cartDrawer span.jsDrawerClose';
  it('icon should be visible', () => {

    cy.get($el)
      .should('be.visible');
  });

  it('Cart icon should open/close', () => {

    cy.get($el).click();
    cy.wait(1000);
    cy.get($close).click();
    cy.wait(500);

  });
});
