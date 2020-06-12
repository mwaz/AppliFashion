/// <reference types="cypress" />
import {
  shouldBeVisible,
  shouldEqual,
  shouldInvokeAttribute,
  viewPortSize,
  checkSizes,
} from '../../utils/utilityFunctions';
import { actions, elements, expects } from '../../pages/pageObjects';
const viewports = [[1200, 700], [768, 700], [375, 812]];


context('Cross-Device Elements Test', () => {

  beforeEach(() => {
    cy.visit('https://demo.applitools.com/gridHackathonV1.html')
  });

  describe('All Viewport Tests', () => {
    viewports.forEach((size) => {
      beforeEach(() => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1])

        } else {
          cy.viewport(size)
        }

      })

      it(`Displays logo on viewport [${checkSizes(size)}]`, () => {
        shouldBeVisible(1, "Logo is displayed", elements.logo(), viewPortSize(size));
      });

      it(`Displays the top banner on viewport [${checkSizes(size)}]`, () => {
        shouldBeVisible(1, "Top banner is displayed", elements.topBanner(), viewPortSize(size));
      });

      it(`Displays search icon on viewport [${checkSizes(size)}]`, () => {
        shouldBeVisible(1, "Search Icon is displayed", elements.searchIcon(), viewPortSize(size));
      });

      it(`Displays Account icon on viewport [${checkSizes(size)}]`, () => {
        shouldBeVisible(1, "User account icon is displayed", elements.accessLink(), viewPortSize(size));
      });

      it(`Displays shoppingCart icon on navbar viewport [${checkSizes(size)}]`, () => {
        shouldBeVisible(1, "Shopping Cart is displayed on navbar", elements.shoppingCart(), viewPortSize(size));
      });

      it(`Shows sorting options with consistent number of items on dropdown [${checkSizes(size)}]`, () => {
        actions.selectSortingDropdown();
        shouldBeVisible(1, "shows sorting options and count on product page", elements.itemSortingDropdown(), viewPortSize(size));
      });


      describe(`Displays consistency product items in all viewports [${checkSizes(size)}]`, () => {
        it(`should show equal number of items in the page in all viewports  [${checkSizes(size)}]`, () => {
          shouldEqual(6, "All items on the site are displayed across all viewports", elements.gridItems(), viewPortSize(size), 9);
        });
        it(`should show countdown consistency across all viewports [${checkSizes(size)}]`, () => {
          shouldEqual(7, "shows countdown consistency of items across all viewports", elements.countdown(), viewPortSize(size), 3);
        });
        it(`should show discounts consistency across all viewports [${checkSizes(size)}]`, () => {
          shouldEqual(8, "shows  consistency of discounted items across all viewports", elements.discounts(), viewPortSize(size), 3);
        });

      });


      describe('Shows footer items requiring no interaction', () => {
        it(`shows language selection option [${checkSizes(size)}]`, () => {
          actions.clickLanguageSelector();
          shouldBeVisible(1, "language selector dropdown is present", elements.languageSelector(), viewPortSize(size));

        });
        it(`shows currency selection option [${checkSizes(size)}]`, () => {
          actions.clickCurrencySelector();
          shouldBeVisible(1, "currency selector dropdown is present", elements.currencySelector(), viewPortSize(size));

        });
        it(`shows copyright information [${checkSizes(size)}]`, () => {
          shouldBeVisible(1, "copyright information is present", elements.copyrightInformation(), viewPortSize(size));

        });
      });
    });

  });

  describe('Desktop Viewport Tests (1200X700)', () => {
    const size = [1200, 700];
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
    });
    context('shows sidebar for filtering shoes', () => {
      it('shows type filtering option on sidebar', () => {
        shouldBeVisible(1, "type filtering option is present", elements.typeFilter(), viewPortSize(size));
      });
      it('shows consistent number of items in type filter', () => {
        shouldEqual(13, "shows  consistency of items in type filter section", elements.typeFilterElements(), viewPortSize(size), 4);
      });
      it('shows colors filtering option on sidebar', () => {
        shouldBeVisible(1, "colors filtering option is present", elements.colorsFilter(), viewPortSize(size));
      });
      it('shows consistent number of items in colors filter', () => {
        shouldEqual(15, "shows  consistency of items in colors filter section", elements.colorsFilterElements(), viewPortSize(size), 5);
      });
      it('shows brands filtering option on sidebar', () => {
        shouldBeVisible(1, "brands filtering option is present", elements.brandsFilter(), viewPortSize(size));
      });
      it('shows consistent number of items in brands filter', () => {
        shouldEqual(17, "shows  consistency of items in brands filter section", elements.brandsFilterElements(), viewPortSize(size), 5);
      });
      it('shows price filtering option on sidebar', () => {
        shouldBeVisible(1, "price filtering option is present", elements.priceFilter(), viewPortSize(size));
      });
      it('shows consistent number of items in price filter', () => {
        shouldEqual(19, "shows  consistency of items in colors price section", elements.priceFilterElements(), viewPortSize(size), 4);
      });
    });

    describe('shows shopping utilities on hover of items', () => {
      it('shows wishlist icon and its tooltip', () => {
        actions.hoverOnfirstItem();
        expects.wishlistTooltipToBePresent();
        shouldBeVisible(1, "wishlist icon with its tooltip is present", elements.wishListIcon(), viewPortSize(size));
      });
      it('shows cart icon and its tooltip', () => {
        actions.hoverOnfirstItem();
        expects.cartTooltipToBePresent();
        shouldBeVisible(1, "cart icon with its tooltip is present", elements.cartIcon(), viewPortSize(size));
      });
      it('shows compare icon and its tooltip', () => {
        actions.hoverOnfirstItem();
        expects.compareTooltipToBePresent();
        shouldBeVisible(1, "compare icon with its tooltip is present", elements.compareIcon(), viewPortSize(size));
      })
    })

    it('shows search placeholder on the search field', () => {
      shouldInvokeAttribute(23, "shows placeholder value of the search field", elements.searchInput(),
        viewPortSize(size), 'placeholder', 'Search over 10,000 shoes!');

    });
    it('shows filter button', () => {
      shouldBeVisible(1, "filter button is present", elements.filterButton(), viewPortSize(size));
    });
    it('shows reset button', () => {
      shouldBeVisible(1, "reset button is present", elements.resetButton(), viewPortSize(size));
    });

    it('shows wishlist icon on navbar', () => {
      shouldBeVisible(1, "wish list icon is present on navbar", elements.wishListIconNavbar(), viewPortSize(size));
    });
    it('shows submenu for item categories on navbar', () => {
      shouldBeVisible(1, "shows submenu for item categories", elements.submenu(), viewPortSize(size));
    });
  });

  describe('Tablet Viewport Tests (768 * 700)', () => {
    const size = [768, 700];
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
    });
    it('sample test');
  });

  describe('Desktop and Tablet Tests (1200 X 700, 768 X 700)', () => {
    const viewports = [[1200, 700], [768, 700]];
    viewports.forEach(size => {
      beforeEach(() => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1])

        } else {
          cy.viewport(size)
        }
      });
      it(`shows cart icon with items ready for checkout [${checkSizes(size)}]`, () => {
        expects.cartIconToBePresent();
        shouldBeVisible(1, "cart icon with items", elements.shoppingCartItemCount(), viewPortSize(size));
      });

      it(`shows search placeholder on the search field [${checkSizes(size)}]`, () => {
        shouldInvokeAttribute(29, "shows placeholder value of the search field", elements.searchInput(),
          viewPortSize(size), 'placeholder', 'Search over 10,000 shoes!');
      });
      describe('Shows footer items', () => {
        it(`shows quick links footer items [${checkSizes(size)}]`, () => {
          expects.validateQuickLinkItems();
          shouldBeVisible(1, "footer quick links should be present" , elements.quickLinksDropdown(), viewPortSize(size));
        });
        it(`shows contacts footer items [${checkSizes(size)}]`, () => {
          expects.validateContactItems();
          shouldBeVisible(1, "footer contact details should be present" , elements.contactsDropdown(), viewPortSize(size));
        });
  
        describe('shows keep in touch footer items', () => {
          beforeEach( () => {
            expects.validateKeepInTouchItems();
          })
          it(`shows keep in touch dropdown [${checkSizes(size)}]`, () => {
            shouldBeVisible(1, "footer keep in touch details should be present" , elements.keepInTouchDropdown(), viewPortSize(size));
          });
         
          it(`shows email placeholder [${checkSizes(size)}]`, () => {
            shouldInvokeAttribute(23, "shows placeholder value of the keep in touch email field", elements.keepInTouchEmail(),
          viewPortSize(size), 'placeholder', 'Your email');
          });
        });
      });
    });
  });

    describe('Tablet and iphone-x Viewport Tests (768 X 700, 375 X 812)', () => {
      const viewports = [[768, 700], [375, 812]];
      viewports.forEach(size => {
        beforeEach(() => {
          if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1])

          } else {
            cy.viewport(size)
          }
        });

        describe('shows shopping utilities', () => {
          it(`shows wishlist icon and its tooltip [${checkSizes(size)}]`, () => {
            expects.wishlistTooltipToBePresent();
            shouldBeVisible(1, "wishlist icon with its tooltip is present", elements.wishListIcon(), viewPortSize(size));
          });
          it(`shows cart icon and its tooltip [${checkSizes(size)}]`, () => {
            expects.cartTooltipToBePresent();
            shouldBeVisible(1, "cart icon with its tooltip is present", elements.cartIcon(), viewPortSize(size));
          });
          it(`shows compare icon and its tooltip [${checkSizes(size)}]`, () => {
            expects.compareTooltipToBePresent();
            shouldBeVisible(1, "compare icon with its tooltip is present", elements.compareIcon(), viewPortSize(size));
          })
        });
      });
    });



  describe('Iphone Viewport Tests (375 * 812)', () => {
    const size = [375, 812];
    beforeEach(() => {
      cy.viewport(size[0], size[1]);
    });

    describe('Shows footer items on click', () => {
      it('shows quick links footer items', () => {
        actions.clickQuickLinksDropdown();
        expects.validateQuickLinkItems();
        shouldBeVisible(1, "footer quick links should be present" , elements.quickLinksDropdown(), viewPortSize(size));
      });
      it('shows contacts footer items', () => {
        actions.clickContactsDropdown();
        expects.validateContactItems();
        shouldBeVisible(1, "footer contact details should be present" , elements.contactsDropdown(), viewPortSize(size));
      });

      describe('shows keep in touch footer items', () => {
        beforeEach( () => {
          actions.clickKeepInTouchDropdown();
          expects.validateKeepInTouchItems();
        })
        it('shows keep in touch dropdown', () => {
          shouldBeVisible(1, "footer keep in touch details should be present" , elements.keepInTouchDropdown(), viewPortSize(size));
        });
       
        it('shows email placeholder', () => {
          shouldInvokeAttribute(23, "shows placeholder value of the keep in touch email field", elements.keepInTouchEmail(),
        viewPortSize(size), 'placeholder', 'Your email');
        });
      });
    });
  });
});
