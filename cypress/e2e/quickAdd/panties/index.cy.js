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
const URL = '/collections/seamless-panties-packs?preview_theme_id=126410522668'
describe('Exit iframe', () => {
  it('exit from iframe if any',() => {
    cy.visit(URL);
    cy.wait(5000);
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
      cy.scrollTo(0, 300);
  });
});

describe('1. Panties', () => {

 it('hovers on 1st item',{ scrollBehavior: false },() => {
    cy.get('.productQuickAdd').then(list => {
      cy.wrap(list[0]).trigger('mouseover')
    });
  });
  it('clicks on lg and send to cart',{ scrollBehavior: false },() => {
    cy.get('.swatch-element.lg[data-value="lg"]').click()
  });

  it('hovers on 2nd item',{ scrollBehavior: false },() => {
    cy.get('.productQuickAdd').then(list => {
      cy.wrap(list[1]).trigger('mouseover')
    });
  });
  it('clicks on md and send to cart',{ scrollBehavior: false },() => {
    cy.get('.swatch-element.md[data-value="md"]').click()
  });





  it('hovers on 4nd item',() => {
    cy.scrollTo(0, 1200);
    cy.wait(2000);
    cy.get('.productQuickAdd').then(list => {
      cy.wrap(list[3]).trigger('mouseover')
    });
  });
  it('clicks on md and send to cart',{ scrollBehavior: false },() => {
    cy.get('.swatch-element.md[data-value="md"]').click()
  });
  it('hovers on 5nd item',{ scrollBehavior: false },() => {
    cy.get('.productQuickAdd').then(list => {
      cy.wrap(list[4]).trigger('mouseover')
    });
  });
  it('clicks on md and send to cart',{ scrollBehavior: false },() => {
    cy.get('.swatch-element.md[data-value="md"]').click()
  });




  it('hovers on Mystery Pack',() => {
    cy.scrollTo(0, 1800);
    cy.get('.productQuickAdd').then(list => {
      
      cy.wrap(list[6]).trigger('mouseover')
    });
  });
  it('clicks on md and send to cart',{ scrollBehavior: false },() => {
    cy.get('.swatch-element.md[data-value="md"]').click()
  });
  it('hovers on Everyday Seamless 3 Panties Pack',{ scrollBehavior: false },() => {
    cy.get('.productQuickAdd').then(list => {
      cy.wrap(list[7]).trigger('mouseover')
    });
  });
  it('clicks on md and send to cart',{ scrollBehavior: false },() => {
    cy.get('.swatch-element.md[data-value="md"]').click()
  });



   it('hovers on Spanish Rivera',() => {
     cy.scrollTo(0, 2600);
    cy.get('.productQuickAdd').then(list => {
      cy.wrap(list[8]).trigger('mouseover')
    });
  });
  it('clicks on md and send to cart',{ scrollBehavior: false },() => {
    cy.get('.swatch-element.md[data-value="md"]').click()
  });
  it('hovers on Desert Thong Pack',{ scrollBehavior: false },() => {
    cy.get('.productQuickAdd').then(list => {
      cy.wrap(list[9]).trigger('mouseover')
    });
  });
  it('clicks on md and send to cart',{ scrollBehavior: false },() => {
    cy.get('.swatch-element.md[data-value="md"]').click()
  });

});








