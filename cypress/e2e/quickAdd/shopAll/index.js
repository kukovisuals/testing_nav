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
const URL = '/collections/seamless-underwear'
describe('Exit iframe', () => {
    it('exit from iframe if any',() => {
        cy.visit(URL);
        // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
        
    });
});


let pdps = []
describe('1. Collection pages', () => {
    const i  = 0;
    const index = 1;
    it(`pdp ${i} opens size`,  { scrollBehavior: false }, () => {
        cy.get('#filtered-prod-listing > .item.ebyProdTile.epcWrapper.tileFilterable').each( (el, i) => {
            const pdp = Cypress.$(el).attr('data-prodsku')
            pdps.push(pdp)
        });
        cy.get('#filtered-prod-listing > .item.ebyProdTile.epcWrapper.tileFilterable button.btnProductQuickAdd').then( list => {
            cy.scrollTo(0, 0);
            cy.wrap(list[index]).click();
        });
    });

    const size = 'div.swatch-element.lg';

    let dy = 0;
    const pageY = 667;

    if( ( (index % 2) === 0) && index > 0 ){
        dy = dy + 1;
    }
    it(`clicks on size ${size}`, { scrollBehavior: false },() => {
        cy.wait(3000);
        cy.get(`#product-actions-${pdps[index]} .proVariantsQuickview div.swatch.clearfix ${size}`).click();
    })

    it(`Adds it to cart`, () => {
        
        cy.get(`#eby-singleAdd6622911`).click()
    })
});









