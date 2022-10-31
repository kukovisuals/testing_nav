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


describe('Motivator Bar -> BOGO Bralettes!', () => {
  it('exit from iframe if any',() => {
    cy.visit('/');
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });

  it('Should say -> Limited-Time Only BOGO Bralettes! Use code: GOBRA', () => {

    const $el = cy.get('#ribbonOne .motivator-bar__wrapper__fixedLink.us');

    expect($el).to.have.attr('href','/pages/underwear-subscription-membership');
    console.log('-------------- print the name -----------------')
    
  });

  it('Should link to -> /collections/bralettes-for-women ', () => {
    
  });
});

describe('Motivator Bar -> BOGO Bralettes!', () => {

  it('Should say ->  Subscribe Now • Save With Each Delivery!', () => {
   
  });
  it('BOGO Bralettes should link to -> pages/underwear-subscription-membership', () => {
  
  });
});