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
  it('exit from iframe if any',() => {
    cy.visit('/');
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

//
const rightButton = '.ebyHomePanel.joinTheMovementPanel .over_text.middle_align a';
const leftButton = '.ebyHomePanel.shopAllUnderwearPanel  .over_text.middle_align a';
const giveSubscriptionTry = 'a.textLink.textLinkBtn.btn.hidden_cause';

describe('Subscribe and save button', () => {

  it('Does the right button work?',() => {
    cy.get(rightButton).click()
  });

  it('back to homepage',() => {
    cy.visit('/');
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

describe('Shop best Sellers', () => {

  it('Does the left button work?',() => {
    cy.get(leftButton).click()
  });
  const headerTitle = '.ebyBannerSummaryHeader.desktopVer h2.headerCollection';
  const subtext = '.ebyBannerSummaryHeader.desktopVer .headerCollectionSubtext';

  it('Has h2 title',() => {
    cy.wait(3000);
    getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
    cy.get(headerTitle).should( (el) => {
        expect(el).to.contain('Best Sellers')
    });
  });
  it('Has a description',() => {
    cy.get(subtext).should( (el) => {
        expect(el).to.contain('seamless')
    })
  });

  it('back to homepage',() => {
    cy.visit('/');
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

describe('Give Subscription a try', () => {

  it('Does the left button work?',() => {
    cy.get(giveSubscriptionTry).click()
  });
  it('back to homepage',() => {
    cy.visit('/');
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

const bennerLayout = '.banner_section.layoutTwo.desktop-only .over_text a';

describe('New Arrivals', () => {

  it('Does the left button work?',() => {
    cy.get(bennerLayout).click()
  });
  const headerTitle = '.ebyBannerSummaryHeader.desktopVer h2.headerCollection';
  const subtext = '.ebyBannerSummaryHeader.desktopVer .headerCollectionSubtext';

  it('Has h2 title',() => {
    cy.wait(3000);
    getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
    cy.get(headerTitle).should( (el) => {
        expect(el).to.contain('New Arrivals')
    });
  });
  it('Has a description',() => {
    cy.get(subtext).should( (el) => {
        expect(el).to.contain('seamless')
    })
  });
  it('back to homepage',() => {
    cy.visit('/');
      getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});