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
    cy.visit('/products/mystery-pack');
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

describe('1. Bralettes', () => {

  it(`Adds 1 item to cart`, () => {
    cy.get('#AddToCart').click();
  }); 
   it(`Adds 2 item to cart`, () => {
    cy.get('#AddToCart').click();
  }); 
  

  const cartItem = 'form.cart.ajaxcart .drawerProduct.ajaxCartRow';
  const itemTitle = ' .onetimeTitle.prod_line';
  const price = '.drawerActionsFooter .drawerProductPrice .bfx-product-subtotal.bfx-price';
  const listItem = '.cartItemsListingWrapper .ajaxCartProduct.bfx-product > .drawerProduct.ajaxCartRow';
  const prop = 'data-prop';
  const dataVid = 'data-vid';


  it(`Has item in cart with price $36`, () => {
    cy.wait(3000);
    cy.get(price).then(list => {
      const newText = Cypress.$(list[0]).text()

      expect(newText).to.equal('$36');
    })
  });
});








