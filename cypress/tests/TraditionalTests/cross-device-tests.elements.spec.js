/// <reference types="cypress" />
import {
  shouldBeVisible,
  shouldEqual,
  shouldInvokeAttribute,
  viewPortSize,
  checkSizes,
  fetchTestTitle,
  switchViewports
} from '../../utils/utilityFunctions';
import { actions, elements, expects } from '../../pages/pageObjects';
// const viewports = [[1200, 700], [768, 700], [375, 812]];

const viewports = {
  laptop: [1200, 700],
  tablet: [768, 700],
  mobile: [375, 812],
}; 
const { laptop, tablet, mobile } = viewports;



context('Cross-Device Elements Test', () => {

  beforeEach(() => {
    actions.goToV1AppUrl();
  });

  describe('All Viewport Tests', () => {
    const viewports = [tablet, mobile, laptop];
    viewports.forEach(size => {

      describe(`Viewport verification tests on viewport: [${checkSizes(size)}]`, function(){
        it(`Displays logo`, function(){
          switchViewports(size);
          shouldBeVisible(fetchTestTitle(this), elements.logo(), viewPortSize(size));
        });
        it(`Displays the top banner`, function(){
          switchViewports(size);
          shouldBeVisible(fetchTestTitle(this), elements.topBanner(), viewPortSize(size));
        });
        it(`Displays Account icon`, function(){
          switchViewports(size);
          shouldBeVisible(fetchTestTitle(this), elements.accessLink(), viewPortSize(size));
        });
        it(`Displays shoppingCart icon on navbar`, function(){
          switchViewports(size);
          shouldBeVisible(fetchTestTitle(this), elements.shoppingCart(), viewPortSize(size));
        });
        it(`Shows sorting options with consistent number of items on dropdown`, function(){
          switchViewports(size);
          actions.selectSortingDropdown();
          shouldBeVisible(fetchTestTitle(this), elements.itemSortingDropdown(), viewPortSize(size));
        });
  
      })

      describe(`Displays consistency of product items on viewport: [${checkSizes(size)}]`, () => {
        it(`should show equal number of items in the page`, function(){
          switchViewports(size);
          shouldEqual(fetchTestTitle(this), elements.gridItems(), viewPortSize(size), 9);
        });
        it(`should show countdown consistency`, function(){
          switchViewports(size);
          shouldEqual(fetchTestTitle(this), elements.countdown(), viewPortSize(size), 3);
        });
        it(`should show discounts consistency`, function(){
          switchViewports(size);
          shouldEqual(fetchTestTitle(this), elements.discounts(), viewPortSize(size), 3);
        });
      });

      describe(`Shows footer items that require no interaction on viewport: [${checkSizes(size)}]`, () => {
        it(`shows language selection dropdown option`, function(){
          switchViewports(size);
          actions.clickLanguageSelector();
          shouldBeVisible(fetchTestTitle(this), elements.languageSelector(), viewPortSize(size));
        });
        it(`shows currency selection dropdown option`, function(){
          switchViewports(size);
          actions.clickCurrencySelector();
          shouldBeVisible(fetchTestTitle(this), elements.currencySelector(), viewPortSize(size));
        });
        it(`shows copyright information`, function(){
          switchViewports(size);
          shouldBeVisible(fetchTestTitle(this), elements.copyrightInformation(), viewPortSize(size));
        });
      });

      describe.skip('color changing elements on hover on viewport', () => {
       it('shoul show elements that change color on hover', () => {
        cy.get(elements.wishListIconNavbar()).invoke('show').trigger('mouseenter')
        .should('have.css', 'color', '#004dda')
       })
      });
    });

  });

  describe('Laptop Viewport Tests (1200X700)', () => {
    const size = laptop;
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
    });
    describe(`shows sidebar for filtering shoes on viewport: [${checkSizes(size)}]`, function(){
      
      it('shows type filtering option on sidebar', function(){
        shouldBeVisible(fetchTestTitle(this), elements.typeFilter(), viewPortSize(size));
      });
      it('shows consistent number of items in type filter', function(){
        shouldEqual(fetchTestTitle(this), elements.typeFilterElements(), viewPortSize(size), 4);
      });
      it('shows colors filtering option on sidebar', function(){
        shouldBeVisible(fetchTestTitle(this), elements.colorsFilter(), viewPortSize(size));
      });
      it('shows consistent number of items in colors filter', function(){
        shouldEqual(fetchTestTitle(this), elements.colorsFilterElements(), viewPortSize(size), 5);
      });
      it('shows brands filtering option on sidebar', function(){
        shouldBeVisible(fetchTestTitle(this), elements.brandsFilter(), viewPortSize(size));
      });
      it('shows consistent number of items in brands filter', function(){
        shouldEqual(fetchTestTitle(this), elements.brandsFilterElements(), viewPortSize(size), 5);
      });
      it('shows price filtering option on sidebar', function(){
        shouldBeVisible(fetchTestTitle(this), elements.priceFilter(), viewPortSize(size));
      });
      it('shows consistent number of items in price filter', function(){
        shouldEqual(fetchTestTitle(this), elements.priceFilterElements(), viewPortSize(size), 4);
      });
    });

    describe(`shows shopping utilities on hover of items on viewport [${checkSizes(size)}]`, () => {
      it('shows wishlist icon and its tooltip', function(){
        actions.hoverOnfirstItem();
        expects.wishlistTooltipToBePresent();
        shouldBeVisible(fetchTestTitle(this), elements.wishListIcon(), viewPortSize(size));
      });
      it('shows cart icon and its tooltip', function(){
        actions.hoverOnfirstItem();
        expects.cartTooltipToBePresent();
        shouldBeVisible(fetchTestTitle(this), elements.cartIcon(), viewPortSize(size));
      });
      it('shows compare icon and its tooltip', function(){
        actions.hoverOnfirstItem();
        expects.compareTooltipToBePresent();
        shouldBeVisible(fetchTestTitle(this), elements.compareIcon(), viewPortSize(size));
      })
    })
    it('shows search placeholder on the search field', function(){
      shouldInvokeAttribute(fetchTestTitle(this), elements.searchInput(),
        viewPortSize(size), 'placeholder', 'Search over 10,000 shoes!');
    });
    it('shows filter button', function(){
      shouldBeVisible(fetchTestTitle(this), elements.filterButton(), viewPortSize(size));
    });
    it('shows reset button', function(){
      shouldBeVisible(fetchTestTitle(this), elements.resetButton(), viewPortSize(size));
    });
    it('shows wishlist icon on navbar', function(){
      shouldBeVisible(fetchTestTitle(this), elements.wishListIconNavbar(), viewPortSize(size));
    });
    it('shows submenu for item categories on navbar', function(){
      shouldBeVisible(fetchTestTitle(this), elements.submenu(), viewPortSize(size));
    });
  });

  describe('Tablet Viewport Tests (768 * 700)', () => {
    const size = tablet;
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
    });
    it(`shows email placeholder`, function(){
      shouldInvokeAttribute(fetchTestTitle(this), elements.keepInTouchEmail(),
    viewPortSize(size), 'placeholder', 'Your email');
    });
  });

  describe('Laptop and Tablet Tests (1200 X 700, 768 X 700)', () => {
    const viewports = [laptop, tablet];
    viewports.forEach(size => {

      describe(`Navbar tests on viewport: [${checkSizes(size)}]`, ()=> {

        it(`shows cart icon with items ready for checkout`, function(){
          switchViewports(size);
          expects.cartIconToBePresent();
          shouldBeVisible(fetchTestTitle(this), elements.shoppingCartItemCount(), viewPortSize(size));
        });
        it(`shows search placeholder on the search field`, function(){
          switchViewports(size);
          shouldInvokeAttribute(fetchTestTitle(this), elements.searchInput(),
            viewPortSize(size), 'placeholder', 'Search over 10,000 shoes!');
        });
        it(`Displays search icon on navbar`, function(){
          switchViewports(size);
          shouldBeVisible(fetchTestTitle(this), elements.searchIcon(), viewPortSize(size));
        });
      });
      
      describe(`Footer items tests on viewport [${checkSizes(size)}]`, () => {
        it(`shows quick links footer items`, function(){
          switchViewports(size);
          expects.validateQuickLinkItems();
          shouldBeVisible(fetchTestTitle(this), elements.quickLinksDropdown(), viewPortSize(size));
        });
        it(`shows contacts footer items`, function(){
          switchViewports(size);
          expects.validateContactItems();
          shouldBeVisible(fetchTestTitle(this), elements.contactsDropdown(), viewPortSize(size));
        });
  
        describe(`Keep in touch footer items tests on viewport [${checkSizes(size)}]`, () => {
          beforeEach(() => {
            expects.validateKeepInTouchItems();
          });
          it(`shows keep in touch items`, function(){
            switchViewports(size);
            shouldBeVisible(fetchTestTitle(this), elements.keepInTouchDropdown(), viewPortSize(size));
          });
          it(`shows email placeholder value`, function(){
            switchViewports(size);
            shouldInvokeAttribute(fetchTestTitle(this), elements.keepInTouchEmail(),
          viewPortSize(size), 'placeholder', 'Your email');
          });
        });
      });
    });
  });

    describe('Tablet and iphone-x Viewport Tests (768 X 700, 375 X 812)', () => {
      const viewports = [tablet, mobile];
      viewports.forEach(size => {

        describe(`Shopping utilities tests on viewport [${checkSizes(size)}]`, () => {
          it(`shows wishlist icon and its tooltip`, function(){
            switchViewports(size);
            expects.wishlistTooltipToBePresent();
            shouldBeVisible(fetchTestTitle(this), elements.wishListIcon(), viewPortSize(size));
          });
          it(`shows cart icon and its tooltip`, function(){
           switchViewports(size);
            expects.cartTooltipToBePresent();
            shouldBeVisible(fetchTestTitle(this), elements.cartIcon(), viewPortSize(size));
          });
          it(`shows compare icon and its tooltip`, function(){
           switchViewports(size);
            expects.compareTooltipToBePresent();
            shouldBeVisible(fetchTestTitle(this), elements.compareIcon(), viewPortSize(size));
          })
        });
      });
    });



  describe('Iphone Viewport Tests (375 * 812)', () => {
    const size = mobile;
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
    });

    context(`Shows navigation search on viewport: [${checkSizes(size)}]`, () => {
      it(`Displays search icon`, function(){
        shouldBeVisible(fetchTestTitle(this), elements.searchIconIphone(), viewPortSize(size));
      });
    });

    describe(`Footer items tests on click on viewport: [${checkSizes(size)}]`, () => {
      it('shows quick links footer items', function(){
        actions.clickQuickLinksDropdown();
        expects.validateQuickLinkItems();
        shouldBeVisible(fetchTestTitle(this), elements.quickLinksDropdown(), viewPortSize(size));
      });
      it('shows contacts footer items', function(){
        actions.clickContactsDropdown();
        expects.validateContactItems();
        shouldBeVisible(fetchTestTitle(this), elements.contactsDropdown(), viewPortSize(size));
      });

      describe(`Keep in touch footer items tests on viewport: [${checkSizes(size)}]`, () => {
        beforeEach( () => {
          actions.clickKeepInTouchDropdown();
          expects.validateKeepInTouchItems();
        })
        it('shows keep in touch dropdown', function(){
          shouldBeVisible(fetchTestTitle(this), elements.keepInTouchDropdown(), viewPortSize(size));
        });
       
        it('shows email placeholder', function(){
          shouldInvokeAttribute(fetchTestTitle(this), elements.keepInTouchEmail(),
        viewPortSize(size), 'placeholder', 'Your email');
        });
      });
    });
  });
});
