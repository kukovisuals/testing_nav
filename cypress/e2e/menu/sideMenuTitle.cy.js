/* Testing titles and links */

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
  const $burger = '#btnMenuMobile';
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

    cy.get($burger).click();
    cy.wait(1000);
  });
});

describe('2. Shop All', () => {

  const $el = '.mobile-nav-desktop.iphones_only ul.collapsible > li a.eby-mobile-submenu-title';
  const $rightEl = 'ul.collapsible > li a.w-mklink'
  it('Should exist', () => {
    cy.get($el)
      .eq(0)
      .should('contain.text', 'Shop All')
  });

  it('Left element href -> /collections/seamless-underwear', () => {
    cy.get($el).then( list => {
      cy.wrap(list[0])
        .should('have.attr','href', '/collections/seamless-underwear');
    })
  });

  it('right element href -> /collections/seamless-underwear', () => {
    cy.get($rightEl).then( list => {
      cy.wrap(list[0])
        .should('have.attr','href', '/collections/seamless-underwear');
    })
  });

});

describe('3. Bralettes', () => {

  const $el = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .eby-mobile-submenu-title';
  const $rightEl = 'ul.collapsible > li.eby-coll-list .mobile-nav-container-22 .mobileNavMenuDropdown '
  const index = 1;
  it('Should exist', () => {
    cy.get($el)
      .eq(index)
      .should('contain.text', 'Bralettes');
  });

  it('Left element href -> should not exist', () => {
    cy.get($el)
      .eq(index)
      .should('not.have.attr', 'href');
  });

  it('right element href -> should not exist', () => {
    cy.get($rightEl)
      .eq(index)
      .should('not.have.attr', 'href');
  });

});

describe('4. Panties', () => {

  const $el = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .eby-mobile-submenu-title';
  const $rightEl = 'ul.collapsible > li.eby-coll-list .mobile-nav-container-22 .mobileNavMenuDropdown '
  const index = 2;
  it('Should exist', () => {
    cy.get($el)
      .eq(index)
      .should('contain.text', 'Panties');
  });

  it('Left element href -> should not exist', () => {
    cy.get($el)
      .eq(index)
      .should('not.have.attr', 'href');
  });

  it('right element href -> should not exist', () => {
    cy.get($rightEl)
      .eq(index)
      .should('not.have.attr', 'href');
  });

});

describe('5. Apparel', () => {

  const $el = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .eby-mobile-submenu-title';
  const $rightEl = 'ul.collapsible > li.eby-coll-list .mobile-nav-container-22 .mobileNavMenuDropdown'
  const index = 3;
  it('Should exist', () => {
    cy.get($el)
      .eq(index)
      .should('contain.text', 'Apparel');
  });

  it('Left element href -> should not exist', () => {
    cy.get($el)
      .eq(index)
      .should('not.have.attr', 'href');
  });

  it('right element href -> should not exist', () => {
    cy.get($rightEl)
      .eq(index)
      .should('not.have.attr', 'href');
  });

});

describe('6. Best Sellers', () => {

  const $el = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .eby-mobile-submenu-title';
  const $rightEl = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .mobile-nav-container-22 .mobileNavMenuDropdown'
  const index = 4;
  it('Should exist', () => {
    cy.get($el)
      .eq(index)
      .should('contain.text', 'Best Sellers');
  });

  it('Left element href -> /collections/best-sellers', () => {
    cy.get($el)
      .eq(index)
      .should('have.attr', 'href', '/collections/best-sellers');
  });

  it('right element href -> /collections/best-sellers', () => {
    cy.get($rightEl)
      .eq(index)
      .should('have.attr', 'href', '/collections/best-sellers');
  });

});

describe('7. New Arrivals', () => {

  const $el = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .eby-mobile-submenu-title';
  const $rightEl = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .mobile-nav-container-22 .mobileNavMenuDropdown'
  const index = 5;
  it('Should exist', () => {
    cy.get($el)
      .eq(index)
      .should('contain.text', 'New Arrivals');
  });

  it('Left element href -> /collections/new-arrivals', () => {
    cy.get($el)
      .eq(index)
      .should('have.attr', 'href', '/collections/new-arrivals');
  });

  it('right element href -> /collections/new-arrivals', () => {
    cy.get($rightEl)
      .eq(index)
      .should('have.attr', 'href', '/collections/new-arrivals');
  });

});


describe('8. Subscription', () => {

  const $el = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .eby-mobile-submenu-title';
  const $rightEl = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .mobile-nav-container-22 .mobileNavMenuDropdown'
  const index = 6;
  it('Should exist', () => {
    cy.get($el)
      .eq(index)
      .should('contain.text', 'Subscription');
  });

  it('Left element href -> /pages/underwear-subscription-membership', () => {
    cy.get($el)
      .eq(index)
      .should('have.attr', 'href', '/pages/underwear-subscription-membership');
  });

  it('right element href -> /pages/underwear-subscription-membership', () => {
    cy.get($rightEl)
      .eq(index)
      .should('have.attr', 'href', '/pages/underwear-subscription-membership');
  });

});


describe('9. Reviews', () => {

  const $el = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .eby-mobile-submenu-title';
  const $rightEl = '.mobile-nav-desktop.iphones_only ul.collapsible > li.eby-coll-list .mobile-nav-container-22 .mobileNavMenuDropdown'
  const index = 7;
  it('Should exist', () => {
    cy.get($el)
      .eq(index)
      .should('contain.text', 'Reviews');
  });

  it('Left element href -> /pages/reviews', () => {
    cy.get($el)
      .eq(index)
      .should('have.attr', 'href', '/pages/reviews');
  });

  it('right element href -> /pages/reviews', () => {
    cy.get($rightEl)
      .eq(index)
      .should('have.attr', 'href', '/pages/reviews');
  });

  it('clicks', () => {
    cy.get($el)
      .contains('Reviews').click();
  });

});







