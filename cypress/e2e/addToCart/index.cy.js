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
// const URL = '/collections/seamless-underwear'
// describe('Exit iframe', () => {
//     it('exit from iframe if any',() => {
//         cy.visit(URL);
//         // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
//         
//     });
// });



// describe('1st GRAB ALL PAGES HREF! ', () => {
//     it(`pdp opens size`, () => {
// 
//         cy.get('#filtered-prod-listing > .item.ebyProdTile.epcWrapper.tileFilterable a.proFeaturedImage').each( (el, i) => {
//             const pdp = Cypress.$(el).attr('href')
//             pdps.push(pdp)
//             console.log(pdps)
//         });
// 
//     });
// });

let pdps = ['/products/nude-bralette', '/products/nude-bikini-panties', '/products/black-bralette', '/products/black-brief-panties', '/products/exotic-botanical-bralette', '/products/brick-dust-tank', '/products/piki-bralette', '/products/piki-brief', '/products/piki-high-cut', '/products/black-seamless-sheer-bralette', '/products/black-seamless-tank-top', '/products/picnic-rose-bralette']

for( let i = 0; i < pdps.length; i++){

    describe(`1. Start of test for href ${pdps[i]}`, () => {

        const size = 'div.swatch-element.lg';
        it(`Visits page ${pdps[i]}`,{ scrollBehavior: false }, () => {
            cy.visit(pdps[i])
            // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
        });

        it(`Click on swatch ${size}`,{ scrollBehavior: false }, () => {
            cy.scrollTo(0, 850);
            cy.wait(5000);
            cy.get(`.proVariants ${size}`).click();
        })

        it(`ADD TO CART`,{ scrollBehavior: false }, () => {
            cy.scrollTo(0, 900);
            cy.scrollTo(0, 1050);
            cy.get(`.proButton.mb20 #AddToCart`).click();
        })

        it(`Opens Icon Cart`,{ scrollBehavior: false }, () => {
            cy.scrollTo(0, 600);
            cy.wait(3000);
            cy.scrollTo(0, 500);
            cy.get(`#eby-cartIcon66229`).click( { force: true });
        })

        const chosen = 'lg'
        it(`Matches swatch action ${size}`,{ scrollBehavior: false }, () => {
            cy.get(`.drawerProductTitle > span`).then(el => {
                cy.get(el).should('contain', chosen);
            });
        })
    })
}










