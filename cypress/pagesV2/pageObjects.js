'use strict'

const elements = {
mainHeader: () => "#DIV__mainheader__3",
mainNavigation: () => "#DIV__mainnavinn__36",
shoesDisplaySection: () => "#DIV__collg__186",
mainFooter: () => "#DIV__container__418",
shoesFilterSection: () => "#filter_col",
topBanner: () => "#DIV__topbanner__188",
submenu: () => "#UL____21",
searchIconIphone: () => "#A__btnsearchm__59",
searchIcon: () => "#BUTTONsubmit____43",
searchInput: () => "#INPUTtext____42",
accessLink: () => "#DIV__dropdowndr__55",
wishListIconNavbar: () => "#A__wishlist__52",
shoppingCart: () => "#A__cartbt__49",
shoppingCartItemCount: () => "#STRONG____50", 
logo: () => "#A____8",
gridItems: () => ".grid_item",
productGrid: () => "#product_grid",
countdown: () => ".countdown",
discounts: () => ".ribbon",
currencySelector: () => "#DIV__styledsele__467",
languageSelector: () => "#DIV__styledsele__460",
copyrightInformation: () => "#DIV__collg__471",
typeFilter: () => "#A__opened__75",
colorsFilter: () => "#A__opened__100",
colorsFilterBlack: () => "#SPAN__checkmark__107",
colorsFilterWhite: () => "#SPAN__checkmark__112",
colorsFilterBlue: () => "#SPAN__checkmark__117",
colorsFilterGreen: () => "#SPAN__checkmark__122",
colorsFilterYellow: () => "#SPAN__checkmark__127",
brandsFilter: () => "#A__opened__130",
priceFilter: () => "#A__opened__160",
priceFilterZeroToFifty: () => "#SPAN__checkmark__167",
priceFilterFiftyToOneHundred:  () => "#SPAN__checkmark__172",
priceFilterOneHundredToOneFifty:  () => "#SPAN__checkmark__177",
priceFilterOneFiftyToFiveHundred:  () => "#SPAN__checkmark__182",
typeFilterElements: () => "#filter_0 ul li",
colorsFilterElements: () => "#filter_1 ul li",
brandsFilterElements: () => "#filter_2 ul li",
priceFilterElements: () => "#filter_3 ul li",
firstBlackShoeImage: () => "#product_1",
wishListIcon: () => "#I__tiheart__225",
cartIcon: () => "#I__tishopping__233",
compareIcon: () => "#I__ticontrols__229",
wishListParent:  () => "li#LI____224",
wishListIconTooltip: () => "#A__tooltip__224",
compareParent:  () => "li#LI____227",
compareIconTooltip: () => "#A__tooltip__229",
cartIconParent:  () => "li#LI____231",
cartIconTooltip: () => "#A__tooltip__233",
filterButton: () => "#filterBtn",
resetButton: () => "#resetBtn",
sortOptionCount: () => "#sort>option",
itemSortingDropdown: () => "#DIV__sortselect__194",
aboutUs: () => "#A____426",
faq: () => "#A____428",
help: () => "#A____430",
myAccount: () => "#A____432",
blog: () => "#A____434",
contacts: () => "#A____436",
quickLinksDropdown: () => "#H3__opened__422",
contactsDropdown: () => "#H3____438",
keepInTouchDropdown: () => "#H3____448",
contactEmail: () => "#A____446",
contactLocation: () => "#LI____441",
keepInTouchEmail: () => "#email_newsletter",
sidebarFilterButton: () => "#A__openfilter__207",
productPageShoeImage: () => "#shoe_img",
productPageShoeName: () => "#shoe_name",
productPageShoeRating: () => "#SPAN__rating__76",
productPageShoeRatingId: () => "#SMALL____84",
productPageShoeRatingText: () => "#BR____85",
productPageShoeSize: () => "#DIV__row__88",
productPageShoeQuantity: () => "#DIV__row__98",
productPageShoeCartButton: () => "#A__btn__114",
productPageShoeOldPrice: () => "#old_price",
productPageShoeNewPrice: () => "#new_price",
productPageShoeDiscount: () => "#discount",
firstShoeProductPage: () => "#MAIN__bggray__64",
shoeSizeDropdown: () => ".list>li",
shoeSizeDropdownElements: (shoeSizeItem) => `.list>li:nth-child(${shoeSizeItem})`,
currentShoeSelection: () => ".current",
ratingCountText: () => "#EM__ratingcoun__82",
gridFilter: () => "#I__tiviewgrid__203",
listFilter: () => "#A__openfilter__207"
};

const actions = {
    goToV1AppUrl() {
        cy.visit(`https://demo.applitools.com/gridHackathonV1.html`)
    },
    goToV2AppUrl() {
        cy.visit(`https://demo.applitools.com/gridHackathonV2.html`)
    },
    clickCurrencySelector() {
        cy.get(elements.currencySelector()).click();

    },
    clickLanguageSelector(){
        cy.get(elements.languageSelector()).click();
    },
    hoverOnfirstItem(){
        cy.get(elements.wishListParent()).invoke('show').trigger('mouseover');
        cy.get(elements.compareParent()).invoke('show').trigger('mouseover');
        cy.get(elements.cartIconParent()).invoke('show').trigger('mouseover');
    },
    selectSortingDropdown(){
        cy.get('#sort').select('Sort by popularity').should('have.value', 'popularity');
        cy.get('#sort').select('Sort by average rating').should('have.value', 'rating');
        cy.get('#sort').select('Sort by newness').should('have.value', 'date');
        cy.get('#sort').select('Sort by price: low to high').should('have.value', 'price');
        cy.get('#sort').select('Sort by price: high to').should('have.value', 'price-desc');
    },
    clickQuickLinksDropdown(){
        cy.get(elements.quickLinksDropdown()).click();
        cy.wait(500)
    },
    clickContactsDropdown(){
        cy.get(elements.contactsDropdown()).click();
    },
    clickKeepInTouchDropdown(){
        cy.get(elements.keepInTouchDropdown()).click();
    },
    clickBlackColorFilter(){
        cy.get(elements.colorsFilterBlack()).click();
    },
    clickZeroToFiftyPriceFilter(){
        cy.get(elements.priceFilterZeroToFifty()).scrollIntoView().click();
    },
    clickFilterButton(){
        cy.get(elements.filterButton()).click();
    },
    openFilterNavigationSideBar(){
        cy.get(elements.sidebarFilterButton()).click();
    },
    resetFilter(){
        cy.get(elements.resetButton()).click({force: true});
    },
    clickFirstBlackShoe(){
        cy.get(elements.firstBlackShoeImage()).click();
    },
    clickCurrentShoeSelection(){
        cy.get(elements.currentShoeSelection()).click();
    }

};

const expects = {
    wishlistTooltipToBePresent(){
        actions.hoverOnfirstItem();
        cy.get(elements.wishListIconTooltip()).should('be.visible');
    },
    filterElementsArePresent(){
        cy.get(elements.filterButton()).scrollIntoView();
        cy.get(elements.filterButton()).should('be.visible');
        cy.get(elements.resetButton()).should('be.visible');
    },
    compareTooltipToBePresent(){
        cy.get(elements.compareIconTooltip()).should('be.visible');
    },
    cartTooltipToBePresent(){
        cy.get(elements.cartIconTooltip()).should('be.visible');
    },
    cartIconToBePresent(){
        cy.get(elements.shoppingCart()).should('be.visible');
    },
    sortingOptionstoEqual(number){
        cy.get(elements.sortOptionCount()).should().eq(`${number}`);
    }, 
    validateQuickLinkItems(){
        cy.get(elements.aboutUs()).should('be.visible');
        cy.get(elements.faq()).should('be.visible');
        cy.get(elements.help()).should('be.visible');
        cy.get(elements.myAccount()).should('be.visible');
        cy.get(elements.blog()).should('be.visible');
        cy.get(elements.contacts()).should('be.visible');
    },
    validateContactItems(){
        cy.get(elements.contactLocation()).should('be.visible');
        cy.get(elements.contactEmail()).should('be.visible');
    },
    validateKeepInTouchItems(){
        cy.get(elements.keepInTouchEmail()).should('be.visible');
    }, 
    colorFilterIsVisible(){
        cy.get(elements.colorsFilter()).should('be.visible');
        cy.get(elements.colorsFilterBlack()).should('be.visible');
        cy.get(elements.colorsFilterWhite()).should('be.visible');
        cy.get(elements.colorsFilterBlue()).should('be.visible');
        cy.get(elements.colorsFilterGreen()).should('be.visible');
        cy.get(elements.colorsFilterYellow()).should('be.visible');
    },
    priceFilterIsVisible(){
        cy.get(elements.priceFilter()).should('be.visible');
        cy.get(elements.priceFilterZeroToFifty()).scrollIntoView().should('be.visible');
        cy.get(elements.priceFilterFiftyToOneHundred()).should('be.visible');
        cy.get(elements.priceFilterOneHundredToOneFifty()).should('be.visible');
        cy.get(elements.priceFilterOneFiftyToFiveHundred()).should('be.visible');
    },
    validateProductImageElements(){
        cy.get(elements.productPageShoeName()).should('be.visible');
        cy.get(elements.productPageShoeRating()).should('be.visible');
        cy.get(elements.productPageShoeRatingId()).should('be.visible');
        // cy.get(elements.productPageShoeRatingText()).should('be.visible');
        cy.get(elements.productPageShoeSize()).should('be.visible');
        cy.get(elements.productPageShoeQuantity()).should('be.visible');
        cy.get(elements.productPageShoeCartButton()).should('be.visible');
        cy.get(elements.productPageShoeOldPrice()).should('be.visible');
        cy.get(elements.productPageShoeNewPrice()).should('be.visible');
        cy.get(elements.productPageShoeDiscount()).should('be.visible');
    },
    validateCssProperies(element, cssDefinition, cssValue){
        cy.get(element).should('have.css', `${cssDefinition}`, `${cssValue}`)
    },
    validateProductImageUrl({productId}){
        cy.url().should('contain', `${productId}`);
    },
    validateAllShoeSizes(){
        cy.get(elements.shoeSizeDropdown()).should(($lis) => {
            expect($lis).to.have.length(4);
            expect($lis.eq(0)).to.contain('Small (S)');
            expect($lis.eq(1)).to.contain('M');
            expect($lis.eq(2)).to.contain('L');
            expect($lis.eq(3)).to.contain('XL');
          })
    },
    validateRatingCountTextDisplay(){
        cy.get(elements.ratingCountText()).should('not.have.css', `margin-left`, `-30px`)
    },
}

export default {
    elements,
    actions,
    expects
   
}