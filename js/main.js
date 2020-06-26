import addEventListeners from './domInteraction/eventListeners.js';

window.onload = () => {
  addEventListeners
    .toNumeralBtns()
    .toOperatorBtns()
    .toBigOperatorBtns()
    .toBrackets()
    .toPeriod()
    .toEquals()
    .toACdelete()
    .forButtonHighlights();
};
