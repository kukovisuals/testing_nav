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
      // https://cdn.shopify.com/s/files/1/0313/4062/5964/files/logo-dark-22.svg?v=1666920606
    cy.get($el).click();
    cy.wait(1000);
  });
});



describe('1. Shop All', () => {

  const $el = '.mobile-nav-desktop.iphones_only ul.collapsible > li a.eby-mobile-submenu-title';
  const $burger = '#btnMenuMobile .menuBtnMobile';
  const index = 0;
  
  const myUrls = {
    'shop all': '/collections/seamless-underwear',
  }
  const shopAllTitle = 'Shop All Seamless Underwear'


  it(`Element goes to -> ${myUrls['shop all']} ______________________________`, () => {
    cy.get($el).then( list => {
      cy.wrap(list[index]).click()
    })
  });

  it(`It has a title ${shopAllTitle} ` , () => {

    cy.get('h1.headerCollection')
      .should('contain', `${shopAllTitle}`)
  });

  it(`It has a description`, () => {
    const description = cy.get('.ebyBannerSummaryHeader.mobileVer .headerCollectionSubtext').should(($div) => {
      const text = $div.text();
      expect(text).to.include('seamless')
    });
  });

});

describe('2. Bralettes ______________________________', () => {
  const $el = '.mobile-nav-desktop.iphones_only ul.collapsible > li span.eby-mobile-submenu-title';
  const active = '.mobile-nav-desktop.iphones_only ul.collapsible li.active .nv-grp-22 > .nv-lst-22';
  const active2 = '.mobile-nav-desktop.iphones_only ul.collapsible li.active > .mega-nav-columns .nv-grp-22';
  const $burger = '#btnMenuMobile .menuBtnMobile ';
  const styles = '.nv-impact-22'
  const index = 0;
  
  const stylesUrl = {
    'support': '/collections/adjustable-strap-bralettes-for-women',
    'wireless': '/collections/seamless-underwear',
    'sheer': '/collections/seamless-sheer-bralettes',
    'signature': '/collections/signature-bralettes'
  }
  const shopAllTitle = 'Shop All Seamless Underwear'

  it(`Bralette is togglebale`, () => {
    cy.get($burger).click();
    cy.wait(1000);
    
    cy.get($el).then( list => {   
      cy.wrap(list[index]).click();
    });

    cy.wait(500);
  });

  it(`Support bra goes to -> ${stylesUrl['support']}`, () => {

    cy.get(active).then(list => {
       cy.wrap(list[0]).click();
    })
  });

  it(`It has a title` , () => {

    cy.get('h1.headerCollection')
      .should('contain', `Bralettes`)
  });

  it(`It has a description`, () => {
    const description = cy.get('.ebyBannerSummaryHeader.mobileVer .headerCollectionSubtext').should(($div) => {
      const text = $div.text();
      expect(text).to.include('comfortable')
    });
  });

  /***********************************************************************/

  it(`Wireless`, () => {
    cy.get($burger).click();
    cy.wait(1000);
    
    cy.get($el).then( list => {   
      cy.wrap(list[index]).click();
    });

    cy.wait(500);
  });
  it(`wireless bra goes to -> ${stylesUrl['wireless']}`, () => {

    cy.get(active).then(list => {
       cy.wrap(list[1]).click();
    })
  });
  it(`It has a title` , () => {

    cy.get('h1.headerCollection')
      .should('contain', `Bralettes`)
  });
  it(`It has a description`, () => {
    const description = cy.get('.ebyBannerSummaryHeader.mobileVer .headerCollectionSubtext').should(($div) => {
      const text = $div.text();
      expect(text).to.include('seamless')
    });
  });


  /***********************************************************************/

  it(`Sheer`, () => {
    cy.get($burger).click();
    cy.wait(1000);
    
    cy.get($el).then( list => {   
      cy.wrap(list[index]).click();
    });

    cy.wait(500);
  });
  it(`sheer bra goes to -> ${stylesUrl['sheer']}`, () => {

    cy.get(active).then(list => {
       cy.wrap(list[2]).click();
    })
  });
  it(`It has a title` , () => {

    cy.get('h1.headerCollection')
      .should('contain', `Sheer`)
  });
  it(`It has a description`, () => {
    const description = cy.get('.ebyBannerSummaryHeader.mobileVer .headerCollectionSubtext').should(($div) => {
      const text = $div.text();
      expect(text).to.include('sheer')
    });
  });


  /***********************************************************************/

  it(`------ Materials -------`, () => {
    cy.get($burger).click();
    cy.wait(1000);
    
    cy.get($el).then( list => {   
      cy.wrap(list[index]).click();
    });

    cy.wait(500);
  });


});

describe('4. Panties', () => {
});

describe('5. Apparel', () => {

});

describe('6. Best Sellers', () => {


});

describe('7. New Arrivals', () => {


});


describe('8. Subscription', () => {


});


describe('9. Reviews', () => {



});







