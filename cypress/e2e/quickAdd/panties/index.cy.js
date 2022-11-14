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
const URL = '/collections/seamless-panties-packs?preview_theme_id=126421729324'
describe('Exit iframe', () => {
  it('exit from iframe if any',() => {
    cy.visit(URL);
    cy.wait(3000);
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
      cy.scrollTo(0, 300);
  });
});

const meshHighCut = {
  parent: '6984109686828',
  children: [
    {'6599022247980':'productSelector-black-mesh-highwaisted-panties'},
    {'6599107313708':'productSelector-coral-pink-mesh-high-waisted-panties'},
    {'6599095910444':'productSelector-caribbean-sea-mesh-highwaisted-panties'}
  ],
  keys: ['6599022247980','6599107313708', '6599095910444']
}

describe('1. Mesh Thong Pack', () => {


  it(`1. ${meshHighCut['parent']} has data-product 6599022247980, 6599107313708, 6599095910444`, { scrollBehavior: false },() => {
    let i = 0
    cy.get(`.proButton.mb20.dan-6984109686828 .single-product`).then(pdp =>{
      while(i < 2){
        cy.wrap(pdp[i]).invoke('attr','data-product')
          .should('eq', `${meshHighCut['keys'][i]}`)
        i++;
      }
    });
  });

});



const meshThong = {
  parent: '6984110145580',
  children: [
    {'6599021101100':'productSelector-black-mesh-thong-panties'},
    {'6599097778220':'productSelector-caribbean-sea-mesh-thong-panties'},
    {'6599108558892':'productSelector-coral-pink-mesh-thong-panties'}
  ],
  keys: ['6599021101100','6599097778220', '6599108558892']
}

describe('1. Mesh Thong Pack', () => {


  it(`2. ${meshThong['parent']} has data-product ${meshThong.keys[0]}, ${meshThong.keys[1]}, ${meshThong.keys[2]}`, { scrollBehavior: false },() => {
    let i = 0
    cy.get(`.proButton.mb20.dan-6984110145580 .single-product`).then(pdp =>{
      while(i < 2){
        cy.wrap(pdp[i]).invoke('attr','data-product')
          .should('eq', `${meshThong['keys'][i]}`)
        i++;
      }
    });
  });
});


const meshBreif = {
  parent: '6984108900396',
  children: [
    {'6599017005100':'productSelector-black-mesh-brief-panties'},
    {'6599105839148':'productSelector-coral-pink-mesh-brief-panties'},
    {'6599094173740':'productSelector-caribbean-sea-mesh-brief-panties'}
  ],
  keys: ['6599017005100','6599105839148', '6599094173740'],
  selector: '.proButton.mb20.dan-6984108900396 .single-product'
}

describe('1. Mesh Thong Pack', () => {


  it(`2. ${meshBreif['parent']} has data-product ${meshBreif.keys[0]}, ${meshBreif.keys[1]}, ${meshBreif.keys[2]}`, { scrollBehavior: false },() => {
    let i = 0
    cy.get(meshBreif.selector).then(pdp =>{
      while(i < 2){
        cy.wrap(pdp[i]).invoke('attr','data-product')
          .should('eq', `${meshBreif['keys'][i]}`)
        i++;
      }
    });
  });
});
/*

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
*/








