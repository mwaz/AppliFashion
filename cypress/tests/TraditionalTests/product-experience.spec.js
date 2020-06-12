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
  