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



const $el = '.mobile-nav-desktop.iphones_only .collapsible > .eby-coll-list';
const $burger = '#btnMenuMobile .menuBtnMobile';

describe('Subscription', () => {
  const subscriptionButton = '.membership-cols-2022 .eby-membership-button.ebyMicroBtn.joinNow';
  const mixStyles = '.dash-boxChoiceOption.secOpt.curate.mx';

  const listSizes = '.sizeOptListing > .sortOpt ';

  it(`1. Mix Styles`, () => {
    cy.get($el).then( list => {
      cy.wrap(list[6]).click()
    })
  });
  it('Opens subscription funnel for mix styles', () => {

    cy.wait(1000);
    cy.get(subscriptionButton).click();

    cy.wait(1000);

    cy.get(listSizes).then(list => {
      cy.wrap(list[0]).click()
    });
  })

});








