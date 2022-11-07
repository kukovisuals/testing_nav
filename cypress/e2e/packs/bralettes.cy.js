// getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();

const $el = '.mobile-nav-desktop.iphones_only .collapsible > .eby-coll-list';
const $burger = '#btnMenuMobile .menuBtnMobile';

const braPacksLink = '.mobile-nav-desktop.iphones_only .collapsible .eby-coll-list.active .mega-nav-columns > .mega-nav-column';
describe('1. Bralettes', () => {

  it(`Visit /products/laurel-green-and-blue-opal-cotton-bralettes-pack`, () => {
    cy.visit('/products/laurel-green-and-blue-opal-cotton-bralettes-pack');
  });
  it(`Adds 1 item to cart`, () => {
    cy.get('#AddToCart').click();
  }); 
  
  const cartIcon = '.eby-mobile-nav #hcw .cart-link.jsDrawerOpenRight';
  it(`Open cart icon`, () => {
    cy.get(cartIcon).click();
  });

  const cartItem = 'form.cart.ajaxcart .drawerProduct.ajaxCartRow';
  const itemTitle = ' .onetimeTitle.prod_line';
  const price = '.drawerActionsFooter .drawerProductPrice .bfx-product-subtotal.bfx-price';
  const listItem = '.cartItemsListingWrapper .ajaxCartProduct.bfx-product > .drawerProduct.ajaxCartRow';
  const prop = 'data-prop';
  const dataVid = 'data-vid';

  it(`Has attributes data-line`, () => {
    cy.get(cartItem).should('have.attr', 'data-line', '1');
  });
  it(`Has attributes ${prop}`, () => {
    cy.get(cartItem).should('have.attr', prop, 'bundle');
  });
  it(`Has attributes ${dataVid}`, () => {
    cy.get(cartItem).should('have.attr', dataVid, '40744891809836');
  });
  it(`Has item in cart with tittle seamless`, () => {
    cy.get(cartItem + itemTitle).should('contain', 'Seamless')
  });
  it(`Has item in cart with price $80`, () => {
    cy.get(price).should('contain', '80')
  });
  it(`Should only have 2 children`, () => {
    cy.get(listItem).eq(2)
  });

  const closeIt = '#cartDrawer .jsDrawerClose';
  it(`Exit cart icon_________________________`, () => {
    cy.get(closeIt).click();
    cy.wait(3000);
  }); 

  it(`Adds 2nd item to cart`, () => {
    cy.get('#AddToCart').click();
  }); 
  it(`Open cart icon`, () => {
    cy.get(cartIcon).click();
  });
  it(`Should only have 2 children`, () => {
    cy.get(listItem).eq(2)
  });
  it(`Has attributes data-line = 2`, () => {
    cy.get(cartItem).should('have.attr', 'data-line', '1');
  });
  it(`Has item in cart with price $160`, () => {
    cy.get(price).then(list => {
      const newText = Cypress.$(list[0]).text()

      expect(newText).to.equal('$160');
    })
  });
});








