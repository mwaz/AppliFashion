'use strict'

const elements = {
topBanner: () => "#DIV__topbanner__187",
submenu: () => "#UL____21",
searchIcon: () => "#A__btnsearchm__59",
searchInput: () => "#INPUTtext____42",
accessLink: () => "#DIV__dropdowndr__55",
wishListIconNavbar: () => "#A__wishlist__52",
shoppingCart: () => "#A__cartbt__49",
shoppingCartItemCount: () => "#STRONG____50", 
logo: () => "#A____8",
gridItems: () => ".grid_item",
countdown: () => ".countdown",
discounts: () => ".ribbon",
currencySelector: () => "#DIV__styledsele__466",
languageSelector: () => "#DIV__styledsele__459",
copyrightInformation: () => "#DIV__collg__470",
typeFilter: () => "#A__opened__75",
colorsFilter: () => "#A__opened__100",
brandsFilter: () => "#A__opened__130",
priceFilter: () => "#A__opened__160",
typeFilterElements: () => "#filter_0 ul li",
colorsFilterElements: () => "#filter_1 ul li",
brandsFilterElements: () => "#filter_2 ul li",
priceFilterElements: () => "#filter_3 ul li",
firstBlackShoeImage: () => "#IMG__imgfluid__215",
wishListIcon: () => "#I__tiheart__225",
cartIcon: () => "#I__tishopping__233",
compareIcon: () => "#I__ticontrols__229",
wishListParent:  () => "li#LI____223",
wishListIconTooltip: () => "#A__tooltip__224",
compareParent:  () => "li#LI____227",
compareIconTooltip: () => "#A__tooltip__228",
cartIconParent:  () => "li#LI____231",
cartIconTooltip: () => "#A__tooltip__232",
filterButton: () => "#filterBtn",
resetButton: () => "#resetBtn",
sortOptionCount: () => "#sort>option",
itemSortingDropdown: () => "#DIV__sortselect__193",
aboutUs: () => "#A____425",
faq: () => "#A____427",
help: () => "#A____429",
myAccount: () => "#A____431",
blog: () => "#A____433",
contacts: () => "#A____435",
quickLinksDropdown: () => "#H3____421",
contactsDropdown: () => "#H3____437",
keepInTouchDropdown: () => "#H3____447",
contactEmail: () => "#A____445",
contactLocation: () => "#LI____440",
keepInTouchEmail: () => "#email_newsletter"
};

const actions = {
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
    }



};

const expects = {
    wishlistTooltipToBePresent(){
        actions.hoverOnfirstItem();
        cy.get(elements.wishListIconTooltip()).should('be.visible');
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
    validateQuickLinkItems() {
        cy.get(elements.aboutUs()).should('be.visible');
        cy.get(elements.faq()).should('be.visible');
        cy.get(elements.help()).should('be.visible');
        cy.get(elements.myAccount()).should('be.visible');
        cy.get(elements.blog()).should('be.visible');
        cy.get(elements.contacts()).should('be.visible');
    },
    validateContactItems() {
        cy.get(elements.contactLocation()).should('be.visible');
        cy.get(elements.contactEmail()).should('be.visible');
    },
    validateKeepInTouchItems(){
        cy.get(elements.keepInTouchEmail()).should('be.visible');
    }

}


export default {
    elements,
    actions,
    expects
   
}