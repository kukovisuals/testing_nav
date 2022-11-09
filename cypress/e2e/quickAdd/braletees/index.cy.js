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
const URL = '/collections/seamless-bra-packs?preview_theme_id=126410522668'
describe('Exit iframe', () => {
  it('exit from iframe if any',() => {
    cy.visit(URL);
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
      cy.scrollTo(0, 300);
  });
});

describe('1. Bralettes', () => {

 it('hovers on 1st item', { scrollBehavior: false },() => {
    cy.get('.productQuickAdd').then(list => {
      cy.wrap(list[0]).trigger('mouseover')
      cy.wait(3000);
    });
  });
 it('clicks on lg and send to cart',{ scrollBehavior: false },() => {
    cy.get('.proVariantsQuickview .swatch-element.lg[data-value="lg"]').click()
  });

  it('hovers on 2nd item',{ scrollBehavior: false },() => {
    cy.get('.productQuickAdd').then(list => {
      cy.wrap(list[1]).trigger('mouseover')
      cy.wait(3000);
    });
  });
 it('clicks on md and send to cart',{ scrollBehavior: false },() => {
    cy.get('.swatch-element.md[data-value="md"]').click()
  });
});








