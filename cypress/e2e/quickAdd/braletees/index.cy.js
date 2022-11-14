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
const URL = '/collections/seamless-bra-packs?preview_theme_id=126421729324'
describe('Exit iframe', () => {
  it('exit from iframe if any',() => {
    cy.visit(URL);
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
      cy.scrollTo(0, 300);
  });
});

const bralettes = {
  parent: ['6974099161132', '6974099390508'],
  green: [6793270558764, 6773865119788],
  strawberry: [6758604996652,6793245720620]
}

describe('1. Bralettes', () => {


  let braletteColor = 'green'
  it(`Green 6974099161132 has data-product ${bralettes[braletteColor][0]} and ${bralettes[braletteColor][1]}`, { scrollBehavior: false },() => {
    let i = 0
    cy.get(`.proButton.mb20.dan-6974099161132 .single-product`).then(pdp =>{
      while(i < 2){
        cy.wrap(pdp[i]).invoke('attr','data-product')
          .should('eq', `${bralettes[braletteColor][i]}`)
        i++;
      }
    });
  });

  const bColor = 'strawberry' 
  it(`Strawberry 6974099390508 has data-product ${bralettes[bColor][0]} and ${bralettes[bColor][1]}`, { scrollBehavior: false },() => {
    let i = 0
    cy.get(`.proButton.mb20.dan-6974099390508 .single-product`).then(pdp =>{
      while(i < 2){
        cy.wrap(pdp[i]).invoke('attr','data-product')
          .should('eq', `${bralettes[bColor][i]}`)
        i++;
      }
    });
  });

  // ADD TO CART
  // it('hovers on 1st item', { scrollBehavior: false },() => {
  //   cy.get('.productQuickAdd').then(list => {
  //     cy.wrap(list[0]).trigger('mouseover')
  //     cy.wait(3000);
  //   });
  // });
  // it('clicks on lg and send to cart',{ scrollBehavior: false },() => {
  //   cy.get('.proVariantsQuickview .swatch-element.lg[data-value="lg"]').click()
  // });





 //  it('hovers on 2nd item',{ scrollBehavior: false },() => {
 //    cy.get('.productQuickAdd').then(list => {
 //      cy.wrap(list[1]).trigger('mouseover')
 //      cy.wait(3000);
 //    });
 //  });
 // it('clicks on md and send to cart',{ scrollBehavior: false },() => {
 //    cy.get('.swatch-element.md[data-value="md"]').click()
 //  });
});








