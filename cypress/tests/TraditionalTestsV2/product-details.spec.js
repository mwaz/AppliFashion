/// <reference types="cypress" />
import {
  viewPortSize,
  checkSizes,
  switchViewports,
  fetchTestTitle,
  shouldBeVisible
} from '../../utils/utilityFunctions';
import { actions, elements, expects } from '../../pages/pageObjects';

const viewports = {
  laptop: [1200, 700],
  tablet: [768, 700],
  mobile: [375, 812],
}; 
const { laptop, tablet, mobile } = viewports;
const testTask = 3;

context('Product Experience', () => {
  beforeEach(() => {
      actions.goToV1AppUrl();
  });

  describe('All Viewport tests', () => {
      const viewports = [tablet, mobile, laptop];
      viewports.forEach((size) => {
          
          describe(`Naviagate to product page [${checkSizes(size)}]`, () => {
              it(`can click the first shoe image and validate details`, function(){
                switchViewports(size)
                  actions.clickFirstBlackShoe();
                  expects.validateProductImageElements()
                  expects.validateProductImageUrl({productId : 1});
                  shouldBeVisible(fetchTestTitle(this), elements.productPageShoeImage(), viewPortSize(size), testTask);
              });
          })
      });
  });
});